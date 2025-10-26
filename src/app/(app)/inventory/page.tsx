
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, RefreshCw, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { isPast, isWithinInterval, addMonths } from 'date-fns';

const inventory = [
  { name: "Paracétamol 500mg", code: "PARA500", quantity: 120, minStock: 50, status: "En stock", lotNumber: "L2401A", expiryDate: "2025-12-31" },
  { name: "Amoxicilline 250mg", code: "AMOX250", quantity: 35, minStock: 30, status: "Stock faible", lotNumber: "L2311B", expiryDate: "2024-10-31" },
  { name: "Ibuprofène 400mg", code: "IBU400", quantity: 200, minStock: 50, status: "En stock", lotNumber: "L2403C", expiryDate: "2026-03-31" },
  { name: "Sérum physiologique", code: "SERUM-P", quantity: 15, minStock: 20, status: "Stock faible", lotNumber: "L2308D", expiryDate: "2024-08-31" },
  { name: "Gants stériles (boîte)", code: "GANTS-S", quantity: 8, minStock: 10, status: "Stock critique", lotNumber: "L2205E", expiryDate: "2024-05-31" },
];

export default function InventoryPage() {

  const getExpiryStatus = (expiryDate: string): { variant: 'default' | 'warning' | 'destructive', text: string } => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    
    if (isPast(expiry)) {
      return { variant: 'destructive', text: 'Périmé' };
    }
    
    if (isWithinInterval(expiry, { start: today, end: addMonths(today, 3) })) {
      return { variant: 'warning', text: 'Expire bientôt' };
    }

    return { variant: 'default', text: expiryDate };
  };


  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle className="font-headline">Gestion des Stocks & Pharmacie</CardTitle>
            <CardDescription>
              Suivez l'inventaire, la traçabilité des médicaments et les alertes de péremption.
            </CardDescription>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <RefreshCw className="mr-2 h-4 w-4"/>
                Mettre à jour
            </Button>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Ajouter un produit
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produit</TableHead>
              <TableHead>N° de Lot</TableHead>
              <TableHead>Quantité</TableHead>
              <TableHead>Niveau de Stock</TableHead>
              <TableHead>Statut Stock</TableHead>
              <TableHead>Date d'expiration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => {
              const expiryStatus = getExpiryStatus(item.expiryDate);
              let rowClass = '';
              if (expiryStatus.variant === 'destructive') rowClass = 'bg-destructive/10';
              else if (expiryStatus.variant === 'warning') rowClass = 'bg-yellow-400/10';
              else if (item.status === 'Stock critique') rowClass = 'bg-orange-500/10';

              return (
              <TableRow key={item.code} className={rowClass}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.lotNumber}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={(item.quantity / (item.minStock * 3)) * 100} className="w-[100px] h-2" />
                    <span>{Math.round((item.quantity / (item.minStock * 3)) * 100)}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={
                    item.status === 'En stock' ? 'default' : item.status === 'Stock faible' ? 'secondary' : 'destructive'
                  } className={
                     item.status === 'En stock' ? 'bg-green-500/80' : item.status === 'Stock faible' ? 'bg-yellow-500/80' : 'bg-orange-500/80'
                  }>
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>
                    {expiryStatus.variant !== 'default' ? (
                       <Tooltip>
                        <TooltipTrigger asChild>
                            <Badge variant={expiryStatus.variant === 'destructive' ? 'destructive' : 'secondary'} className={expiryStatus.variant === 'warning' ? 'bg-yellow-500/80' : ''}>
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                {expiryStatus.text}
                            </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Date d'expiration: {item.expiryDate}</p>
                        </TooltipContent>
                    </Tooltip>
                    ) : (
                        item.expiryDate
                    )}
                </TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
