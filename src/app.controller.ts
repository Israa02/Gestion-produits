import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// hello world : israa yahyaoui ING 3A
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
