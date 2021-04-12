import type { Response, Request, Router } from 'express';
import type { User } from './entity/User';

export interface IContainer {
  cradle: ICradle;
}

export interface ICradle {
  repo: Repo;
  core: Core;
  query: (sql: string, values?: any) => Promise<unknown>;
  TrendsController: Router;
}
