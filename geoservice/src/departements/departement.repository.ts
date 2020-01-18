import { EntityRepository, Repository } from "typeorm";

import { Departement } from "./departement.entity";

@EntityRepository(Departement)
export class DepartementRepository extends Repository<Departement>{}
