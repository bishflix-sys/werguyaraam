import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function StaffPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Gestion du Personnel</CardTitle>
        <CardDescription>
          Gérez les informations des employés, les horaires, et les congés.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>L'interface de gestion du personnel apparaîtra ici.</p>
      </CardContent>
    </Card>
  );
}
