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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const hospitals = [
  { name: "Hôpital Principal de Dakar", city: "Dakar", type: "Hôpital", category: "Public" },
  { name: "Hôpital Aristide Le Dantec", city: "Dakar", type: "Hôpital", category: "Public" },
  { name: "Clinique de la Madeleine", city: "Dakar", type: "Clinique", category: "Privé" },
  { name: "Hôpital de Fann", city: "Dakar", type: "Hôpital", category: "Universitaire" },
  { name: "Clinique du Cap", city: "Dakar", type: "Clinique", category: "Privé" },
  { name: "Hôpital Régional de Thiès", city: "Thiès", type: "Hôpital", category: "Public" },
  { name: "Clinique Les Mamelles", city: "Dakar", type: "Clinique", category: "Privé" },
  { name: "Hôpital de la Paix de Ziguinchor", city: "Ziguinchor", type: "Hôpital", category: "Public" },
  { name: "Hôpital Régional de Saint-Louis", city: "Saint-Louis", type: "Hôpital", category: "Public" },
  { name: "Clinique Casahous", city: "Dakar", type: "Clinique", category: "Privé" },
  { name: "Hôpital El Hadj Ibrahima Niasse", city: "Kaolack", type: "Hôpital", category: "Public" },
  { name: "SUMA Assistance", city: "Dakar", type: "Clinique", category: "Privé" },
  { name: "Hôpital Matlaboul Fawzaini", city: "Touba", type: "Hôpital", category: "Privé" },
  { name: "Hôpital Régional de Tambacounda", city: "Tambacounda", type: "Hôpital", category: "Public" },
];


export default function HospitalsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Annuaire Weergu Yaram</CardTitle>
        <CardDescription>
          Annuaire des établissements de santé au Sénégal.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
            <Input placeholder="Rechercher un établissement..." className="w-full md:w-1/3" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom de l'établissement</TableHead>
              <TableHead>Ville</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Catégorie</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hospitals.map((hospital) => (
              <TableRow key={hospital.name}>
                <TableCell className="font-medium">{hospital.name}</TableCell>
                <TableCell>{hospital.city}</TableCell>
                <TableCell>
                    <Badge variant={hospital.type === 'Hôpital' ? 'secondary' : 'outline'}>{hospital.type}</Badge>
                </TableCell>
                <TableCell>
                    <Badge variant={hospital.category === 'Public' ? 'default' : 'secondary'} className={hospital.category === 'Public' ? 'bg-primary text-primary-foreground' : 'bg-green-500'}>
                        {hospital.category}
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
