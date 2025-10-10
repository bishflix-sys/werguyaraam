
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const user = {
    name: 'Dr. Awa Fall',
    email: 'awa.fall@weerguyaram.sn',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    initials: 'AF',
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Profil</CardTitle>
                <CardDescription>
                Gérez les informations de votre compte.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={user.avatar} data-ai-hint="person doctor" />
                        <AvatarFallback>{user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <Button variant="outline" size="sm" className="mt-2">Changer la photo</Button>
                    </div>
                </div>
                <Separator />
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nom complet</Label>
                        <Input id="name" defaultValue={user.name} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Adresse e-mail</Label>
                        <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                </div>
                 <div className="flex justify-end">
                    <Button>Enregistrer les modifications</Button>
                </div>
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="font-headline">Notifications</CardTitle>
                <CardDescription>
                Choisissez comment vous souhaitez être notifié.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="email-notifications">Notifications par e-mail</Label>
                        <p className="text-sm text-muted-foreground">Recevoir des notifications par e-mail pour les événements importants.</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked/>
                </div>
                 <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="sms-notifications">Notifications par SMS</Label>
                         <p className="text-sm text-muted-foreground">Recevoir des alertes urgentes par SMS.</p>
                    </div>
                    <Switch id="sms-notifications" />
                </div>
                <div className="flex justify-end">
                    <Button>Enregistrer les préférences</Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
