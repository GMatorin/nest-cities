import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { City } from './city.model';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [SequelizeModule.forFeature([City])],
})
export class CitiesModule {}
