import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Controller('/v1/tournaments')
export class TournamentsController {

  @Get('/:id')
  async getTournamentsById(@Param('id') id: string): Promise<string> {
    return Promise.resolve(`Tournament id ${id}`);
  }
}
