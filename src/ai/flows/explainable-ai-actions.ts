'use server';
/**
 * @fileOverview Provides explainability and logs for AI actions, allowing medical professionals to understand how the AI generated a specific alert or suggestion.
 *
 * - explainableAIActions - A function that returns the AI's reasoning behind an alert or suggestion.
 * - ExplainableAIActionsInput - The input type for the explainableAIActions function.
 * - ExplainableAIActionsOutput - The return type for the explainableAIActions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainableAIActionsInputSchema = z.object({
  actionType: z.string().describe('The type of AI action (e.g., alert, suggestion).'),
  patientData: z.string().describe('Relevant patient data used by the AI.'),
  reasoningId: z.string().describe('The unique ID of the AI reasoning process.'),
});
export type ExplainableAIActionsInput = z.infer<typeof ExplainableAIActionsInputSchema>;

const ExplainableAIActionsOutputSchema = z.object({
  explanation: z.string().describe('Detailed explanation of the AI reasoning process.'),
  logs: z.string().describe('Relevant logs related to the AI action.'),
});
export type ExplainableAIActionsOutput = z.infer<typeof ExplainableAIActionsOutputSchema>;

export async function explainableAIActions(input: ExplainableAIActionsInput): Promise<ExplainableAIActionsOutput> {
  return explainableAIActionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainableAIActionsPrompt',
  input: {schema: ExplainableAIActionsInputSchema},
  output: {schema: ExplainableAIActionsOutputSchema},
  prompt: `You are an AI assistant designed to provide explanations and logs for AI actions in a medical setting.

  Based on the action type, patient data, and reasoning ID, provide a detailed explanation of the AI reasoning process and relevant logs.

  Action Type: {{{actionType}}}
  Patient Data: {{{patientData}}}
  Reasoning ID: {{{reasoningId}}}

  Explanation:
  Logs:
  `,
});

const explainableAIActionsFlow = ai.defineFlow(
  {
    name: 'explainableAIActionsFlow',
    inputSchema: ExplainableAIActionsInputSchema,
    outputSchema: ExplainableAIActionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
