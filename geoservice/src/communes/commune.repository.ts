import { EntityRepository, Repository } from "typeorm";
import { Commune } from "./commune.entity";


@EntityRepository(Commune)
export class CommuneRepository extends Repository<Commune>{}
