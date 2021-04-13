import type { Router } from 'express';
import type { IContainer } from '../types';

export default async ({
  router,
  container,
}: {
  router: Router;
  container: IContainer;
}) => {
  router.use(container.cradle.TrendController);
};
