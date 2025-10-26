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
import { PlusCircle, Wrench, CircleAlert } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const equipment = [
  { id: "EQP-001", name: "Électrocardiogramme (ECG)", department: "Cardiologie", status: "Opérationnel", nextMaintenance: "2024-11-15" },
  { id: "EQP-002", name: "Autoclave", department: "Stérilisation", status: "En maintenance", nextMaintenance: "2024-08-01" },
  { id: "EQP-003", name: "Échographe", department: "Imagerie", status: "Opérationnel", nextMaintenance: "2025-01-20" },
  { id: "EQP-004", name: "Moniteur patient", department: "Urgences", status: "Nécessite réparation", nextMaintenance: "2024-07-30" },
];

export default function EquipmentPage() {

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Opérationnel':
        return { variant: 'default', className: 'bg-green-500/80' };
      case 'En maintenance':
        return { variant: 'secondary', className: 'bg-yellow-500/80' };
      case 'Nécessite réparation':
        return { variant: 'destructive', className: 'bg-orange-600' };
      default:
        return { variant: 'outline', className: '' };
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Maintenance des Équipements</CardTitle>
          <CardDescription>
            Suivez les équipements médicaux, planifiez les entretiens et gérez les pannes.
          </CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter un équipement
        </Button>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Équipement</TableHead>
                <TableHead>Département</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Prochaine Maintenance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipment.map((item) => {
                const statusInfo = getStatusVariant(item.status);
                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.department}</TableCell>
                    <TableCell>
                      <Badge variant={statusInfo.variant} className={statusInfo.className}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.nextMaintenance}</TableCell>
                    <TableCell className="text-right">
                       <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant="ghost" size="icon">
                            <Wrench className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Planifier la maintenance</p>
                        </TooltipContent>
                      </Tooltip>
                       <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant="ghost" size="icon" className="text-destructive">
                            <CircleAlert className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Signaler une panne</p>
                        </TooltipContent>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
