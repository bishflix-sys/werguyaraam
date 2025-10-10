import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function PatientsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Dossiers Patients</CardTitle>
        <CardDescription>
          Gérez les informations et les antécédents de vos patients.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Le contenu de la gestion des patients apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
