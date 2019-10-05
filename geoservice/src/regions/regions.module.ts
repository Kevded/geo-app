import { Module, HttpModule } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './region.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Region]), HttpModule, Region],
  controllers: [RegionsController],
  providers: [RegionsService],
  exports: [Region, RegionsService, RegionsModule]
})
export class RegionsModule { }
