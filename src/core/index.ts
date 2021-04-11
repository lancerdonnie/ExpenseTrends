import type { ICradle } from '../types';

export default class Core {
  constructor(opts: ICradle) {
    this.repo = opts.repo;
  }
  repo;

  //   getUrl = async (shortId: string) => {
  //     if (!shortId) throw new Error(ERRORS.URL.NOT_FOUND_URL);
  //     const url = await this.repo.checkShortId(shortId);
  //     if (!url) throw new Error(ERRORS.URL.NOT_FOUND_URL);
  //     return url;
  //   };
}
