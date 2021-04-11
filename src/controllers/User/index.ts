import type { Response, Request } from 'express';
import type Core from '../../core';
import { Router } from 'express';

const router = Router();

export default ({ core }: { core: Core }) => {
  router.get('', async (req: Request, res: Response) => {
    res.send();
  });
  return router;
};
