import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionsModule } from './regions/regions.module';
import { CommunesModule } from './communes/communes.module';
import { DepartementsModule } from './departements/departements.module';
import { Region } from './regions/regions/region.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Departement } from './departements/departements/departement.entity';
import { Commune } from './communes/communes/commune.entity';

@Module({
  imports: [
    HttpModule,
    RegionsModule,
    CommunesModule,
    DepartementsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Region, Departement, Commune],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
