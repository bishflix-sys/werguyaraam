
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
    if (path.startsWith('/patients')) return 'Dossiers Médicaux Électroniques (DME)';
    if (path.startsWith('/appointments')) return 'Gestion des Rendez-vous';
    if (path.startsWith('/staff')) return 'Gestion des Professionnels';
    if (path.startsWith('/billing')) return 'Facturation & Paiements';
    if (path.startsWith('/analytics')) return 'Rapports & Statistiques';
    if (path.startsWith('/inventory')) return 'Gestion des Stocks & Pharmacie';
    if (path.startsWith('/equipment')) return 'Maintenance des Équipements';
    if (path.startsWith('/hospitals')) return 'Portail Patient';
    if (path.startsWith('/settings')) return 'Paramètres';
    if (path.startsWith('/dashboard')) return 'Tableau de Bord';
    
    // Fallback titles for other pages from the previous structure
    switch (path) {
      case '/queue':
        return "File d'attente";
      case '/messaging':
        return 'Communication Sécurisée';
      case '/notes':
        return 'Notes Cliniques';
      case '/prescriptions':
        return 'E-Prescription';
      case '/results':
        return 'Résultats Labo';
      case '/care-plans':
        return 'Plans de Soins';
      case '/referrals':
        return 'Références';
      case '/consent':
        return 'Consentements';
      case '/triage':
        return 'Triage';
      default:
        return 'weerguyaram';
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
