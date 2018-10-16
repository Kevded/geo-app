import { Controller, Get, Query } from '@nestjs/common';
import { CommunesService } from '../communes.service';

@Controller('communes')
export class CommunesController {
    constructor(private readonly communeService: CommunesService) { }
    @Get()
    async findAll(@Query() query) {
        return await this.communeService.findAll(query.nom, query.code, query.codePostal)
    }
}
