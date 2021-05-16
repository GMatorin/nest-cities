import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { City } from './city.model';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City) private cityRepository: typeof City) {}

  async addCity(dto: CreateCityDto): Promise<City> {
    const city = await this.cityRepository.create(dto);
    return city;
  }

  async getAllCities(): Promise<City[]> {
    const cities = await this.cityRepository.findAll();
    return cities;
  }
}
