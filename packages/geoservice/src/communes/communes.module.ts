import { Module } from '@nestjs/common';
import { CommunesController } from './communes.controller';
import { CommunesService } from './communes.service';
import { Commune } from './commune.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Commune])],
  controllers: [CommunesController],
  providers: [CommunesService],
  exports: [CommunesService]
})
export class CommunesModule { }
