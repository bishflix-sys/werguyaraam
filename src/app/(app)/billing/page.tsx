
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
import { FileDown, PlusCircle } from "lucide-react";

const invoices = [
  { id: "FACT-001", patient: "Fatou Diop", date: "2024-07-28", amount: "25 000 CFA", status: "Payée" },
  { id: "FACT-002", patient: "Moussa Sow", date: "2024-07-28", amount: "15 000 CFA", status: "En attente" },
  { id: "FACT-003", patient: "Aïssatou Ndiaye", date: "2024-07-27", amount: "35 000 CFA", status: "Payée" },
  { id: "FACT-004", patient: "Ibrahima Fall", date: "2024-07-26", amount: "5 000 CFA", status: "Annulée" },
  { id: "FACT-005", patient: "Ousmane Gueye", date: "2024-07-25", amount: "12 500 CFA", status: "En attente" },
];

export default function BillingPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Facturation & Paiements</CardTitle>
          <CardDescription>
            Gérez la facturation des actes, le suivi des assurances et les paiements.
          </CardDescription>
        </div>
         <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Créer une facture
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Facture ID</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.patient}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>
                  <Badge variant={
                    invoice.status === 'Payée' ? 'default' : invoice.status === 'En attente' ? 'secondary' : 'destructive'
                  } className={
                    invoice.status === 'Payée' ? 'bg-green-500/80' : invoice.status === 'En attente' ? 'bg-yellow-500/80' : 'bg-red-500/80'
                  }>
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <FileDown className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
