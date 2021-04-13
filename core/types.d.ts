import type { Response, Request, Router } from 'express';
import type { User } from './entity/User';
import type Repo from './repo';
import type Trend from './services/trend';
import type Similar from './services/similar';

export interface IContainer {
  cradle: ICradle;
}

export interface ICradle {
  repo: Repo;
  similarService: Similar;
  trendService: Trend;
  query: (sql: string, values?: any) => Promise<any>;
  TrendController: Router;
  SimilarController: Router;
}
