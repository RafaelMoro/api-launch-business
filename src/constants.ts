import {
  GetBasePromptBusinessPlanProps,
  GetBusinessCompetitionProps,
  GetBuyerPersonaProps,
  GetInitialBudgetProps,
  GetStateCountryProps,
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

export const getStateCountry = ({
  longitude,
  latitude,
}: GetStateCountryProps) => `
  En base a esta longitud ${longitude} y latitud ${latitude}, determina el estado y pais de la ubicacion.
  Devuelve el resultado en un arreglo de JSON con este formato:

  {
    "state": "",
    "country": "",
  }
  
  Recuerda no devolver en el resultado ningun salto de linea, ni /n, ni comillas, ni caracteres especiales.
`;

export const getInitialBudget = ({
  business,
  state,
  country,
}: GetInitialBudgetProps) => `
  Eres un experto en negocios y finanzas.

  Dame un presupuesto inicial para el negocio ${business} en base a este estado ${state} y pais ${country} y que consideraciones debo tener en cuenta.
  En caso de que ${state} y ${country} sean invalidos, usa al país de México como referencia.
  Devuelve el resultado en un arreglo de JSON con este formato:

  {
    "budget": "",
    "considerations": "",
  }

  Devuelve la propiedad budget como objeto donde cada propiedad es un gasto y el valor es el monto. Incluye una propiedad con el total dentro de budget.
  Recuerda que las consideraciones deben ser respecto al presupuesto. Devuelve la propiedad considerations como una cadena de texto solamente
  Recuerda no devolver en el resultado ningun salto de linea, ni /n, ni comillas, ni caracteres especiales.
`;

export const getBusinessCompetition = ({
  business,
  state,
  country,
}: GetBusinessCompetitionProps) => `
  Eres un experto en negocios y finanzas.

  Busca en internet y dame una lista de competidores similares para el negocio ${business} en base a este estado ${state} y pais ${country}.
  En caso de que ${state} y ${country} sean invalidos, usa al país de México como referencia.
  Devuelve el resultado en un arreglo de JSON con este formato:

  {
    "name": "",
    "description": "",
    "website": "",
    "logoDescription": "",
    "competition": "",
    "competitionType": "",
    "competitionSize": "",
    "competitionLocation": "",
    "differenciator": "
  }

  Recuerda no devolver en el resultado ningun salto de linea, ni /n, ni comillas, ni caracteres especiales. No agregues ningun texto adicional, solo el JSON.
`;
