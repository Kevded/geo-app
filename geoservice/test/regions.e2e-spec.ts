import { Test } from '@nestjs/testing';

import * as request from 'supertest';
import { RegionsService } from '../src/regions/regions.service';
import { RegionsModule } from '../src/regions/regions.module';
import { INestApplication } from '@nestjs/common';
import { Region } from '../src/regions/region.entity';
import { RegionsController } from '../src/regions/regions.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RegionRepository } from "../src/regions/region.repository";

describe('Regions', () => {
    let app: INestApplication;
    let regionMock = [new Region()];
    let regionsServiceMock = { findAll: async () => regionMock };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [],
            controllers: [RegionsController],
            providers: [
                RegionsService,
                {
                    provide: getRepositoryToken(Region),
                    useClass: RegionRepository
                },
                {
                    provide: RegionsService,
                    useValue: regionsServiceMock
                }
            ]

        })
            /*   .overrideProvider(RegionsService)
              .useValue(regionsService) */
            .compile();

        app = module.createNestApplication();
        app.setGlobalPrefix('api');

        await app.init();
    });

    it('/GET regions', () => {
        return request(app.getHttpServer())
            .get('/api/regions')
            .expect(200);
    });


    afterAll(async () => {
        await app.close();
    });
});