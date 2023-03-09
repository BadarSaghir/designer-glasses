import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
// import {UpdateUserDto} from 'libs/dto/update-user.dto'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    // UpdateUserDto
    return this.appService.getData();
  }
}
