export interface GeneralResponse {
  version: string;
  success: boolean;
  data: unknown;
  message: string | null;
  error: string | object;
}

export interface TestApiResponse
  extends Omit<GeneralResponse, 'message' | 'error'> {
  message: string;
  error: null;
}

export interface BusinessPlanData {
  businessStrategy: string;
  inversionPlan: string;
  businessGoals: string;
  possibleRisks: string;
}

export interface BusinessPlanResponse extends Omit<GeneralResponse, 'error'> {
  data: BusinessPlanData;
  error: null;
}

export interface StateCountryData {
  state: string;
  country: string;
}
export interface GetStateCountryResponse
  extends Omit<GeneralResponse, 'error'> {
  data: StateCountryData;
  error: null;
}

// Interfaces of getters of prompts
export interface GetBuyerPersonaProps {
  business: string;
  state: string | null;
  country: string | null;
}

export interface GetBasePromptBusinessPlanProps {
  business: string;
}

export interface GetStateCountryProps {
  longitude: string;
  latitude: string;
}

// Individual Buyer Persona interface
export interface BuyerPersona {
  name: string;
  demographicData: string;
  behaviorMotivations: string;
  needs: string;
}

// Response interface for the service
export interface BuyerPersonaResponse {
  version: string;
  success: boolean;
  message: string;
  data: BuyerPersona[] | null;
  error: string | null;
}
