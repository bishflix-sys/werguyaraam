
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
import { PlusCircle, RefreshCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const inventory = [
  { name: "Paracétamol 500mg", code: "PARA500", quantity: 120, minStock: 50, status: "En stock" },
  { name: "Amoxicilline 250mg", code: "AMOX250", quantity: 35, minStock: 30, status: "Stock faible" },
  { name: "Ibuprofène 400mg", code: "IBU400", quantity: 200, minStock: 50, status: "En stock" },
  { name: "Sérum physiologique", code: "SERUM-P", quantity: 15, minStock: 20, status: "Stock faible" },
  { name: "Gants stériles (boîte)", code: "GANTS-S", quantity: 8, minStock: 10, status: "Stock critique" },
];


export default function InventoryPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle className="font-headline">Gestion des Stocks de Médicaments</CardTitle>
            <CardDescription>
              Suivez en temps réel les niveaux de stock et gérez les approvisionnements.
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produit</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Quantité</TableHead>
              <TableHead>Niveau de Stock</TableHead>
              <TableHead>Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.code} className={item.status === 'Stock critique' ? 'bg-destructive/10' : ''}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.code}</TableCell>
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
                     item.status === 'En stock' ? 'bg-green-500/80' : item.status === 'Stock faible' ? 'bg-yellow-500/80' : ''
                  }>
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
