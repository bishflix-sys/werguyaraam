
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
import { PlusCircle, Printer } from "lucide-react";

const deathCertificates = [
  { id: "DEC-001", patientName: "Daouda Diallo", dateOfDeath: "2024-07-28", timeOfDeath: "14:30", hospital: "Hôpital Principal de Dakar", declaringDoctor: "Dr. Awa Fall" },
  { id: "DEC-002", patientName: "Khadija Sarr", dateOfDeath: "2024-07-27", timeOfDeath: "08:15", hospital: "CHNU Fann", declaringDoctor: "Dr. Omar Gueye" },
];

export default function DeathsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Constats de Décès</CardTitle>
          <CardDescription>
            Gérez et archivez les constats de décès officiels.
          </CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nouveau Constat
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Constat</TableHead>
              <TableHead>Nom du Patient</TableHead>
              <TableHead>Date du Décès</TableHead>
              <TableHead>Heure du Décès</TableHead>
              <TableHead>Hôpital</TableHead>
              <TableHead>Médecin Déclarant</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deathCertificates.map((cert) => (
              <TableRow key={cert.id}>
                <TableCell className="font-medium">{cert.id}</TableCell>
                <TableCell>{cert.patientName}</TableCell>
                <TableCell>{cert.dateOfDeath}</TableCell>
                <TableCell>{cert.timeOfDeath}</TableCell>
                <TableCell>{cert.hospital}</TableCell>
                <TableCell>{cert.declaringDoctor}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Printer className="h-4 w-4" />
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
