import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function LabResultsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Suivi des résultats de labo / imagerie</CardTitle>
        <CardDescription>
          Importez et visualisez les résultats DICOM, LOINC avec historique graphique.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>L'interface de visualisation des résultats de laboratoire et d'imagerie apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
