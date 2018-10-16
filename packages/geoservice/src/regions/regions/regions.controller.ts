import { Controller, Get, Query } from '@nestjs/common';
import { RegionsService } from '../regions.service';
import { RegionQuery } from './regionQuery';
@Controller('regions')
export class RegionsController {
    constructor(private readonly regionsService: RegionsService) { }
    @Get()
    findAll(@Query() query: RegionQuery) {
        return this.regionsService.findOne(query.nom, query.code)
    }
}
