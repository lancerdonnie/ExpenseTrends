import type { Response, Request, Router } from 'express';

export interface GenericType {
  created_date: Date;
  updated_date: Date;
}

export interface IContainer {
  cradle: ICradle;
}

export interface ICradle {}
