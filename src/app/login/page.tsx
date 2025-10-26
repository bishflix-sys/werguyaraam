import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold font-headline">Connexion</h1>
            <p className="text-balance text-muted-foreground">
              Entrez votre email ci-dessous pour vous connecter à votre compte
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Hôpitaux et Cliniques du Sénégal</CardTitle>
              <CardDescription>
                Accédez à votre tableau de bord sécurisé.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nom@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Link
                      href="#"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full" asChild>
                  <Link href="/dashboard">Se connecter</Link>
                </Button>
                <Button variant="outline" className="w-full">
                  Se connecter avec SSO
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="mt-4 text-center text-sm">
            Vous n'avez pas de compte ?{' '}
            <Link href="#" className="underline">
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <Image
          src="https://picsum.photos/seed/health/1920/1080"
          alt="Image de fond médicale"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.3]"
          data-ai-hint="medical technology"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
        <div className="absolute bottom-10 left-10 text-primary-foreground">
          <div className="flex items-center gap-4">
            <Logo className="h-12 w-12 text-accent" />
            <h2 className="font-headline text-4xl font-bold">Hôpitaux et Cliniques du Sénégal</h2>
          </div>
          <p className="mt-4 text-lg">La santé pour tous, partout.</p>
        </div>
      </div>
    </div>
  );
}
