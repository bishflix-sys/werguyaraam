
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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CalendarClock, CreditCard } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Hospital = {
  name: string;
  city: string;
  type: string;
  category: string;
};

const allHospitals: Hospital[] = [
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
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredHospitals = allHospitals.filter((hospital) => 
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleRdvClick = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setIsDialogOpen(true);
  }

  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Portail Patient</CardTitle>
        <CardDescription>
          Accédez à vos résultats, prenez rendez-vous et communiquez de manière sécurisée.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
            <Input 
              placeholder="Rechercher un établissement pour prendre un RDV..." 
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
              <TableHead className="text-right">Actions</TableHead>
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
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" onClick={() => handleRdvClick(hospital)}>
                    <CalendarClock className="mr-2 h-4 w-4" />
                    Prendre RDV
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-headline">Prendre un rendez-vous</DialogTitle>
          <DialogDescription>
            Planifiez votre rendez-vous à <span className="font-semibold">{selectedHospital?.name}</span>.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Ex: Prénom Nom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Motif</Label>
            <Textarea id="reason" placeholder="Décrivez la raison de votre visite..." />
          </div>

          <div className="border-t pt-4 mt-2">
              <h4 className="font-semibold text-lg mb-2">Frais de réservation</h4>
              <div className="flex justify-between items-center bg-muted/50 p-3 rounded-md">
                  <p>Montant à payer</p>
                  <p className="font-bold text-lg">1000 FCFA</p>
              </div>

              <div className="mt-4 space-y-2">
                <Label>Choisir une méthode de paiement</Label>
                <RadioGroup defaultValue="wave">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wave" id="wave" />
                    <Label htmlFor="wave">Wave</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="orange-money" id="orange-money" />
                    <Label htmlFor="orange-money">Orange Money</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free-money" id="free-money" />
                    <Label htmlFor="free-money">Free Money</Label>
                  </div>
                </RadioGroup>
              </div>
               <div className="mt-4 space-y-2">
                  <Label htmlFor="phone">Numéro de téléphone</Label>
                  <Input id="phone" placeholder="7X XXX XX XX" type="tel" />
              </div>
          </div>

        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="secondary">Annuler</Button>
            </DialogClose>
            <Button type="submit">
                <CreditCard className="mr-2 h-4 w-4"/>
                Payer et Confirmer
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
}
