import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Paramètres</CardTitle>
        <CardDescription>
          Configurez les paramètres de votre compte et de l'application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Les options de configuration de l'application apparaîtront ici.</p>
      </CardContent>
    </Card>
  );
}
