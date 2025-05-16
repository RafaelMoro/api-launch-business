import { IsString, IsNotEmpty } from 'class-validator';

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

export class BuyerPersonaDto {
  @IsString()
  @IsNotEmpty()
  business: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}

export class InitialBudgetDto {
  @IsString()
  @IsNotEmpty()
  business: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}

export class BusinessCompetitionDto {
  @IsString()
  @IsNotEmpty()
  business: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}
