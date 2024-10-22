import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue) || value < 0) {
      throw new BadRequestException('Validation failed.ID must be a number.');
    }
    return parsedValue;
  }
}
