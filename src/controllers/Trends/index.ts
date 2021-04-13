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

  router.get('/trend/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await core.getTrend(id));
  });

  router.get('/similar/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await core.getSimilarUsers(id));
  });

  return router;
};
