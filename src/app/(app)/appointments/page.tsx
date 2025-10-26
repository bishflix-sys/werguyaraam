
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle } from 'lucide-react';

const appointmentsData = {
  "2024-07-29": [
    { name: "Fatou Diop", time: "09:00", reason: "Consultation générale", avatar: "https://picsum.photos/seed/p1/40/40", initials: "FD" },
    { name: "Moussa Sow", time: "09:30", reason: "Suivi diabète", avatar: "https://picsum.photos/seed/p2/40/40", initials: "MS" },
  ],
  "2024-07-30": [
    { name: "Aïssatou Ndiaye", time: "10:00", reason: "Vaccination", avatar: "https://picsum.photos/seed/p3/40/40", initials: "AN" },
  ],
  "2024-08-01": [
      { name: "Ibrahima Fall", time: "10:15", reason: "Contrôle annuel", avatar: "https://picsum.photos/seed/p4/40/40", initials: "IF" },
      { name: 'Ousmane Gueye', time: '11:00', reason: 'Consultation pédiatrique', avatar: 'https://picsum.photos/seed/p5/40/40', initials: 'OG' },
  ]
};

type Appointment = {
  name: string;
  time: string;
  reason: string;
  avatar: string;
  initials: string;
};

type AppointmentsByDate = {
    [key: string]: Appointment[];
}

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const selectedDateString = date ? date.toISOString().split('T')[0] : '';
  const selectedAppointments = (appointmentsData as AppointmentsByDate)[selectedDateString] || [];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <Card>
           <CardHeader>
            <CardTitle className="font-headline">Calendrier des médecins</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10"
              classNames={{
                day: "w-10 h-10",
                head_cell: "w-10",
              }}
            />
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="font-headline">Prise de rendez-vous</CardTitle>
              <CardDescription>
                Liste des rendez-vous pour le {date ? date.toLocaleDateString('fr-FR') : ''}
              </CardDescription>
            </div>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Nouveau RDV
            </Button>
          </CardHeader>
          <CardContent>
            {selectedAppointments.length > 0 ? (
              <ul className="space-y-4">
                {selectedAppointments.map((appt) => (
                  <li key={appt.name} className="flex items-center p-3 bg-card rounded-lg shadow-sm">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={appt.avatar} alt={appt.name} data-ai-hint="person face" />
                      <AvatarFallback>{appt.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <p className="font-semibold">{appt.name}</p>
                      <p className="text-sm text-muted-foreground">{appt.reason}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm font-semibold">{appt.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted-foreground py-10">Aucun rendez-vous prévu pour cette date.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
