import { ApiResponseProperty } from '@nestjs/swagger';
import { Role } from '../enums/role.enum';

export class UserDto {
  @ApiResponseProperty({
    type: Number,
    example: 1,
  })
  id: number;

  @ApiResponseProperty({
    type: Number,
    example: 'user@gmail.com',
  })
  email: string;

  @ApiResponseProperty({
    type: Number,
    example: Role.EDITOR,
  })
  role: Role;

  @ApiResponseProperty({
    type: Date,
    example: '2024-10-20 15:22:27.146908',
  })
  createdAt: Date;

  @ApiResponseProperty({
    type: Date,
    example: '2024-10-20 15:22:27.146908',
  })
  updatedAt: Date;
}
