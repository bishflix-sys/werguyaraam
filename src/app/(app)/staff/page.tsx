
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
import { PlusCircle, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const staff = [
  { name: "Dr. Omar Gueye", role: "Médecin Généraliste", status: "Actif", avatar: "https://picsum.photos/seed/doc2/40/40", initials: "OG" },
  { name: "Aminata Diouf", role: "Infirmière", status: "Actif", avatar: "https://picsum.photos/seed/inf2/40/40", initials: "AD" },
  { name: "Babacar Faye", role: "Pharmacien", status: "Actif", avatar: "https://picsum.photos/seed/pharma1/40/40", initials: "BF" },
  { name: "Ndèye Thiam", role: "Réceptionniste", status: "En congé", avatar: "https://picsum.photos/seed/recep1/40/40", initials: "NT" },
];


export default function StaffPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-headline">Gestion du Personnel</CardTitle>
          <CardDescription>
            Gérez les informations des employés, les horaires, et les congés.
          </CardDescription>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter un membre
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((member) => (
              <TableRow key={member.name}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar} data-ai-hint="person face" />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{member.name}</span>
                  </div>
                </TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>
                   <Badge variant={member.status === 'Actif' ? 'default' : 'secondary'} className={member.status === 'Actif' ? 'bg-green-500' : ''}>
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                        <DropdownMenuItem>Modifier les informations</DropdownMenuItem>
                        <DropdownMenuItem>Gérer l'horaire</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Désactiver le compte</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
