import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import OpenAI from 'openai';
import config from '@/config';

@Injectable()
export class AppService {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  async getHello() {
    try {
      const apiKey = this.configService.openAIKey ?? '';
      if (!apiKey) {
        throw new BadRequestException('API key is not set');
      }

      const openai = new OpenAI({
        apiKey,
      });
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        store: true,
        messages: [{ role: 'user', content: 'write a haiku about ai' }],
      });
      const result = completion.choices[0].message;

      return {
        test: result,
        satus: 'ok',
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
