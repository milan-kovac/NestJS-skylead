import { ApiResponseProperty } from '@nestjs/swagger';
import { GenericResponse } from 'src/shared/responses/create.response';

export class SignUpResponseDto extends GenericResponse {
  @ApiResponseProperty({
    type: Boolean,
    example: true,
  })
  data: boolean;
}
