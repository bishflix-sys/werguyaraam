import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function CarePlansPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Plan de soins / Parcours patient</CardTitle>
        <CardDescription>
          Définissez des parcours de soins avec rappels automatiques et alertes de suivi.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Le module de gestion des plans de soins apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
