import { SetMetadata } from '@nestjs/common';

export const Timeout = (milliseconds: number) => SetMetadata('timeout', milliseconds);