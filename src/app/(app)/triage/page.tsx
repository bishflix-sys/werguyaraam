import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function TriagePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Triage / scoring clinique</CardTitle>
        <CardDescription>
          Priorisez les patients en urgence et gérez les redirections.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Le système de triage et de scoring clinique apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
