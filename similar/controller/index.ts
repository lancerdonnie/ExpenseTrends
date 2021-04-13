import type { Response, Request } from 'express';
import type { ICradle } from '../types';
import { Router } from 'express';

const router = Router();

export default ({ similarService }: ICradle) => {
  router.post('/', async (req: Request, res: Response) => {
    const id = req.body.id;
    const categories = req.body.categories;
    res.send(await similarService.getSimilarUsers(id, categories));
  });

  return router;
};
