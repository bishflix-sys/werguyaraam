import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Facturation et Suivi des Paiements</CardTitle>
        <CardDescription>
          Générez des factures, suivez les paiements et consultez les rapports financiers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Le système de facturation et de suivi des paiements apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
