import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function AppointmentsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Planification des Rendez-vous</CardTitle>
        <CardDescription>
          Organisez le calendrier des consultations pour les médecins et les patients.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Le calendrier des rendez-vous apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
