import { EntityRepository, Repository } from "typeorm";
import { Region } from "./region.entity";


@EntityRepository(Region)
export class RegionRepository extends Repository<Region>{}
