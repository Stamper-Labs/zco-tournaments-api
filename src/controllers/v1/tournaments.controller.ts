import { Controller } from '@nestjs/common';
import {
    Get,
    Param
} from '@nestjs/common';
@Controller('/v1/tournaments')
export class TournamentsController {

    @Get('/:id')
    async getTournamentsById(@Param('id') id: string): Promise<string> {
        return `Tournament ID is: ${id}`;
    }
}
