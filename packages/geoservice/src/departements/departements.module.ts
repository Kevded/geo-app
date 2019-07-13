import { Module } from '@nestjs/common';
import { DepartementsController } from './departements.controller';
import { DepartementsService } from './departements.service';
import { Departement } from './departement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Departement])],
  controllers: [DepartementsController],
  providers: [DepartementsService],
  exports:[DepartementsService]
})
export class DepartementsModule {}
