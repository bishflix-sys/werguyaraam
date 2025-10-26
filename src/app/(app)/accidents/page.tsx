
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
import { PlusCircle, FileText } from "lucide-react";

const accidentReports = [
  { id: "ACC-001", patient: "Cheikh Dieng", dateTime: "2024-07-30 09:52", location: "Voie publique", urgency: "Haute" },
  { id: "ACC-002", patient: "Ndèye Fall", dateTime: "2024-07-29 14:00", location: "Domicile", urgency: "Moyenne" },
  { id: "ACC-003", patient: "Mamadou Sy", dateTime: "2024-07-28 18:30", location: "Lieu de travail", urgency: "Faible" },
];

export default function AccidentsPage() {

    const getUrgencyBadge = (urgency: string) => {
        switch (urgency) {
            case 'Haute':
                return 'destructive';
            case 'Moyenne':
                return 'secondary';
            default:
                return 'outline';
        }
    }

    const getUrgencyColor = (urgency: string) => {
        switch (urgency) {
            case 'Haute':
                return 'bg-red-500/80';
            case 'Moyenne':
                return 'bg-yellow-500/80';
            default:
                return '';
        }
    }


  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Rapports d'Accident et Demandes d'Urgence</CardTitle>
          <CardDescription>
            Gérez les constats d'accident et les demandes d'intervention urgente.
          </CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nouveau Rapport
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Rapport</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Date & Heure</TableHead>
              <TableHead>Lieu</TableHead>
              <TableHead>Niveau d'Urgence</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accidentReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.id}</TableCell>
                <TableCell>{report.patient}</TableCell>
                <TableCell>{report.dateTime}</TableCell>
                <TableCell>{report.location}</TableCell>
                <TableCell>
                  <Badge variant={getUrgencyBadge(report.urgency)} className={getUrgencyColor(report.urgency)}>
                    {report.urgency}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <FileText className="h-4 w-4" />
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
