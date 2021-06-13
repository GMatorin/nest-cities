import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'must be a string' })
  @IsEmail()
  readonly email: string;
  @IsString()
  @Length(4, 16)
  readonly password: string;
}
