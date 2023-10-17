import {
  create,
  insert,
  remove,
  search,
  searchVector,
  Orama,
  AnyOrama,
} from "@orama/orama";
import { movies } from "./movies";

export type MovieDatabase = AnyOrama<{
  guid: string;
  title: string;
}>;

/**
 * This is a singleton class that will be used to search for movies.
 */
export class _MovieSearchEngine {
  /**
   * Singleton instance
   */
  private static _instance: _MovieSearchEngine;

  /**
   * Get singleton instance
   */
  public static getInstance() {
    return this._instance || (this._instance = new this());
  }

  /**
   * [https://github.com/oramasearch/orama](https://github.com/oramasearch/orama)
   */
  private _database: MovieDatabase | null = null;

  /**
   * Initialize the database.
   */
  public async initAsync(): Promise<void> {
    const start = performance.now();
    // Create the database
    this._database = await create({
      schema: {
        guid: "string",
        title: "string",
      },
    });

    // Insert all movies
    movies.forEach(async (movie) => {
      const { title, guid } = movie;
      await insert<any>(this._database!, {
        guid,
        title,
      });
    });
    const end = performance.now();
    console.log(`Database initialized in ${end - start}ms`);
  }

  /**
   * Search for a movie.
   * @param term Movie title to search for
   */
  public async searchAsync(term: string) {
    if (!this._database)
      throw new Error("DB not initialized. Did you forgot to call init()?");

    const searchResult = await search(this._database, {
      term: term,
      properties: ["title"],
      tolerance: 2,
    });

    return searchResult;
  }
}

export const MovieSearchEngine = _MovieSearchEngine.getInstance();
