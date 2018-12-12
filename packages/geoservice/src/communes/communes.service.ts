import { Injectable, NotFoundException } from '@nestjs/common';
import { Commune } from './communes/commune.entity';
import { Repository, getConnection, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { replaceSpecialChar, replaceSpaceWithHyphen } from '../common/utils';
import * as latenize from 'latenize';

@Injectable()
export class CommunesService {
  constructor(@InjectRepository(Commune) private readonly communeRepository: Repository<Commune>) { }
  async  populate(data: Commune[]) {
    try {
      // Clean communes table
      await getConnection().createQueryBuilder().delete().from(Commune).execute();
    } catch (error) {
      console.log('impossible de nettoyer la bdd');
    }

    try {
      await getConnection().createQueryBuilder().delete().from(Commune).execute();
      data.forEach(c => {
        const normalized = replaceSpecialChar(replaceSpaceWithHyphen(latenize(c.nom).toLowerCase()));
        c.normalized_nom = normalized;
      });
      return await this.communeRepository.save<Commune>(data);
    } catch (error) {
      console.log('erreur populate communes. \n', JSON.stringify(error), '\n');
      // throw new Error('Impossible de sauvegarder les communes.');
    }
  }

  async findAll(nom, code, codePostal) {
    try {
      if (nom && code) return await this.communeRepository.find({ normalized_nom: Like(`%${nom}%`), code: Like(`%${code}%`) });
      if (nom) return await this.communeRepository.find({ where: { normalized_nom: Like(`%${nom}%`) }, order: { population: "DESC" }, take: 5 });
      if (code) return await this.communeRepository.find({ code: Like(`%${code}%`) });
      // if (codePostal) return await this.communeRepository.findOne({ codePostal: Like(`%${codePostal}%`) });
      return await this.communeRepository.find({ take: 50 });
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
