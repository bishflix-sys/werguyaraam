'use server';
/**
 * @fileOverview This file implements the validation of AI-generated recommendations in a medical context.
 *
 * It includes:
 * - `validateAIRecommendations`: A function to submit AI recommendations for clinical validation.
 * - `ValidateAIRecommendationsInput`: The input type for the `validateAIRecommendations` function.
 * - `ValidateAIRecommendationsOutput`: The output type for the `validateAIRecommendations` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ValidateAIRecommendationsInputSchema = z.object({
  recommendationText: z.string().describe('The AI-generated recommendation text to be validated.'),
  patientContext: z.string().describe('Relevant patient information and medical history for context.'),
  validationNotes: z.string().optional().describe('Optional notes or observations from the validator.'),
});
export type ValidateAIRecommendationsInput = z.infer<typeof ValidateAIRecommendationsInputSchema>;

const ValidateAIRecommendationsOutputSchema = z.object({
  isValidated: z.boolean().describe('Indicates whether the AI recommendation has been clinically validated.'),
  validationFeedback: z.string().describe('Feedback provided during the validation process, including reasons for approval or rejection.'),
});
export type ValidateAIRecommendationsOutput = z.infer<typeof ValidateAIRecommendationsOutputSchema>;

export async function validateAIRecommendations(input: ValidateAIRecommendationsInput): Promise<ValidateAIRecommendationsOutput> {
  return validateAIRecommendationsFlow(input);
}

const validateAIRecommendationsPrompt = ai.definePrompt({
  name: 'validateAIRecommendationsPrompt',
  input: { schema: ValidateAIRecommendationsInputSchema },
  output: { schema: ValidateAIRecommendationsOutputSchema },
  prompt: `You are an AI assistant designed to facilitate the clinical validation of AI-generated recommendations by medical professionals.

  A medical professional is reviewing an AI-generated recommendation and has provided the following information:

  Recommendation: {{{recommendationText}}}
  Patient Context: {{{patientContext}}}
  Validation Notes: {{{validationNotes}}}

  Based on this information, determine whether the recommendation is clinically validated. Provide clear and concise feedback explaining your decision.

  Respond in the following JSON format:
  {
    "isValidated": true or false,
    "validationFeedback": "Explanation for the decision, including supporting evidence or concerns."
  }`,
});

const validateAIRecommendationsFlow = ai.defineFlow(
  {
    name: 'validateAIRecommendationsFlow',
    inputSchema: ValidateAIRecommendationsInputSchema,
    outputSchema: ValidateAIRecommendationsOutputSchema,
  },
  async input => {
    const { output } = await validateAIRecommendationsPrompt(input);
    return output!;
  }
);
