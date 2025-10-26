
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
  AlarmClock,
  TriangleAlert,
  ArrowRightLeft,
  FileCheck,
} from 'lucide-react';
import { Logo } from '@/components/icons/logo';

const mainNavItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Tableau de Bord' },
  { href: '/patients', icon: Users, label: 'Dossiers Patients' },
  { href: '/appointments', icon: CalendarDays, label: 'Rendez-vous' },
  { href: '/queue', icon: Clock, label: "File d'attente" },
];

const clinicalToolsItems = [
  { href: '/notes', icon: FileText, label: 'Notes Cliniques' },
  { href: '/prescriptions', icon: ClipboardPenLine, label: 'E-Prescription' },
  { href: '/results', icon: Beaker, label: 'Résultats Labo' },
  { href: '/care-plans', icon: AlarmClock, label: 'Plans de Soins' },
];

const managementItems = [
  { href: '/inventory', icon: Pill, label: 'Médicaments' },
  { href: '/billing', icon: CreditCard, label: 'Facturation' },
  { href: '/staff', icon: UsersRound, label: 'Personnel' },
  { href: '/messaging', icon: MessageCircle, label: 'Messagerie' },
];

const adminItems = [
  { href: '/referrals', icon: ArrowRightLeft, label: 'Références' },
  { href: '/consent', icon: FileCheck, label: 'Consentements' },
  { href: '/triage', icon: TriangleAlert, label: 'Triage' },
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
            <div>
              <Icon />
              <span>{label}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <Logo className="w-8 h-8 text-primary" />
          <span className="font-headline text-sm font-bold group-data-[collapsible=icon]:hidden">
            Hôpitaux et Cliniques
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {renderNavItems(mainNavItems)}
          <SidebarSeparator className="my-2"/>
          {renderNavItems(clinicalToolsItems)}
          <SidebarSeparator className="my-2"/>
          {renderNavItems(managementItems)}
           <SidebarSeparator className="my-2"/>
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
                <div>
                  <Settings />
                  <span>Paramètres</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <SidebarMenuButton
                asChild
                tooltip={{ children: 'Déconnexion', side: 'right', align: 'center' }}
              >
              <Link href="/login">
                <div>
                  <LogOut />
                  <span>Déconnexion</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
