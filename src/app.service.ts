import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import OpenAI from 'openai';
import config from '@/config';

import {
  getBasePromptBusinessPlan,
  getBuyerPersona,
  getStateCountry,
  VERSION_RESPONSE,
  getInitialBudget,
} from '@/constants';
import {
  BusinessPlanData,
  BusinessPlanResponse,
  GetStateCountryResponse,
  StateCountryData,
  TestApiResponse,
  BuyerPersonaResponse,
  BuyerPersona,
  InitialBudgetData,
  InitialBudgetResponse,
} from '@/interface';
import {
  BusinessPlanDto,
  StateCountryDto,
  BuyerPersonaDto,
  InitialBudgetDto,
} from './app.dto';
import { parseStringToJson } from './utils';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  testApi() {
    const response: TestApiResponse = {
      version: VERSION_RESPONSE,
      success: true,
      message: 'ok',
      data: null,
      error: null,
    };
    return response;
  }

  async getStateCountry(data: StateCountryDto) {
    try {
      const { longitude, latitude } = data;
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
        messages: [
          {
            role: 'user',
            content: getStateCountry({ latitude, longitude }),
          },
        ],
      });
      const result = completion.choices[0].message.content;
      const responseParsed = parseStringToJson(result) as StateCountryData;
      const response: GetStateCountryResponse = {
        version: VERSION_RESPONSE,
        success: true,
        message: 'state and country found',
        data: responseParsed,
        error: null,
      };
      return response;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async generateBusinessPlan(data: BusinessPlanDto) {
    try {
      const { business } = data;
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
        messages: [
          {
            role: 'user',
            content: getBasePromptBusinessPlan({ business }),
          },
        ],
      });
      const completionResult = completion.choices[0].message.content;
      const responseParsed = parseStringToJson(
        completionResult,
      ) as BusinessPlanData;
      const response: BusinessPlanResponse = {
        version: VERSION_RESPONSE,
        success: true,
        message: 'business plan created',
        data: responseParsed,
        error: null,
      };
      return response;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

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
      // const completion = await openai.responses.create({
      //   model: 'gpt-4.1',
      //   tools: [{ type: 'web_search_preview' }],
      //   input: 'What was a positive news story from today?',
      // });
      // const result = completion.output_text;

      // Completion for chat
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        store: true,
        messages: [
          {
            role: 'user',
            content:
              'based on this longitude 19.101495454823958 and latitude -96.12098351131316, determine what is the state and country of the location',
          },
        ],
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

  async generateBuyerPersona(data: BuyerPersonaDto) {
    try {
      const { business, state, country } = data;
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
        messages: [
          {
            role: 'user',
            content: getBuyerPersona({ business, state, country }),
          },
        ],
      });
      const completionResult = completion.choices[0].message.content;
      const responseParsed = parseStringToJson(
        completionResult,
      ) as BuyerPersona[];

      const response: BuyerPersonaResponse = {
        version: VERSION_RESPONSE,
        success: true,
        message: 'buyer personas created',
        data: responseParsed,
        error: null,
      };
      return response;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async generateInitialBudget(data: InitialBudgetDto) {
    try {
      const { business, state, country } = data;
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
        messages: [
          {
            role: 'user',
            content: getInitialBudget({ business, state, country }),
          },
        ],
      });
      const completionResult = completion.choices[0].message.content;
      console.log('completionResult', completionResult);
      const responseParsed = parseStringToJson(completionResult);
      if (responseParsed === 'Error parsing JSON') {
        throw new BadRequestException('Error parsing JSON');
      }

      const response: InitialBudgetResponse = {
        version: VERSION_RESPONSE,
        success: true,
        message: 'initial budget created',
        data: responseParsed as InitialBudgetData,
        error: null,
      };
      return response;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
