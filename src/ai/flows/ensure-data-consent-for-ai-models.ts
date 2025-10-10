'use server';
/**
 * @fileOverview This file defines a Genkit flow to ensure explicit consent is obtained before using patient data in AI models.
 *
 * - ensureDataConsentForAIModels - A function that checks and obtains consent for AI model data usage.
 * - EnsureDataConsentForAIModelsInput - The input type for the ensureDataConsentForAIModels function.
 * - EnsureDataConsentForAIModelsOutput - The return type for the ensureDataConsentForAIModels function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnsureDataConsentForAIModelsInputSchema = z.object({
  patientId: z.string().describe('The unique identifier for the patient.'),
  dataUsageDescription: z
    .string()
    .describe(
      'A clear description of how the patient data will be used in AI models.'
    ),
});
export type EnsureDataConsentForAIModelsInput = z.infer<
  typeof EnsureDataConsentForAIModelsInputSchema
>;

const EnsureDataConsentForAIModelsOutputSchema = z.object({
  consentGiven: z
    .boolean()
    .describe('Indicates whether the patient has given consent.'),
  consentDetails: z.string().optional().describe('Details of the consent.'),
});
export type EnsureDataConsentForAIModelsOutput = z.infer<
  typeof EnsureDataConsentForAIModelsOutputSchema
>;

export async function ensureDataConsentForAIModels(
  input: EnsureDataConsentForAIModelsInput
): Promise<EnsureDataConsentForAIModelsOutput> {
  return ensureDataConsentForAIModelsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ensureDataConsentForAIModelsPrompt',
  input: {schema: EnsureDataConsentForAIModelsInputSchema},
  output: {schema: EnsureDataConsentForAIModelsOutputSchema},
  prompt: `You are a consent management expert in a healthcare setting.
Your role is to ensure that patients provide explicit consent before their data is used for AI model training or inference.

Based on the following information, determine if consent has been given or needs to be obtained.  If consent has not been given, explain to the user that they need to consent, and why it is necessary, and how the data is going to be used.  Be sensitive in your communication.

Patient ID: {{{patientId}}}
Data Usage Description: {{{dataUsageDescription}}}

Consider all privacy regulations and ethical guidelines.

Output in JSON format:
{
  "consentGiven": true or false,
  "consentDetails": "Details of the consent or instructions to obtain consent.",
}`,
});

const ensureDataConsentForAIModelsFlow = ai.defineFlow(
  {
    name: 'ensureDataConsentForAIModelsFlow',
    inputSchema: EnsureDataConsentForAIModelsInputSchema,
    outputSchema: EnsureDataConsentForAIModelsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

