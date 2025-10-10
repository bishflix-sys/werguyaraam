
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Eye, FileSignature } from "lucide-react";

const consents = [
  { id: "CONS-01", patient: "Fatou Diop", type: "Consentement éclairé pour chirurgie", date: "2024-06-15", status: "Signé" },
  { id: "CONS-02", patient: "Moussa Sow", type: "Utilisation des données pour la recherche", date: "2024-07-01", status: "En attente" },
  { id: "CONS-03", patient: "Aïssatou Ndiaye", type: "Traitement de données personnelles", date: "2024-07-10", status: "Révoqué" },
  { id: "CONS-04", patient: "Ibrahima Fall", type: "Consentement éclairé pour traitement", date: "2024-07-20", status: "Signé" },
];


export default function ConsentPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Gestion des consentements patients</CardTitle>
          <CardDescription>
            Gérez le consentement éclairé, la journalisation et la révocation.
          </CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nouveau Formulaire
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Type de Consentement</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {consents.map((consent) => (
              <TableRow key={consent.id}>
                <TableCell className="font-medium">{consent.id}</TableCell>
                <TableCell>{consent.patient}</TableCell>
                <TableCell>{consent.type}</TableCell>
                <TableCell>{consent.date}</TableCell>
                <TableCell>
                  <Badge variant={
                    consent.status === 'Signé' ? 'default' : consent.status === 'En attente' ? 'secondary' : 'destructive'
                  }  className={
                    consent.status === 'Signé' ? 'bg-green-500/80' : consent.status === 'En attente' ? 'bg-yellow-500/80' : 'bg-red-500/80'
                  }>
                    {consent.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <FileSignature className="h-4 w-4" />
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
