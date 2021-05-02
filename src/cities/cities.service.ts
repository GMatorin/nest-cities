import { Injectable, NotFoundException } from '@nestjs/common';
import { City } from './city.model';

@Injectable()
export class CitiesService {
  private cities: City[] = [];

  public addCity(
    name: string,
    rating: number,
    comments: string[],
    size: number,
  ): string {
    const cityId = this.getCityId();
    const city = new City(cityId, name, rating, comments, size);
    this.cities.push(city);
    return cityId;
  }

  public getCityById(id: string): City {
    return this.getCityByIndex(this.findCityIndexById(id));
  }

  public getAllCities(): City[] {
    return [...this.cities];
  }

  public updateCity(
    id: string,
    name: string,
    rating: number,
    comments: string[],
    size: number,
  ): string {
    const index: number = this.findCityIndexById(id);
    const updatedCity: City = { ...this.getCityByIndex(index) };

    this.cities[index] = <City>{
      ...updatedCity,
      name: name ?? updatedCity.name,
      rating: rating ?? updatedCity.rating,
      comments: comments ?? updatedCity.comments,
      size: size ?? updatedCity.size,
    };

    return id;
  }

  public deleteCityById(id: string): string {
    const index: number = this.findCityIndexById(id);
    this.cities.splice(index, 1);
    return id;
  }

  private getCityId(): string {
    let cityId = Math.round(Math.random() * 1000) + '';

    while (this.cities.findIndex((city) => city.id === cityId) !== -1) {
      cityId = Math.round(Math.random() * 1000) + '';
    }
    return cityId;
  }

  private findCityIndexById(id: string): number {
    const index = this.cities.findIndex((city) => city.id === id);
    if (index === -1) {
      throw new NotFoundException('No city was found. Did you mean Zatulinka?');
    }
    return index;
  }

  private getCityByIndex(index: number): City {
    return this.cities[index];
  }
}
