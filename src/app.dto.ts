import { IsString } from 'class-validator';

export class BusinessPlanDto {
  @IsString()
  business: string;
}

export class StateCountryDto {
  @IsString()
  longitude: string;

  @IsString()
  latitude: string;
}
