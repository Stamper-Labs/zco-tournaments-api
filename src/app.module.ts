import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentsController } from './controllers/v1/tournaments.controller';

@Module({
  imports: [],
  controllers: [AppController, TournamentsController],
  providers: [AppService],
})
export class AppModule {}
