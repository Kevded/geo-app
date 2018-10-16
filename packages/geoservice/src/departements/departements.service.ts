import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './departements/departement.entity';
import { Repository, getConnection, Like } from 'typeorm';

@Injectable()
export class DepartementsService {
    constructor(@InjectRepository(Departement) private readonly departementRepository: Repository<Departement>) { }

    async populate(data): Promise<Departement[]> {
        try {
            await getConnection().createQueryBuilder().delete().from(Departement).execute();
            return await this.departementRepository.save<Departement>(data);
        } catch (error) {
            console.log('erreur populate departements \n', JSON.stringify(error));
            // throw Error('Impossible de sauvegarder les départements');
        }
    }

    async findAllDepartements(): Promise<Departement[]> {
        return await this.departementRepository.find();
    }
    async findAll(nom?, code?) {
        try {

            if (nom && code) return await this.departementRepository.findOneOrFail({ nom: Like(`%${nom}%`), code: Like(`%${code}%`) })
            if (nom) return await this.departementRepository.findOneOrFail({ nom: Like(`%${nom}%`) })
            if (code) return await this.departementRepository.findOneOrFail({ code: Like(`%${code}%`) })
            return await this.departementRepository.find()
        } catch (error) {
            throw new NotFoundException();
        }
    }
    async save(departements) {
        return await this.departementRepository.save(departements)
    }
}
