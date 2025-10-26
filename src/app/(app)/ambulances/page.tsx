'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ambulance, Siren } from 'lucide-react';

const ambulances = [
  { id: "AMB-01", status: "En intervention", position: { top: '30%', left: '45%' } },
  { id: "AMB-02", status: "Disponible", position: { top: '50%', left: '60%' } },
  { id: "AMB-03", status: "Retour base", position: { top: '70%', left: '35%' } },
  { id: "AMB-04", status: "En intervention", position: { top: '25%', left: '20%' } },
];

export default function AmbulancesPage() {
    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'En intervention':
                return 'destructive';
            case 'Disponible':
                return 'default';
            case 'Retour base':
                return 'secondary';
            default:
                return 'outline';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'En intervention':
                return 'bg-red-500/80';
            case 'Disponible':
                return 'bg-green-500/80';
            case 'Retour base':
                return 'bg-yellow-500/80';
            default:
                return '';
        }
    }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-10rem)]">
        <div className="lg:col-span-3 h-full">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">Cartographie des ambulances</CardTitle>
                <CardDescription>
                  Visualisation en temps réel des unités mobiles.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow relative">
                <div className="absolute inset-0 bg-muted rounded-lg overflow-hidden">
                    {/* Placeholder for a real map component */}
                    <img src="https://picsum.photos/seed/map/1200/800" alt="Carte de la région" className="w-full h-full object-cover opacity-30" data-ai-hint="region map" />
                </div>
                {ambulances.map(amb => (
                    <div key={amb.id} className="absolute p-2" style={amb.position}>
                        <div className="relative flex flex-col items-center group">
                            <Ambulance className={`h-10 w-10 drop-shadow-lg ${amb.status === 'En intervention' ? 'text-red-600 animate-pulse' : 'text-primary'}`}/>
                            <div className="hidden group-hover:block absolute -top-16 min-w-max bg-card p-2 rounded-lg shadow-lg border text-xs">
                                <p className="font-bold">{amb.id}</p>
                                <Badge variant={getStatusVariant(amb.status)} className={getStatusColor(amb.status)}>{amb.status}</Badge>
                            </div>
                        </div>
                    </div>
                ))}
              </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-1 h-full">
            <Card className="h-full flex flex-col">
                 <CardHeader>
                    <CardTitle className="font-headline">Liste des Unités</CardTitle>
                    <CardDescription>Statut actuel</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto">
                    <div className="space-y-4">
                        {ambulances.map(amb => (
                             <div key={amb.id} className="flex items-center justify-between p-3 bg-card rounded-lg shadow-sm border">
                                <div className="flex items-center gap-3">
                                    <Ambulance className={`h-6 w-6 ${amb.status === 'En intervention' ? 'text-red-500' : 'text-primary'}`} />
                                    <p className="font-semibold">{amb.id}</p>
                                </div>
                                <Badge variant={getStatusVariant(amb.status)} className={getStatusColor(amb.status)}>
                                    {amb.status === 'En intervention' && <Siren className="h-3 w-3 mr-1 animate-ping absolute" />}
                                    {amb.status}
                                </Badge>
                             </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
