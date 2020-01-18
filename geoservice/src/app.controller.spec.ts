import { Test, TestingModule } from '@nestjs/testing';
import { HttpService, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionsService } from './regions/regions.service';
import { CommunesService } from './communes/communes.service';
import { DepartementsService } from './departements/departements.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Departement } from './departements/departement.entity';
import { DepartementRepository } from './departements/departement.repository';
import { Region } from './regions/region.entity';
import { RegionRepository } from './regions/region.repository';
import { Commune } from './communes/commune.entity';
import { CommuneRepository } from './communes/commune.repository';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        HttpModule.register(
          {
            timeout: 2000,
            maxRedirects: 5
          }
        )
      ],
      controllers: [
        AppController
      ],
      providers: [
        AppService,
        RegionsService,
        {
          provide: getRepositoryToken(Region),
          useClass: RegionRepository
        },
        CommunesService,
        {
          provide: getRepositoryToken(Commune),
          useClass: CommuneRepository
        },
        DepartementsService,
        {
          provide: getRepositoryToken(Departement),
          useClass: DepartementRepository
        },
        HttpService
      ],
    }).compile();
  });

  describe('root', () => {
    xit('should return "ok"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.initDatabase()).toBe('ok');
    });
  });
});
