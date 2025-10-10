import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ClinicalNotesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Notes Cliniques Structurées</CardTitle>
        <CardDescription>
          Utilisez des templates comme SOAP pour prendre des notes cliniques de manière efficace.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>L'interface de prise de notes cliniques apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
