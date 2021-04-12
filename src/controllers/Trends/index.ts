import type { Response, Request } from 'express';
import type Core from '../../core';
import { Router } from 'express';

const router = Router();

export default ({ core }: { core: Core }) => {
  router.get('/', async (_req: Request, res: Response) => {
    res.send(await core.getUserExpenseTrends());
  });

  router.get('/users', async (_req: Request, res: Response) => {
    res.send(await core.getUsers());
  });

  router.get('/trends/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await core.getUser(id));
  });

  return router;
};
