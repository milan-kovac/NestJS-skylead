import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator((data: string, req) => {
  return req.args[0].user;
});
