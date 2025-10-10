'use server';

/**
 * @fileOverview AI-powered tool to analyze patient data and identify emerging health trends.
 *
 * - analyzeHealthTrends - Analyzes patient data to identify health trends and predict resource needs.
 * - AnalyzeHealthTrendsInput - The input type for the analyzeHealthTrends function.
 * - AnalyzeHealthTrendsOutput - The return type for the analyzeHealthTrends function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeHealthTrendsInputSchema = z.object({
  patientData: z
    .string()
    .describe('A comprehensive dataset of patient records, including demographics, medical history, diagnoses, treatments, lab results, and vital signs.'),
  startDate: z
    .string()
    .describe('The start date for the analysis period, in YYYY-MM-DD format.'),
  endDate: z.string().describe('The end date for the analysis period, in YYYY-MM-DD format.'),
  specificConditions: z
    .string()
    .optional()
    .describe('Optional. Specific medical conditions or diseases to focus the analysis on.'),
  demographicFilters: z
    .string()
    .optional()
    .describe('Optional. Demographic filters such as age range, gender, or geographic location to apply to the analysis.'),
});
export type AnalyzeHealthTrendsInput = z.infer<typeof AnalyzeHealthTrendsInputSchema>;

const AnalyzeHealthTrendsOutputSchema = z.object({
  emergingTrends: z
    .string()
    .describe('A summary of the identified emerging health trends within the patient population.'),
  predictedResourceNeeds: z
    .string()
    .describe('An estimate of the resources needed to address the identified health trends, including staffing, equipment, and medications.'),
  confidenceLevel: z
    .string()
    .describe('A measure of the confidence level in the accuracy of the analysis and predictions.'),
  recommendations: z
    .string()
    .describe('Recommendations for proactive measures to address the identified health trends and optimize resource allocation.'),
});
export type AnalyzeHealthTrendsOutput = z.infer<typeof AnalyzeHealthTrendsOutputSchema>;

export async function analyzeHealthTrends(input: AnalyzeHealthTrendsInput): Promise<AnalyzeHealthTrendsOutput> {
  return analyzeHealthTrendsFlow(input);
}

const analyzeHealthTrendsPrompt = ai.definePrompt({
  name: 'analyzeHealthTrendsPrompt',
  input: {schema: AnalyzeHealthTrendsInputSchema},
  output: {schema: AnalyzeHealthTrendsOutputSchema},
  prompt: `You are a medical data analyst tasked with identifying emerging health trends and predicting resource needs based on patient data.

  Analyze the following patient data to identify significant health trends, predict future resource needs, and provide recommendations for proactive measures.

  Patient Data: {{{patientData}}}
  Start Date: {{{startDate}}}
  End Date: {{{endDate}}}
  Specific Conditions (Optional): {{{specificConditions}}}
  Demographic Filters (Optional): {{{demographicFilters}}}

  Provide a concise summary of the emerging health trends, an estimate of the resources needed, a confidence level in the analysis, and recommendations for proactive measures.

  Ensure that the analysis considers the specified time period, focuses on the indicated conditions and demographic groups, and uses appropriate statistical methods to identify trends and make predictions.

  Output the results in a structured format, including the emerging trends, predicted resource needs, confidence level, and recommendations.

  Emerging Trends: (Provide a summary of the identified health trends)
  Predicted Resource Needs: (Estimate the resources required to address these trends)
  Confidence Level: (Indicate the confidence level in the analysis and predictions)
  Recommendations: (Provide proactive measures to address the trends and optimize resource allocation)
  `,
});

const analyzeHealthTrendsFlow = ai.defineFlow(
  {
    name: 'analyzeHealthTrendsFlow',
    inputSchema: AnalyzeHealthTrendsInputSchema,
    outputSchema: AnalyzeHealthTrendsOutputSchema,
  },
  async input => {
    const {output} = await analyzeHealthTrendsPrompt(input);
    return output!;
  }
);
