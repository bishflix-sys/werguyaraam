
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const scoringSystems = {
    "NEWS2": {
        respirationRate: [
            { score: 3, range: "≤8" },
            { score: 1, range: "9-11" },
            { score: 0, range: "12-20" },
            { score: 2, range: "21-24" },
            { score: 3, range: "≥25" },
        ],
        oxygenSaturation: [
             { score: 3, range: "≤91" },
             { score: 2, range: "92-93" },
             { score: 1, range: "94-95" },
             { score: 0, range: "≥96" },
        ],
        // ... more parameters
    }
}

export default function TriagePage() {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState("Faible");
    const [color, setColor] = useState("bg-green-500");

    const calculateScore = () => {
        // Dummy calculation
        const newScore = Math.floor(Math.random() * 15);
        setScore(newScore);
        if (newScore <= 4) {
            setLevel("Faible Risque");
            setColor("bg-green-500");
        } else if (newScore <= 6) {
            setLevel("Risque Moyen");
            setColor("bg-yellow-500");
        } else {
            setLevel("Risque Élevé");
            setColor("bg-red-500 text-white");
        }
    }


  return (
    <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Triage / scoring clinique (NEWS2)</CardTitle>
            <CardDescription>
              Entrez les signes vitaux pour calculer le score de risque.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="respiration">Fréquence respiratoire (/min)</Label>
                    <Input id="respiration" type="number" placeholder="ex: 18" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="saturation">Saturation en oxygène (%)</Label>
                    <Input id="saturation" type="number" placeholder="ex: 98" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="systolic">Pression artérielle systolique (mmHg)</Label>
                    <Input id="systolic" type="number" placeholder="ex: 120" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="heartrate">Fréquence cardiaque (/min)</Label>
                    <Input id="heartrate" type="number" placeholder="ex: 75" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="temperature">Température (°C)</Label>
                    <Input id="temperature" type="number" step="0.1" placeholder="ex: 37.2" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="consciousness">État de conscience</Label>
                    <Input id="consciousness" placeholder="Alerte, confus..." />
                </div>
             </div>
             <Button onClick={calculateScore} className="w-full">Calculer le score</Button>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Résultat du Score</CardTitle>
                <CardDescription>Niveau de risque et actions recommandées.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-4 text-center h-full">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center text-white ${color}`}>
                    <span className="text-4xl font-bold">{score}</span>
                </div>
                <h3 className="text-2xl font-semibold">{level}</h3>
                 { level === 'Risque Élevé' && <p className="text-destructive">Action requise: Évaluation médicale urgente. Monitorage continu.</p>}
                 { level === 'Risque Moyen' && <p className="text-yellow-600">Action requise: Évaluation par une infirmière. Réévaluation toutes les heures.</p>}
                 { level === 'Faible Risque' && <p className="text-green-600">Action requise: Suivi standard. Réévaluation toutes les 4-6 heures.</p>}
            </CardContent>
        </Card>
    </div>
  );
}
