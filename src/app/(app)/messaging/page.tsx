
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const contacts = [
  { name: "Dr. Marie Sene", status: "En ligne", avatar: "https://picsum.photos/seed/doc1/40/40", initials: "MS" },
  { name: "Infirmier Aliou Diallo", status: "Hors ligne", avatar: "https://picsum.photos/seed/inf1/40/40", initials: "AD" },
  { name: "Patient: Moussa Sow", status: "En ligne", avatar: "https://picsum.photos/seed/p2/40/40", initials: "MS" },
];

const messages = [
    { sender: "Dr. Marie Sene", text: "Bonjour, pouvez-vous vérifier le dossier du patient Sow ?", time: "10:30", own: false },
    { sender: "Moi", text: "Bien sûr, je m'en occupe tout de suite.", time: "10:31", own: true },
    { sender: "Dr. Marie Sene", text: "Merci. J'attends votre retour.", time: "10:32", own: false },
];


export default function MessagingPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[calc(100vh-10rem)]">
        <Card className="md:col-span-1 flex flex-col">
            <CardHeader>
                <CardTitle className="font-headline">Contacts</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-2">
                <ScrollArea className="h-full">
                    <div className="space-y-2">
                    {contacts.map(contact => (
                        <div key={contact.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
                            <Avatar>
                                <AvatarImage src={contact.avatar} data-ai-hint="person face" />
                                <AvatarFallback>{contact.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-sm">{contact.name}</p>
                                <div className="flex items-center gap-1.5">
                                    <span className={`h-2 w-2 rounded-full ${contact.status === 'En ligne' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                    <p className="text-xs text-muted-foreground">{contact.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
        <Card className="md:col-span-3 flex flex-col">
            <CardHeader className="border-b">
                <CardTitle className="font-headline">Dr. Marie Sene</CardTitle>
                <CardDescription>Discussion sécurisée</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-4 space-y-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.own ? 'justify-end' : 'justify-start'}`}>
                        {!msg.own && <Avatar className="h-8 w-8"><AvatarImage src="https://picsum.photos/seed/doc1/40/40" data-ai-hint="doctor face" /><AvatarFallback>MS</AvatarFallback></Avatar>}
                        <div className={`rounded-lg px-4 py-2 max-w-sm ${msg.own ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                           <p>{msg.text}</p>
                           <p className={`text-xs mt-1 ${msg.own ? 'text-primary-foreground/70' : 'text-muted-foreground'} text-right`}>{msg.time}</p>
                        </div>
                         {msg.own && <Avatar className="h-8 w-8"><AvatarImage src="https://picsum.photos/seed/avatar1/40/40" data-ai-hint="doctor face" /><AvatarFallback>AF</AvatarFallback></Avatar>}
                    </div>
                ))}
            </CardContent>
             <div className="p-4 border-t">
                <div className="relative">
                    <Input placeholder="Écrivez votre message..." className="pr-12"/>
                    <Button size="icon" variant="ghost" className="absolute top-1/2 right-1 -translate-y-1/2">
                        <Send className="h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </Card>
    </div>
  );
}
