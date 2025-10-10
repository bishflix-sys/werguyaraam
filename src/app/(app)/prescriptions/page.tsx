
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, ShieldAlert, FileSignature } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

type Medication = {
    id: number;
    name: string;
    dosage: string;
    frequency: string;
}

export default function EPrescriptionPage() {
    const [medications, setMedications] = useState<Medication[]>([
        { id: 1, name: 'Amoxicilline 250mg', dosage: '1 comprimé', frequency: '3 fois par jour' }
    ]);

    const addMedication = () => {
        const newId = medications.length > 0 ? Math.max(...medications.map(m => m.id)) + 1 : 1;
        setMedications([...medications, { id: newId, name: '', dosage: '', frequency: '' }]);
    };

    const removeMedication = (id: number) => {
        setMedications(medications.filter(m => m.id !== id));
    };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">E-prescription & Vérification d’interactions</CardTitle>
        <CardDescription>
          Créez des ordonnances électroniques avec vérification automatique des interactions et allergies.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="patient" className="mb-2 block">Patient</Label>
                        <Select>
                            <SelectTrigger id="patient">
                                <SelectValue placeholder="Sélectionner un patient" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="fatou-diop">Fatou Diop (Allergie: Pénicilline)</SelectItem>
                                <SelectItem value="moussa-sow">Moussa Sow</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <div className="space-y-3">
                        <Label>Médicaments</Label>
                        {medications.map((med, index) => (
                            <div key={med.id} className="grid grid-cols-12 gap-2 items-center">
                                <Input placeholder="Nom du médicament" className="col-span-4"/>
                                <Input placeholder="Dosage" className="col-span-3"/>
                                <Input placeholder="Fréquence" className="col-span-4"/>
                                <Button variant="ghost" size="icon" className="col-span-1 text-destructive" onClick={() => removeMedication(med.id)}>
                                    <Trash2 className="h-4 w-4"/>
                                </Button>
                            </div>
                        ))}
                    </div>

                    <Button variant="outline" onClick={addMedication}>
                        <Plus className="mr-2 h-4 w-4"/>
                        Ajouter un médicament
                    </Button>

                    <div>
                        <Label htmlFor="instructions" className="mb-2 block">Instructions supplémentaires</Label>
                        <Textarea id="instructions" placeholder="Instructions pour le patient ou le pharmacien..." />
                    </div>

                     <Button className="w-full">
                        <FileSignature className="mr-2 h-4 w-4"/>
                        Générer et signer l'ordonnance
                    </Button>
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="font-semibold">Vérification automatique</h3>
                <Alert>
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>Allergie détectée !</AlertTitle>
                  <AlertDescription>
                    Le patient <strong>Fatou Diop</strong> est allergique à la <strong>Pénicilline</strong>. L'Amoxicilline est une pénicilline. Veuillez modifier la prescription.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>Interaction médicamenteuse potentielle</AlertTitle>
                  <AlertDescription>
                    Interaction modérée entre <strong>Amoxicilline</strong> et <strong>Méthotrexate</strong> (non prescrit ici). Aucune autre interaction majeure détectée.
                  </AlertDescription>
                </Alert>
                 <Alert className="border-green-500 text-green-700">
                  <ShieldAlert className="h-4 w-4 text-green-700" />
                  <AlertTitle>Vérification terminée</AlertTitle>
                  <AlertDescription>
                    Aucune autre interaction ou contre-indication sévère trouvée pour la sélection actuelle.
                  </AlertDescription>
                </Alert>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
