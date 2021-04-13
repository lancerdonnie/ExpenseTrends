import type { Response, Request, Router } from 'express';
import type { User } from './entity/User';
import type Repo from './repo';

export interface IContainer {
  cradle: ICradle;
}

export interface ICradle {
  repo: Repo;
  core: Core;
  query: (sql: string, values?: any) => Promise<any>;
  TrendsController: Router;
}
