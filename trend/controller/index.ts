import type { Response, Request } from 'express';
import type { ICradle } from '../types';
import { Router } from 'express';

const router = Router();

export default ({ trendService }: ICradle) => {
  router.get('/', async (_req: Request, res: Response) => {
    res.send(await trendService.getUserExpenseTrends());
  });

  router.get('/users', async (_req: Request, res: Response) => {
    res.send(await trendService.getUsers());
  });

  router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await trendService.getTrend(id));
  });

  return router;
};
