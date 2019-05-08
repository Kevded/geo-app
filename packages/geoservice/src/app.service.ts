import { Injectable, HttpService } from '@nestjs/common';
import { RegionsService } from './regions/regions.service';
import { DepartementsService } from './departements/departements.service';
import { CommunesService } from './communes/communes.service';
import { Departement } from './departements/departements/departement.entity';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly regionsService: RegionsService,
    private readonly departementsService: DepartementsService,
    private readonly communesService: CommunesService
  ) { }

  async fetchRegions() {
    const res = await this.httpService.get('https://geo.api.gouv.fr/regions').toPromise();
    return await this.regionsService.populate(res.data);
  }


  async fetchDepartements() {
    const res = await this.httpService.get('https://geo.api.gouv.fr/departements').toPromise();
    const departementsList = await this.departementsService.populate(res.data);
    const regionsList = await this.regionsService.findAll();
    regionsList.forEach(region => {
      const departementOfRegion = departementsList.filter(departement => departement.codeRegion === region.code);
      departementOfRegion.forEach(d => d.region = region)
      region.departements = departementOfRegion
      this.regionsService.save(region)
    });

    return await this.departementsService.findAll()
  }

  async fetchCommunes() {
    // Recup les departements depuis la bdd
    const departementsList: Departement[] = await this.departementsService.findAllDepartements();
    let accumulateCommunes;
    departementsList.forEach(async departement => {
      try {
        // Pour un département on récup ces communes en intérogeant l'api par codeDepartement
        const communesDto = await this.httpService.get((`https://geo.api.gouv.fr/communes?codeDepartement=${departement.code}`)).toPromise();
        // On associe le departement à chaque commune
        const communesWiAssignedDepartement = communesDto.data.map((c) => c = { ...c, departement: { id: departement.id } });

        try {
          // On sauvegarde les communes dans la bdd
          await this.communesService.populate(communesWiAssignedDepartement)
        } catch (error) {
          console.error('Erreur lors de la récupérations des communes ', error.message)
        }
      } catch (error) {
        console.error('erreur lors de récupération des communes | assignation ID\n', error.message)
      }
    });
  }

  async initDatabase() {
    await this.fetchRegions();
    await this.fetchDepartements();
    await this.fetchCommunes();
  }
}
