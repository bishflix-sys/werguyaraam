
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPlus, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const queue = [
  { name: 'Adama Faye', reason: 'Consultation générale', time: '09:45', status: 'En attente', avatar: 'https://picsum.photos/seed/q1/40/40', initials: 'AF' },
  { name: 'Bineta Camara', reason: 'Suivi de grossesse', time: '09:50', status: 'En attente', avatar: 'https://picsum.photos/seed/q2/40/40', initials: 'BC' },
  { name: 'Cheikh Dieng', reason: 'Douleurs thoraciques', time: '09:52', status: 'Urgent', avatar: 'https://picsum.photos/seed/q3/40/40', initials: 'CD' },
  { name: 'Diary Ba', reason: 'Vaccin enfant', time: '09:58', status: 'En attente', avatar: 'https://picsum.photos/seed/q4/40/40', initials: 'DB' },
];

const nowServing = { name: 'Moussa Sow', reason: 'Suivi diabète', time: '09:30', status: 'En consultation', avatar: 'https://picsum.photos/seed/p2/40/40', initials: 'MS' };

export default function QueuePage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="font-headline">File d'attente des patients</CardTitle>
            <CardDescription>
              Gérez l'ordre de passage des patients en salle d'attente.
            </CardDescription>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Ajouter un patient
          </Button>
        </CardHeader>
        <CardContent>
            <h3 className="font-semibold mb-4">En consultation</h3>
             <div className="border-2 border-primary rounded-lg p-4 flex items-center justify-between bg-primary/5">
                <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={nowServing.avatar} alt={nowServing.name} data-ai-hint="person face" />
                      <AvatarFallback>{nowServing.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-bold text-lg">{nowServing.name}</p>
                        <p className="text-sm text-muted-foreground">{nowServing.reason}</p>
                    </div>
                </div>
                <Badge className="bg-primary">{nowServing.status}</Badge>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-lg">Prochains patients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {queue.map((patient) => (
              <div key={patient.name} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={patient.avatar} alt={patient.name} data-ai-hint="person face"/>
                    <AvatarFallback>{patient.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{patient.name}</p>
                    <p className="text-sm text-muted-foreground">{patient.reason}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <Badge variant={patient.status === 'Urgent' ? 'destructive' : 'secondary'}>
                    {patient.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground">Arrivé à {patient.time}</p>
                  <Button>
                    Appeler <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
