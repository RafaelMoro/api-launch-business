import { registerAs } from '@nestjs/config';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default registerAs('config', () => ({
  openAIKey: process.env.OPEN_AI_API_KEY,
}));
