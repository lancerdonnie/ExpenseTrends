import type { ICradle } from '../types';
import { createContainer, asClass, asFunction, asValue } from 'awilix';
import Repo from '../repo';
import Core from '../core';
import TrendsController from '../controllers/Trends';
import query from './createConn';

export const setupDi = () => {
  const container = createContainer<ICradle>();

  container.register({
    repo: asClass(Repo).scoped(),
    core: asClass(Core).scoped(),
    query: asValue(query),
    TrendsController: asFunction(TrendsController),
  });

  return container;
};
