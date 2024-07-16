import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('example') // Tag for this controller
@Controller('api/example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
