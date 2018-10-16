import { IsAlpha, IsOptional, IsNumberString, IsString } from "class-validator";

export class RegionQuery {
    @IsString()
    @IsOptional()
    nom?: string;

    @IsNumberString()
    @IsOptional()
   // @IsAlphaWithAccent()
    code?: string;
}