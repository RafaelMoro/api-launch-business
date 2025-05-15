import { IsString } from 'class-validator';

export class BusinessPlanDto {
  @IsString()
  business: string;
}
