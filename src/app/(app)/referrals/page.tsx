
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
import { PlusCircle, Download, CheckCircle } from "lucide-react";

const referrals = [
  { id: "REF-001", patient: "Fatou Diop", specialty: "Cardiologie", referringDoctor: "Dr. Awa Fall", status: "Envoyée" },
  { id: "REF-002", patient: "Moussa Sow", specialty: "Ophtalmologie", referringDoctor: "Dr. Awa Fall", status: "Acceptée" },
  { id: "REF-003", patient: "Ibrahima Fall", specialty: "Pneumologie", referringDoctor: "Dr. Omar Gueye", status: "En attente" },
  { id: "REF-004", patient: "Bineta Camara", specialty: "Gynécologie", referringDoctor: "Dr. Awa Fall", status: "Terminée" },
];

export default function ReferralsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Gestion des références / transferts</CardTitle>
          <CardDescription>
            Générez des lettres de sortie et suivez les références externes.
          </CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nouvelle Référence
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Spécialité</TableHead>
              <TableHead>Médecin Référent</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referrals.map((referral) => (
              <TableRow key={referral.id}>
                <TableCell className="font-medium">{referral.id}</TableCell>
                <TableCell>{referral.patient}</TableCell>
                <TableCell>{referral.specialty}</TableCell>
                <TableCell>{referral.referringDoctor}</TableCell>
                <TableCell>
                   <Badge variant={
                    referral.status === 'Acceptée' || referral.status === 'Terminée' ? 'default' : referral.status === 'En attente' ? 'secondary' : 'outline'
                  } className={
                     referral.status === 'Acceptée' ? 'bg-blue-500' : referral.status === 'Terminée' ? 'bg-green-500' : referral.status === 'En attente' ? 'bg-yellow-500/80' : ''
                  }>
                    {referral.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  {referral.status === 'Acceptée' && (
                    <Button variant="ghost" size="icon">
                        <CheckCircle className="h-4 w-4 text-green-600"/>
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
