
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const carePlans = [
  {
    id: "CP-001",
    patient: "Fatou Diop",
    condition: "Hypertension Artérielle",
    status: "Actif",
    nextStep: "Consultation de suivi le 15/08/2024",
  },
  {
    id: "CP-002",
    patient: "Moussa Sow",
    condition: "Diabète de type 2",
    status: "Actif",
    nextStep: "Analyse de sang (HbA1c) le 01/09/2024",
  },
  {
    id: "CP-003",
    patient: "Aïssatou Ndiaye",
    condition: "Suivi post-opératoire",
    status: "Terminé",
    nextStep: "Aucune",
  },
];

export default function CarePlansPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Plan de soins / Parcours patient</CardTitle>
          <CardDescription>
            Définissez des parcours de soins avec rappels automatiques et alertes de suivi.
          </CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nouveau Plan de Soins
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {carePlans.map((plan) => (
            <div key={plan.id} className="border p-4 rounded-lg flex justify-between items-start">
              <div>
                <div className="flex items-center gap-4">
                    <h3 className="font-semibold">{plan.patient} - <span className="font-normal text-muted-foreground">{plan.condition}</span></h3>
                    <Badge variant={plan.status === 'Actif' ? 'default' : 'secondary'} className={plan.status === 'Actif' ? 'bg-blue-500' : ''}>
                        {plan.status}
                    </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Prochaine étape : {plan.nextStep}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
