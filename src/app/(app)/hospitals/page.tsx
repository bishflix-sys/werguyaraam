
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
import { useState } from "react";

const allHospitals = [
    { name: "Centre Hospitalier National Universitaire (CHNU) Fann", city: "Dakar", type: "Hôpital", category: "Public" },
    { name: "Hôpital Principal de Dakar", city: "Dakar", type: "Hôpital", category: "Public" },
    { name: "Hôpital Aristide Le Dantec", city: "Dakar", type: "Hôpital", category: "Public" },
    { name: "Centre Hospitalier Régional (CHR) de Saint-Louis", city: "Saint-Louis", type: "Hôpital", category: "Public" },
    { name: "Centre Hospitalier National de Pikine", city: "Pikine/Dakar", type: "Hôpital", category: "Public" },
    { name: "Hôpital Général de Grand Yoff", city: "Dakar", type: "Hôpital", category: "Public" },
    { name: "Hôpital de Mbour (Hôpital départemental)", city: "Mbour (Thiès)", type: "Hôpital", category: "Public" },
    { name: "Hôpital de Kaolack (CHR Kaolack)", city: "Kaolack", type: "Hôpital", category: "Public" },
    { name: "Hôpital Matam (CHR / régional)", city: "Matam", type: "Hôpital", category: "Public" },
    { name: "Hôpital de Ziguinchor (CHR)", city: "Ziguinchor", type: "Hôpital", category: "Public" },
    { name: "Centre National Hospitalier d’Enfants Albert Royer", city: "Dakar", type: "Hôpital Pédiatrique", category: "Public" },
    { name: "Hôpital d’Enfants de Diamniadio", city: "Diamniadio/Dakar", type: "Hôpital Pédiatrique", category: "Public" },
    { name: "Clinique de la Madeleine", city: "Dakar", type: "Clinique", category: "Privé" },
    { name: "Clinique du Cap", city: "Dakar", type: "Clinique", category: "Privé" },
    { name: "Clinique Casahous", city: "Dakar", type: "Clinique", category: "Privé" },
    { name: "Clinique Pasteur", city: "Dakar", type: "Clinique", category: "Privé" },
    { name: "Clinique Salgado", city: "Dakar", type: "Clinique", category: "Privé" },
    { name: "Clinique Les Mamelles", city: "Dakar", type: "Clinique", category: "Privé" },
    { name: "Clinique Medica / Cabinet médical important", city: "Rufisque / Dakar", type: "Clinique", category: "Privé" },
    { name: "Hôpital Amadou Sakhir Mbaye", city: "Saint-Louis", type: "Hôpital", category: "Public" },
    { name: "Centre de Santé Philippe Mahuilen Senghor", city: "Dakar", type: "Centre de Santé", category: "Public" },
    { name: "Hôpital de Kédougou", city: "Kédougou", type: "Hôpital", category: "Public" },
    { name: "Hôpital de Tambacounda (CHR)", city: "Tambacounda", type: "Hôpital", category: "Public" },
    { name: "Clinique Mermoz", city: "Dakar", type: "Clinique", category: "Privé" },
    { name: "Clinique Ngor / Centre privé de quartier", city: "Dakar (Ngor)", type: "Clinique", category: "Privé" },
    { name: "Hôpital de Diourbel / Touba (Ndamatou)", city: "Diourbel", type: "Hôpital", category: "Public" },
    { name: "Hôpital Béthanie", city: "Diverses régions", type: "Hôpital", category: "Privé/Public" },
    { name: "Centre Hospitalier Régional Thiès", city: "Thiès", type: "Hôpital", category: "Public" },
    { name: "Hôpital de Louga", city: "Louga", type: "Hôpital", category: "Public" },
];


export default function HospitalsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHospitals = allHospitals.filter((hospital) => 
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <Input 
              placeholder="Rechercher un établissement, une ville ou une catégorie..." 
              className="w-full md:w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
            {filteredHospitals.map((hospital) => (
              <TableRow key={hospital.name}>
                <TableCell className="font-medium">{hospital.name}</TableCell>
                <TableCell>{hospital.city}</TableCell>
                <TableCell>
                    <Badge variant={hospital.type.includes('Hôpital') ? 'secondary' : 'outline'}>{hospital.type}</Badge>
                </TableCell>
                <TableCell>
                    <Badge 
                      variant={hospital.category === 'Public' ? 'default' : 'secondary'} 
                      className={
                        hospital.category === 'Public' 
                        ? 'bg-primary text-primary-foreground' 
                        : (hospital.category === 'Privé' ? 'bg-green-600 text-white' : '')
                      }
                    >
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
