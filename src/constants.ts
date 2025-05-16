import {
  GetBasePromptBusinessPlanProps,
  GetBuyerPersonaProps,
} from './interface';

export const VERSION_RESPONSE = process.env.npm_package_version ?? '0.0.0';

// Prompts
export const getBasePromptBusinessPlan = ({
  business,
}: GetBasePromptBusinessPlanProps) => `
  Define un plan de negocio para ${business}. La estrategia de negocio debe incluir: 
  1. Una estrategia de negocio 
  2. Define un plan para atraer inversion
  3. Establece metas y KPIs para medir el negocio
  4. Identifica riesgos potenciales de negocio

  Devuelve el resultado en un JSON en el siguiente formato:
  {
    "businessStrategy": "",
    "inversionPlan": "",
    "businessGoals": "",
    "possibleRisks": ""
  }

  Recuerda no devolver en el resultado ningun salto de linea, ni /n, ni comillas, ni caracteres especiales.
`;

export const getBuyerPersona = ({
  business,
  state,
  country,
}: GetBuyerPersonaProps) => `
  Eres un experto en marketing digital.
  Define 3 buyer persona para el negocio de ${business} en base a este estado ${state} y pais ${country}.
  Devuelve el resultado en un arreglo de JSON con este formato:

  {
  "name": "",
  "demographicData": "",
  "behaviorMotivations": "",
  "needs": "",
}

  En caso de que ${state} y ${country} sean invalidos, usa al país de México como referencia.
  Recuerda no devolver en el resultado ningun salto de linea, ni /n, ni comillas, ni caracteres especiales.
`;
