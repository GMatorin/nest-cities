import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './city.model';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  getAllCities(): City[] {
    return this.citiesService.getAllCities();
  }

  @Get(':id')
  getCity(@Param('id') id: string): City {
    return this.citiesService.getCityById(id);
  }

  @Post()
  addCity(
    @Body('name') name: string,
    @Body('rating') rating: number,
    @Body('comments') comments: string[],
    @Body('size') size: number,
  ) {
    const id = this.citiesService.addCity(name, rating, comments, size);
    return { cityId: id };
  }

  @Patch(':id')
  updateCityById(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('rating') rating: number,
    @Body('comments') comments: string[],
    @Body('size') size: number,
  ) {
    return this.citiesService.updateCity(id, name, rating, comments, size);
  }

  @Delete(':id')
  deleteCityById(@Param('id') id: string) {
    return this.citiesService.deleteCityById(id);
  }
}
