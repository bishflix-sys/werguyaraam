import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function MessagingPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Communication Sécurisée</CardTitle>
        <CardDescription>
          Échangez des messages sécurisés avec les patients et les autres professionnels de santé.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>L'interface de messagerie sécurisée apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
