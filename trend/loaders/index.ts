import type { Router } from 'express';
import type { IContainer } from '../types';
import expressLoader from './express';

export default async ({
  router,
  container,
}: {
  router: Router;
  container: IContainer;
}) => {
  expressLoader({ router, container });
  return router;
};
