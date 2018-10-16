import { Injectable, NotFoundException } from '@nestjs/common';
import { Region } from './regions/region.entity';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from "typeorm"
@Injectable()
export class RegionsService {

    constructor(@InjectRepository(Region) private readonly regionsRepository: Repository<Region>) { }
    async save(region) {
        return await this.regionsRepository.save(region);
    }

    async populate(data) {
        try {
            await getConnection().createQueryBuilder().delete().from(Region).execute();
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
        return await this.regionsRepository.findOne({ nom: nom });
    }

    async findOne(nom: string, code: string) {
        try {
            if (nom && code) return await this.regionsRepository.find({ nom: Like(`%${nom}%`), code: Like(`%${code}%`) });
            if (nom) return await this.regionsRepository.findOneOrFail({ nom: Like(`%${nom}%`) });
            if (code) return await this.regionsRepository.findOneOrFail({ where: { code: Like(`%${code}%`) }, order: { code: "ASC" } });
            return await this.regionsRepository.find();
        } catch (error) {
           throw new NotFoundException()
        }
    }
}
