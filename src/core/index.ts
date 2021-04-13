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

  getTrend = async (id: number) => {
    const trend = this.repo.getTrend(id);
    return trend;
  };

  getSimilarUsers = async (id: number) => {
    const trends = await this.getTrend(id);
    const similarUsers = await this.repo.getSimilarUsers(
      trends.map((e: any) => e.category),
      id
    );
    return similarUsers;
  };

  //   getUrl = async (shortId: string) => {
  //     if (!shortId) throw new Error(ERRORS.URL.NOT_FOUND_URL);
  //     const url = await this.repo.checkShortId(shortId);
  //     if (!url) throw new Error(ERRORS.URL.NOT_FOUND_URL);
  //     return url;
  //   };
}
