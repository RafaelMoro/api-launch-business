export const VERSION_RESPONSE = process.env.npm_package_version ?? '0.0.0';

// Prompts
export const getBasePromptBusinessPlan = ({
  business,
}: {
  business: string;
}) => `
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
`;
