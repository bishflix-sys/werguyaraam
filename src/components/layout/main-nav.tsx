
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
  MessageCircle,
  Settings,
  LogOut,
  FolderKanban,
  Wrench,
  AreaChart,
  KeyRound,
  Globe,
  ArrowRightLeft,
} from 'lucide-react';
import { Logo } from '@/components/icons/logo';

const clinicalNavItems = [
  { href: '/patients', icon: FolderKanban, label: 'Dossiers Patients (DME)' },
  { href: '/appointments', icon: CalendarDays, label: 'Rendez-vous' },
  { href: '/staff', icon: UsersRound, label: 'Professionnels' },
  { href: '/referrals', icon: ArrowRightLeft, label: 'Références & Transferts' },
];

const financialItems = [
  { href: '/billing', icon: CreditCard, label: 'Facturation & Paiements' },
  { href: '/analytics', icon: AreaChart, label: 'Rapports & Stats' },
];

const logisticsItems = [
  { href: '/inventory', icon: Pill, label: 'Pharmacie & Stocks' },
  { href: '/equipment', icon: Wrench, label: 'Maintenance Équipements' },
];

const platformItems = [
  { href: '/settings', icon: Settings, label: 'Paramètres' },
  { href: '/hospitals', icon: Globe, label: 'Portail Patient' },
  { href: '/login', icon: KeyRound, label: 'Sécurité & Permissions' },
];

export function MainNav() {
  const pathname = usePathname();

  const renderNavItems = (items: typeof clinicalNavItems) =>
    items.map(({ href, icon: Icon, label }) => (
      <SidebarMenuItem key={href}>
        <SidebarMenuButton
          asChild
          isActive={pathname.startsWith(href)}
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
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === '/dashboard'}
              tooltip={{ children: 'Tableau de Bord', side: 'right', align: 'center' }}
            >
              <Link href="/dashboard">
                  <LayoutDashboard className="shrink-0 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
                  <span className="group-data-[collapsible=icon]:hidden">Tableau de Bord</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarSeparator className="my-2"/>
          <span className="text-xs text-muted-foreground px-4 group-data-[collapsible=icon]:hidden">Clinique</span>
          {renderNavItems(clinicalNavItems)}

          <SidebarSeparator className="my-2"/>
           <span className="text-xs text-muted-foreground px-4 group-data-[collapsible=icon]:hidden">Finances</span>
          {renderNavItems(financialItems)}

           <SidebarSeparator className="my-2"/>
           <span className="text-xs text-muted-foreground px-4 group-data-[collapsible=icon]:hidden">Logistique</span>
          {renderNavItems(logisticsItems)}
          
          <SidebarSeparator className="my-2"/>
           <span className="text-xs text-muted-foreground px-4 group-data-[collapsible=icon]:hidden">Plateforme</span>
          {renderNavItems(platformItems)}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
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
