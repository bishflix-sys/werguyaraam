
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, PlusCircle } from "lucide-react";

export default function ClinicalNotesPage() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Nouvelle Note Clinique</CardTitle>
            <CardDescription>
              Remplissez les champs pour créer une nouvelle note en utilisant le template SOAP.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="patient">Patient</Label>
                <Select>
                    <SelectTrigger id="patient">
                        <SelectValue placeholder="Sélectionner un patient" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="fatou-diop">Fatou Diop</SelectItem>
                        <SelectItem value="moussa-sow">Moussa Sow</SelectItem>
                        <SelectItem value="aissatou-ndiaye">Aïssatou Ndiaye</SelectItem>
                    </SelectContent>
                </Select>
              </div>
               <div className="space-y-2">
                <Label htmlFor="date">Date de la consultation</Label>
                <Input id="date" type="date" defaultValue={new Date().toISOString().substring(0, 10)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subjective">S (Subjectif)</Label>
              <Textarea id="subjective" placeholder="Ce que le patient rapporte..." rows={4} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="objective">O (Objectif)</Label>
              <Textarea id="objective" placeholder="Observations cliniques, résultats d'examens..." rows={4} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="assessment">A (Analyse)</Label>
              <Textarea id="assessment" placeholder="Diagnostic ou évaluation de la situation..." rows={4} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">P (Plan)</Label>
              <Textarea id="plan" placeholder="Plan de traitement, examens complémentaires..." rows={4} />
            </div>
            <div className="flex justify-end">
                <Button>
                    <Save className="mr-2 h-4 w-4"/>
                    Enregistrer la note
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-1">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Notes Précédentes</CardTitle>
                <CardDescription>Historique des notes du patient sélectionné.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-center text-muted-foreground py-10">Sélectionnez un patient pour voir l'historique.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
