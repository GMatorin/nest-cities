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
import { CreateCityDto } from './dto/create-city.dto';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Post()
  add(@Body() cityDto: CreateCityDto) {
    return this.citiesService.addCity(cityDto);
  }

  @Get()
  getAll() {
    return this.citiesService.getAllCities();
  }
}
