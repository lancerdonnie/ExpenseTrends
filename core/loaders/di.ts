import type { ICradle } from '../types';
import { createContainer, asClass, asFunction, asValue } from 'awilix';
import Repo from '../repo';
import Similar from '../../similar/service/similar';
import Trends from '../../trend/service/trend';
import TrendController from '../../trend/controller';
import SimilarController from '../../similar/controller';
import query from './createConn';

export const setupDi = () => {
  const container = createContainer<ICradle>();

  container.register({
    repo: asClass(Repo).scoped(),
    query: asValue(query),
    similarService: asClass(Similar).scoped(),
    trendService: asClass(Trends).scoped(),
    TrendController: asFunction(TrendController),
    SimilarController: asFunction(SimilarController),
  });

  return container;
};
