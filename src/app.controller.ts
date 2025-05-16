import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { BusinessPlanDto, StateCountryDto, BuyerPersonaDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  testApi() {
    return this.appService.testApi();
  }

  @Post('/business-plan')
  generateBusinessPlan(@Body() data: BusinessPlanDto) {
    return this.appService.generateBusinessPlan(data);
  }

  @Post('/state-country')
  getStateCountry(@Body() data: StateCountryDto) {
    return this.appService.getStateCountry(data);
  }

  @Get('/chat')
  getHello() {
    return this.appService.getHello();
  }

  @Post('buyer-persona')
  generateBuyerPersona(@Body() buyerPersonaDto: BuyerPersonaDto) {
    return this.appService.generateBuyerPersona(buyerPersonaDto);
  }
}
