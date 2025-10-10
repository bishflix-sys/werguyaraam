import { config } from 'dotenv';
config();

import '@/ai/flows/monitor-ai-drift-and-bias.ts';
import '@/ai/flows/explainable-ai-actions.ts';
import '@/ai/flows/analyze-health-trends.ts';
import '@/ai/flows/validate-ai-recommendations.ts';
import '@/ai/flows/ensure-data-consent-for-ai-models.ts';