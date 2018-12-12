import { Test } from '@nestjs/testing';

import * as request from 'supertest';
import { RegionsService } from '../src/regions/regions.service';
import { RegionsModule } from '../src/regions/regions.module';
import { INestApplication } from '@nestjs/common';

describe('Regions', () => {
    let app: INestApplication;
    let regionsService: RegionsService = { findAll: () => [] };

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [RegionsModule],

        })
            .overrideProvider(RegionsService)
            .useValue(regionsService)
            .compile();

        app = module.createNestApplication();
        await app.init();
    });

    it('/GET regions', () => {
        return request(app.getHttpServer())
            .get('/regions')
            .expect(200);
    });


    afterAll(async () => {
        await app.close();
    });
});