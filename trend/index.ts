import { Router } from 'express';
import { setupDi } from './loaders/di';
import loadApp from './loaders';

const router = Router();

export default () => {
  const container = setupDi();
  //
  (async () => {
    await loadApp({ router, container });
  })();
  return router;
};
