
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Pill,
  CreditCard,
  UsersRound,
  Clock,
  MessageCircle,
  Settings,
  LogOut,
  Beaker,
  ClipboardPenLine,
  FileText,
  HeartPulse,
  TriangleAlert,
  ArrowRightLeft,
  FileCheck,
  Building,
  TrendingUp,
} from 'lucide-react';
import { Logo } from '@/components/icons/logo';

const mainNavItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Tableau de Bord' },
  { href: '/queue', icon: Clock, label: "File d'attente" },
  { href: '/appointments', icon: CalendarDays, label: 'Rendez-vous' },
  { href: '/patients', icon: Users, label: 'Dossiers Patients' },
];

const clinicalToolsItems = [
  { href: '/notes', icon: FileText, label: 'Notes Cliniques' },
  { href: '/prescriptions', icon: ClipboardPenLine, label: 'E-Prescription' },
  { href: '/results', icon: Beaker, label: 'Résultats Labo' },
  { href: '/care-plans', icon: HeartPulse, label: 'Plans de Soins' },
  { href: '/triage', icon: TriangleAlert, label: 'Triage' },
];

const managementItems = [
  { href: '/inventory', icon: Pill, label: 'Médicaments' },
  { href: '/billing', icon: CreditCard, label: 'Facturation' },
  { href: '/staff', icon: UsersRound, label: 'Personnel' },
  { href: '/messaging', icon: MessageCircle, label: 'Messagerie' },
];

const adminItems = [
  { href: '/analytics', icon: TrendingUp, label: 'Analyses' },
  { href: '/referrals', icon: ArrowRightLeft, label: 'Références' },
  { href: '/consent', icon: FileCheck, label: 'Consentements' },
  { href: '/hospitals', icon: Building, label: 'Annuaire' },
];

export function MainNav() {
  const pathname = usePathname();

  const renderNavItems = (items: typeof mainNavItems) =>
    items.map(({ href, icon: Icon, label }) => (
      <SidebarMenuItem key={href}>
        <SidebarMenuButton
          asChild
          isActive={pathname === href}
          tooltip={{ children: label, side: 'right', align: 'center' }}
        >
          <Link href={href}>
              <Icon className="shrink-0 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
              <span className="group-data-[collapsible=icon]:hidden">{label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-3 p-2">
          <Logo className="w-10 h-10 text-primary shrink-0" />
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
             <span className="font-headline text-lg font-bold">
                weerguyaram
             </span>
             <span className="text-xs text-muted-foreground">Clinique ABC</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <span className="text-xs text-muted-foreground px-4 group-data-[collapsible=icon]:hidden">Principal</span>
          {renderNavItems(mainNavItems)}
          <SidebarSeparator className="my-2"/>
           <span className="text-xs text-muted-foreground px-4 group-data-[collapsible=icon]:hidden">Outils Cliniques</span>
          {renderNavItems(clinicalToolsItems)}
          <SidebarSeparator className="my-2"/>
           <span className="text-xs text-muted-foreground px-4 group-data-[collapsible=icon]:hidden">Gestion</span>
          {renderNavItems(managementItems)}
           <SidebarSeparator className="my-2"/>
           <span className="text-xs text-muted-foreground px-4 group-data-[collapsible=icon]:hidden">Administration</span>
          {renderNavItems(adminItems)}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === '/settings'}
              tooltip={{ children: 'Paramètres', side: 'right', align: 'center' }}
            >
              <Link href="/settings">
                <Settings className="shrink-0 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
                <span className="group-data-[collapsible=icon]:hidden">Paramètres</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <SidebarMenuButton
                asChild
                tooltip={{ children: 'Déconnexion', side: 'right', align: 'center' }}
              >
              <Link href="/login">
                <LogOut className="shrink-0 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
                <span className="group-data-[collapsible=icon]:hidden">Déconnexion</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
