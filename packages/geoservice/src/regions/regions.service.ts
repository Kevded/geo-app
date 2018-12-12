import { Injectable, NotFoundException } from '@nestjs/common';
import { Region } from './regions/region.entity';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import * as latenize from 'latenize';
import { replaceSpaceWithHyphen, replaceSpecialChar } from '../common/utils';

@Injectable()
export class RegionsService {

    constructor(@InjectRepository(Region) private readonly regionsRepository: Repository<Region>) { }
    async save(region) {
        return await this.regionsRepository.save(region);
    }

    async populate(data: Region[]) {
        try {
            await getConnection().createQueryBuilder().delete().from(Region).execute();
            data.forEach(r => {
                const normalized: string = replaceSpecialChar(replaceSpaceWithHyphen(latenize(r.nom).toLowerCase()));
                r.normalized_nom = normalized;
            });
            const regions = await this.regionsRepository.save<Region>(data);
            return regions;
        } catch (error) {
            console.log('erreur populate regions \n', JSON.stringify(error));
            // throw Error('Impossible de sauvegarder les régions');
        }

    }
    async findAll() {
        return await this.regionsRepository.find();
    }

    async findByNom(nom: string) {
        return await this.regionsRepository.find({ nom: nom });
    }

    async findOne(nom: string, code: string) {
        try {
            if (nom && code) return await this.regionsRepository.find({ normalized_nom: Like(`%${nom}%`), code: Like(`%${code}%`) });
            if (nom) return await this.regionsRepository.find({ normalized_nom: Like(`%${nom}%`) });
            if (code) return await this.regionsRepository.find({ where: { code: Like(`%${code}%`) }, order: { code: 'ASC' } });
            return await this.regionsRepository.find();
        } catch (error) {
            throw new NotFoundException();
        }
    }
}
