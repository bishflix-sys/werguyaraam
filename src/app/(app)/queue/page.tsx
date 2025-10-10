import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function QueuePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">File d'attente des patients</CardTitle>
        <CardDescription>
          Gérez l'ordre de passage des patients en salle d'attente.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>L'affichage de la file d'attente en temps réel apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
