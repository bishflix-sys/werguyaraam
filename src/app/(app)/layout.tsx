'use client';

import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from '@/components/ui/sidebar';
import { MainNav } from '@/components/layout/main-nav';
import { Header } from '@/components/layout/header';
import { usePathname } from 'next/navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // In a real app, you would get this from a session or user context
  const user = {
    name: 'Dr. Awa Fall',
    email: 'awa.fall@weerguyaram.sn',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    initials: 'AF',
  };

  const getPageTitle = (path: string) => {
    const segment = path.split('/').pop() || 'dashboard';
    switch (segment) {
      case 'dashboard':
        return 'Tableau de Bord';
      case 'patients':
        return 'Dossiers Patients';
      case 'appointments':
        return 'Rendez-vous';
      case 'inventory':
        return 'Gestion des Médicaments';
      case 'billing':
        return 'Facturation';
      case 'staff':
        return 'Gestion du Personnel';
      case 'queue':
        return "File d'attente";
      case 'messaging':
        return 'Communication Sécurisée';
      case 'settings':
        return 'Paramètres';
      default:
        return 'Weerguyaram Santé';
    }
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <MainNav />
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col min-h-screen">
          <Header title={getPageTitle(pathname)} user={user} />
          <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
