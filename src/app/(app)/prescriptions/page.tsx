import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function EPrescriptionPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">E-prescription & Vérification d’interactions</CardTitle>
        <CardDescription>
          Créez des ordonnances électroniques avec vérification automatique des interactions et allergies.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Le module d'e-prescription apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
