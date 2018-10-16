import { Module, HttpModule } from '@nestjs/common';
import { RegionsController } from './regions/regions.controller';
import { RegionsService } from './regions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './regions/region.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Region]), HttpModule, Region],
  controllers: [RegionsController],
  providers: [RegionsService],
  exports: [Region, RegionsService]
})
export class RegionsModule { }
