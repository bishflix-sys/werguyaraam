import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Users, Calendar, Pill, DollarSign, ArrowUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const chartData = [
  { month: 'Janvier', cases: 186 },
  { month: 'Février', cases: 305 },
  { month: 'Mars', cases: 237 },
  { month: 'Avril', cases: 273 },
  { month: 'Mai', cases: 209 },
  { month: 'Juin', cases: 250 },
];

const chartConfig = {
  cases: {
    label: 'Cas Prédits',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

const appointments = [
  {
    name: 'Fatou Diop',
    email: 'fatou.d@example.com',
    time: '09:00',
    avatar: 'https://picsum.photos/seed/p1/40/40',
    initials: 'FD'
  },
  {
    name: 'Moussa Sow',
    email: 'moussa.s@example.com',
    time: '09:30',
    avatar: 'https://picsum.photos/seed/p2/40/40',
    initials: 'MS'
  },
  {
    name: 'Aïssatou Ndiaye',
    email: 'aissatou.n@example.com',
    time: '10:00',
    avatar: 'https://picsum.photos/seed/p3/40/40',
    initials: 'AN'
  },
  {
    name: 'Ibrahima Fall',
    email: 'ibrahima.f@example.com',
    time: '10:15',
    avatar: 'https://picsum.photos/seed/p4/40/40',
    initials: 'IF'
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenus du Jour</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250,000 CFA</div>
            <p className="text-xs text-muted-foreground">+20.1% depuis hier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Patients en Attente</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+5 depuis la dernière heure</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">RDV du Jour</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35</div>
            <p className="text-xs text-muted-foreground">12 à venir</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stocks Critiques</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Médicaments bientôt épuisés</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Analyse Prédictive des Tendances de Santé</CardTitle>
            <CardDescription>
              Prédiction des cas de grippe pour les 6 prochains mois.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                 <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Bar dataKey="cases" fill="var(--color-cases)" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Rendez-vous à venir</CardTitle>
            <CardDescription>
              Les prochains patients de la journée.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
             {appointments.map((appointment) => (
              <div key={appointment.email} className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src={appointment.avatar} alt={appointment.name} data-ai-hint="person face" />
                  <AvatarFallback>{appointment.initials}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">{appointment.name}</p>
                  <p className="text-sm text-muted-foreground">{appointment.email}</p>
                </div>
                <div className="ml-auto font-medium">{appointment.time}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
