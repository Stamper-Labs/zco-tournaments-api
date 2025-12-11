import { Module } from '@nestjs/common';
import { TournamentsController } from './controllers/v1/tournaments.controller';

@Module({
  imports: [],
  controllers: [TournamentsController],
  providers: [],
})
export class AppModule {}
