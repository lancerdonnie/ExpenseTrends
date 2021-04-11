import type { ICradle } from '../types';

export default class UrlRepo {
  db;

  constructor({ db }: ICradle) {
    this.db = db;
  }
}
