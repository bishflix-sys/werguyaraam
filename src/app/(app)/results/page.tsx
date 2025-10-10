
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
import { Upload, Eye } from "lucide-react";

const labResults = [
  { id: "LAB-0123", patient: "Fatou Diop", test: "NFS", date: "2024-07-25", status: "Anormal" },
  { id: "LAB-0124", patient: "Moussa Sow", test: "HbA1c", date: "2024-07-26", status: "Normal" },
  { id: "IMG-0056", patient: "Ibrahima Fall", test: "Radio Thorax", date: "2024-07-26", status: "Disponible" },
  { id: "LAB-0125", patient: "Aïssatou Ndiaye", test: "Bilan lipidique", date: "2024-07-27", status: "En attente" },
];

export default function LabResultsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Suivi des résultats de labo / imagerie</CardTitle>
          <CardDescription>
            Importez et visualisez les résultats DICOM, LOINC avec historique graphique.
          </CardDescription>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Importer des Résultats
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Résultat</TableHead>
              <TableHead>Patient</TableHead>
              <TableHead>Examen</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {labResults.map((result) => (
              <TableRow key={result.id}>
                <TableCell className="font-medium">{result.id}</TableCell>
                <TableCell>{result.patient}</TableCell>
                <TableCell>{result.test}</TableCell>
                <TableCell>{result.date}</TableCell>
                <TableCell>
                  <Badge variant={
                    result.status === 'Anormal' ? 'destructive' : result.status === 'Normal' || result.status === 'Disponible' ? 'default' : 'secondary'
                  } className={result.status === 'Normal' || result.status === 'Disponible' ? 'bg-green-500' : ''}>
                    {result.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
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
