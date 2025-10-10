import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ReferralsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Gestion des références / transferts</CardTitle>
        <CardDescription>
          Générez des lettres de sortie et suivez les références externes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>L'interface de gestion des références et des transferts de patients apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
