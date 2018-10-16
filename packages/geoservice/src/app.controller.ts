import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('init')
  initDB() {
    this.appService.initDB();
  }

  @Get('/init/r')
  initRegions() {
    return this.appService.fetchRegions();
  }

  @Get('/init/d')
  initDepartements() {
    return this.appService.fetchDepartements();
  }

  @Get('init/c')
  intiCommunes() {
    return this.appService.fetchCommunes();
  }
}
