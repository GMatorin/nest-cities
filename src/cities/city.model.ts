import { Model, Column, DataType, Table } from 'sequelize-typescript';

interface CityCreation {
  name: string;
  rating: number;
  comments: string;
  size: number;
}

@Table({ tableName: 'techCities' })
export class City extends Model<City, CityCreation> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  public id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  public name: string;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  public rating: number;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  public comments: string;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  public size: number;
}
