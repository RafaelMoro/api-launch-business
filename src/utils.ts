export const parseStringToJson = (message: string | null) => {
  try {
    if (!message) {
      return 'Message is null';
    }
    const json: unknown = JSON.parse(message);
    return json;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return 'Error parsing JSON';
  }
};
