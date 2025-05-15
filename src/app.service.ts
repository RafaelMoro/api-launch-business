import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import OpenAI from 'openai';
import config from '@/config';

@Injectable()
export class AppService {
  constructor(
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
      // Completion for web search
      const completion = await openai.responses.create({
        model: 'gpt-4.1',
        tools: [{ type: 'web_search_preview' }],
        input: 'What was a positive news story from today?',
      });
      const result = completion.output_text;

      // Completion for chat
      // const completion = await openai.chat.completions.create({
      //   model: 'gpt-4o-mini',
      //   store: true,
      //   messages: [{ role: 'user', content: 'write a haiku about ai' }],
      // });
      // const result = completion.choices[0].message;

      return {
        test: result,
        satus: 'ok',
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
