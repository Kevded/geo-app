import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './departements/departement.entity';
import { Repository, getConnection, Like } from 'typeorm';
import * as latenize from 'latenize';
import { replaceSpecialChar, replaceSpaceWithHyphen } from '../common/utils';

@Injectable()
export class DepartementsService {
    constructor(@InjectRepository(Departement) private readonly departementRepository: Repository<Departement>) { }

    async populate(data: Departement[]): Promise<Departement[]> {
        try {
            await getConnection().createQueryBuilder().delete().from(Departement).execute();
            data.forEach(d => {
                const normalized = replaceSpecialChar(replaceSpaceWithHyphen(latenize(d.nom).toLowerCase()));
                d.normalized_nom = normalized;
            });
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

            if (nom && code) return await this.departementRepository.find({ normalized_nom: Like(`%${nom}%`), code: Like(`%${code}%`) })
            if (nom) return await this.departementRepository.find({ normalized_nom: Like(`%${nom}%`) })
            if (code) return await this.departementRepository.find({ code: Like(`%${code}%`) })
            return await this.departementRepository.find();
        } catch (error) {
            throw new NotFoundException();
        }
    }
    async save(departements) {
        return await this.departementRepository.save(departements);
    }
}
