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
} from 'lucide-react';
import { Logo } from '@/components/icons/logo';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Tableau de Bord' },
  { href: '/queue', icon: Clock, label: "File d'attente" },
  { href: '/appointments', icon: CalendarDays, label: 'Rendez-vous' },
  { href: '/patients', icon: Users, label: 'Dossiers Patients' },
  { href: '/notes', icon: FileText, label: 'Notes Cliniques' },
  { href: '/prescriptions', icon: ClipboardPenLine, label: 'E-Prescription' },
  { href: '/results', icon: Beaker, label: 'Résultats Labo' },
  { href: '/care-plans', icon: HeartPulse, label: 'Plans de Soins' },
  { href: '/inventory', icon: Pill, label: 'Médicaments' },
  { href: '/billing', icon: CreditCard, label: 'Facturation' },
  { href: '/staff', icon: UsersRound, label: 'Personnel' },
  { href: '/messaging', icon: MessageCircle, label: 'Messagerie' },
  { href: '/referrals', icon: ArrowRightLeft, label: 'Références' },
  { href: '/consent', icon: FileCheck, label: 'Consentements' },
  { href: '/triage', icon: TriangleAlert, label: 'Triage' },
  { href: '/hospitals', icon: Building, label: 'Hôpitaux' },
];

export function MainNav() {
  const pathname = usePathname();

  const renderNavItems = (items: typeof navItems) =>
    items.map(({ href, icon: Icon, label }) => (
      <SidebarMenuItem key={href}>
        <SidebarMenuButton
          asChild
          isActive={pathname === href}
          tooltip={{ children: label, side: 'right', align: 'center' }}
        >
          <Link href={href}>
              <Icon className="shrink-0" />
              <span className="group-data-[collapsible=icon]:hidden">{label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <Logo className="w-8 h-8 text-primary shrink-0" />
          <span className="font-headline text-lg font-bold group-data-[collapsible=icon]:hidden">
            Weergu Yaram
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {renderNavItems(navItems)}
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
                <Settings className="shrink-0" />
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
                <LogOut className="shrink-0" />
                <span className="group-data-[collapsible=icon]:hidden">Déconnexion</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
