import { Controller, Get, Query } from '@nestjs/common';
import { DepartementsService } from './departements.service';

@Controller('departements')
export class DepartementsController {
    constructor(private readonly departementService: DepartementsService) { }
    
    @Get()
    async findAll(@Query() query) {
        return await this.departementService.findAll(query.nom, query.code);
    }
}
