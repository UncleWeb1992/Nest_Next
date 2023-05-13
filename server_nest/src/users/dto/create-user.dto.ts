import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'simple@mail.ru',
  })
  email: string;
  @ApiProperty({
    default: '123123',
  })
  password: string;
  @ApiProperty({
    default: 'petrovich',
  })
  fullName: string;
}
