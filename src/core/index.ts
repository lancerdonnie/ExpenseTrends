import type { ICradle } from '../types';

export default class Core {
  constructor(opts: ICradle) {
    this.repo = opts.repo;
  }
  repo;

  getUserExpenseTrends = async () => {
    const userTrends = this.repo.getUserExpenseTrends();
    return userTrends;
  };

  getUsers = async () => {
    const users = this.repo.getUsers();
    return users;
  };

  getUser = async (id: number) => {
    const user = this.repo.getUser(id);
    return user;
  };

  //   getUrl = async (shortId: string) => {
  //     if (!shortId) throw new Error(ERRORS.URL.NOT_FOUND_URL);
  //     const url = await this.repo.checkShortId(shortId);
  //     if (!url) throw new Error(ERRORS.URL.NOT_FOUND_URL);
  //     return url;
  //   };
}
