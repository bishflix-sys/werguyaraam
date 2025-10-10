'use server';
/**
 * @fileOverview Implements a process for monitoring AI model drift and measuring bias to ensure the AI system remains accurate, fair, and reliable over time.
 *
 * - monitorAiDriftAndBias - A function that monitors AI model drift and bias.
 * - MonitorAiDriftAndBiasInput - The input type for the monitorAiDriftAndBias function.
 * - MonitorAiDriftAndBiasOutput - The return type for the monitorAiDriftAndBias function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MonitorAiDriftAndBiasInputSchema = z.object({
  modelName: z.string().describe('The name of the AI model to monitor.'),
  dataSample: z.string().describe('A representative sample of data used by the model.'),
  biasMetrics: z.array(z.string()).describe('A list of bias metrics to calculate (e.g., demographic parity, equal opportunity).'),
  driftThreshold: z.number().describe('Threshold for drift detection. If drift exceeds this value, an alert is triggered.'),
  biasThreshold: z.number().describe('Threshold for bias detection. If bias exceeds this value, an alert is triggered.'),
});
export type MonitorAiDriftAndBiasInput = z.infer<typeof MonitorAiDriftAndBiasInputSchema>;

const MonitorAiDriftAndBiasOutputSchema = z.object({
  driftDetected: z.boolean().describe('Whether drift was detected in the AI model.'),
  biasDetected: z.boolean().describe('Whether bias was detected in the AI model.'),
  driftMetrics: z.record(z.string(), z.number()).describe('Drift metrics for each feature.'),
  biasMetricsResults: z.record(z.string(), z.number()).describe('Bias metrics results.'),
  recommendations: z.string().describe('Recommendations for addressing drift and bias.'),
});
export type MonitorAiDriftAndBiasOutput = z.infer<typeof MonitorAiDriftAndBiasOutputSchema>;

export async function monitorAiDriftAndBias(input: MonitorAiDriftAndBiasInput): Promise<MonitorAiDriftAndBiasOutput> {
  return monitorAiDriftAndBiasFlow(input);
}

const monitorAiDriftAndBiasPrompt = ai.definePrompt({
  name: 'monitorAiDriftAndBiasPrompt',
  input: {schema: MonitorAiDriftAndBiasInputSchema},
  output: {schema: MonitorAiDriftAndBiasOutputSchema},
  prompt: `You are an AI model monitoring expert. Your task is to analyze the AI model for drift and bias and provide recommendations.

  Model Name: {{modelName}}
  Data Sample: {{dataSample}}
  Bias Metrics: {{biasMetrics}}
  Drift Threshold: {{driftThreshold}}
  Bias Threshold: {{biasThreshold}}

  Analyze the data and determine if drift or bias is present. Provide specific recommendations for addressing any identified issues. Return a JSON object with the analysis results and recommendations.

  Ensure the output is a valid JSON object conforming to the MonitorAiDriftAndBiasOutputSchema. The description of the schema is:
  ${JSON.stringify(MonitorAiDriftAndBiasOutputSchema.describe)}`,
});

const monitorAiDriftAndBiasFlow = ai.defineFlow(
  {
    name: 'monitorAiDriftAndBiasFlow',
    inputSchema: MonitorAiDriftAndBiasInputSchema,
    outputSchema: MonitorAiDriftAndBiasOutputSchema,
  },
  async input => {
    const {output} = await monitorAiDriftAndBiasPrompt(input);
    return output!;
  }
);
