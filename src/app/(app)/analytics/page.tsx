
'use client';

import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Activity, Calendar } from 'lucide-react';

const monthlyRevenue = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Fev', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Avr', revenue: 4500 },
  { name: 'Mai', revenue: 6000 },
  { name: 'Juin', revenue: 5500 },
];

const patientDemographics = [
  { name: '0-18 ans', value: 400 },
  { name: '19-40 ans', value: 300 },
  { name: '41-65 ans', value: 300 },
  { name: '65+ ans', value: 200 },
];

const appointmentStats = [
    { name: 'Consultations', value: 1200 },
    { name: 'Suivis', value: 800 },
    { name: 'Urgences', value: 150 },
    { name: 'Vaccinations', value: 300 },
]

const COLORS = ['#16a34a', '#facc15', '#ea580c', '#2563eb'];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
       <Card>
        <CardHeader>
          <CardTitle className="font-headline">Rapports & Statistiques</CardTitle>
          <CardDescription>
            Tableaux de bord, indicateurs de performance et rapports personnalisés.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenus (Ce mois)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6,150,000 CFA</div>
            <p className="text-xs text-muted-foreground">+15.2% par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nouveaux Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+234</div>
            <p className="text-xs text-muted-foreground">+30 par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consultations</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1250</div>
            <p className="text-xs text-muted-foreground">Taux de présence de 95%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux d'Activité</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">Taux d'occupation des médecins</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Évolution des revenus</CardTitle>
            <CardDescription>Revenus mensuels sur les 6 derniers mois</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" name="Revenus (en milliers de CFA)" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Démographie des patients</CardTitle>
             <CardDescription>Répartition par tranche d'âge.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={patientDemographics} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {patientDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                 <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
       <Card>
          <CardHeader>
            <CardTitle>Types de rendez-vous</CardTitle>
            <CardDescription>Analyse des motifs de consultation ce mois-ci.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
               <BarChart data={appointmentStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Nombre de RDV" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
    </div>
  );
}
