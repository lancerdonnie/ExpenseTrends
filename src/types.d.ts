import type { Response, Request, Router } from 'express';
import type { User } from './entity/User';

export interface IContainer {
  cradle: ICradle;
}

export interface ICradle {
  repo: Repo;
  core: Core;
  db: { user: typeof User };
  UrlController: Router;
  createConn: () => void;
}
