import { INestApplication } from "@nestjs/common"
import { Departement } from "../src/departements/departement.entity";
import { DepartementsModule } from "../src/departements/departements.module";
import { Test, TestingModule } from '@nestjs/testing';

import * as request from "supertest";
import { getRepositoryToken } from "@nestjs/typeorm";
import { DepartementsController } from "../src/departements/departements.controller";
import { DepartementRepository } from "../src/departements/departement.repository";
import { DepartementsService } from "../src/departements/departements.service";


describe('Departements', () => {
    let dep = new Departement();
    dep.code = "35";
    dep.codeRegion = "45";
    dep.id = 2;
    dep.nom = "nom";

    let departementMock: Departement[] = [];
    departementMock.push(dep);
    let app: INestApplication;
    let module: TestingModule;
    let departementsServiceMock = { findAll: async (nom?, code?) => departementMock };
    let departementServiceSpy: DepartementsService;
    let deprep: DepartementRepository;
    beforeAll(async () => {
        module = await Test.createTestingModule({
            imports: [],
            controllers: [
                DepartementsController
            ],
            providers: [
                DepartementsService,
                {
                    provide: getRepositoryToken(Departement),
                    useClass: DepartementRepository
                },
                {
                    provide: DepartementsService,
                    useValue: departementsServiceMock
                }
            ]
        })
            .compile();

        departementServiceSpy = module.get<DepartementsService>(DepartementsService);
        deprep = module.get<DepartementRepository>(DepartementRepository);
        app = await module.createNestApplication();
        app.setGlobalPrefix('api');
        await app.init();
    });


    it('/GET departements', async () => {

        jest.spyOn(departementServiceSpy, 'findAll').mockImplementation(async (nom?, code?) => departementMock);

        console.log("", await departementServiceSpy.findAll())
        return request(app.getHttpServer())
            .get('/api/departements')
            .expect(200)
            .expect(
                JSON.stringify(departementMock)
            );
    });


    afterAll(async () => {
        await app.close();
    });
})