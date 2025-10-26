
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle, Eye, Edit } from "lucide-react";
import { Input } from "@/components/ui/input";

const patients = [
  { id: "PAT-001", name: "Fatou Diop", age: 34, gender: "Féminin", lastVisit: "2024-07-28", avatar: "https://picsum.photos/seed/p1/40/40", initials: "FD" },
  { id: "PAT-002", name: "Moussa Sow", age: 45, gender: "Masculin", lastVisit: "2024-07-28", avatar: "https://picsum.photos/seed/p2/40/40", initials: "MS" },
  { id: "PAT-003", name: "Aïssatou Ndiaye", age: 28, gender: "Féminin", lastVisit: "2024-07-27", avatar: "https://picsum.photos/seed/p3/40/40", initials: "AN" },
  { id: "PAT-004", name: "Ibrahima Fall", age: 52, gender: "Masculin", lastVisit: "2024-07-26", avatar: "https://picsum.photos/seed/p4/40/40", initials: "IF" },
  { id: "PAT-005", name: "Ousmane Gueye", age: 6, gender: "Masculin", lastVisit: "2024-07-25", avatar: "https://picsum.photos/seed/p5/40/40", initials: "OG" },
];

export default function PatientsPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Dossiers Médicaux Électroniques (DME)</CardTitle>
          <CardDescription>
            Gérez les informations et les antécédents de vos patients.
          </CardDescription>
        </div>
        <div className="flex gap-4">
            <Input placeholder="Rechercher un patient..." className="w-64" />
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Nouveau Patient
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Âge</TableHead>
              <TableHead>Sexe</TableHead>
              <TableHead>Dernière Visite</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={patient.avatar} data-ai-hint="person face" />
                      <AvatarFallback>{patient.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{patient.name}</span>
                  </div>
                </TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.lastVisit}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
