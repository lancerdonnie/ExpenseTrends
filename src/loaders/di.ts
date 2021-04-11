import type { ICradle } from '../types';
import { createContainer, asClass, asFunction, asValue } from 'awilix';
import Repo from '../repo';
import Core from '../core';
import Db from '../entity/database';
import UserController from '../controllers/User';
import { createConn } from './createConn';

export const setupDi = () => {
  const container = createContainer<ICradle>();

  container.register({
    repo: asClass(Repo).scoped(),
    core: asClass(Core).scoped(),
    db: asValue(Db),
    createConn: asValue(createConn),
    UrlController: asFunction(UserController),
  });

  return container;
};
