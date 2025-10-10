'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserNav, type User } from '@/components/layout/user-nav';

interface HeaderProps {
  title: string;
  user: User;
}

export function Header({ title, user }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <h1 className="flex-1 text-xl font-semibold font-headline tracking-tight">
        {title}
      </h1>
      <div className="flex items-center gap-4">
        {/* Future actions can go here, e.g. notifications */}
        <UserNav user={user} />
      </div>
    </header>
  );
}
