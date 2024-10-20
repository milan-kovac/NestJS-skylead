import { ApiResponseProperty } from '@nestjs/swagger';
import { GenericResponse } from 'src/shared/responses/create.response';

export class SignInResponseDto extends GenericResponse {
  @ApiResponseProperty({
    type: String,
  })
  data: string;
}
