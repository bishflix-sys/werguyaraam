import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ConsentPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Gestion des consentements patients</CardTitle>
        <CardDescription>
          Gérez le consentement éclairé, la journalisation et la révocation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Le module de gestion des consentements des patients apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
