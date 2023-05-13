import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserId = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): number | null => {
    const result = ctx.switchToHttp().getRequest();
    return result.user?.id ? Number(result.user?.id) : null;
  },
);
