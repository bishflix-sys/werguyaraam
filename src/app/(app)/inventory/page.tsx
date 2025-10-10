import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function InventoryPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Gestion des Stocks de Médicaments</CardTitle>
        <CardDescription>
          Suivez en temps réel les niveaux de stock et gérez les approvisionnements.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Le tableau de gestion des stocks de médicaments apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
