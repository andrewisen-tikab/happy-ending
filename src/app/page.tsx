"use client";

import SearchComponent from "./components/Search";
import { useEffect } from "react";
import { MovieSearchEngine } from "../data/MovieSearchEngine";

/**
 * Main react SPA.
 */
export default function Home() {
  // Begin by initializing the search engine.
  useEffect(() => {
    (async () => {
      await MovieSearchEngine.initAsync();
    })();
  }, []);

  // Then render some simple HTML.
  return (
    <main className="flex flex-col h-screen justify-between align-top lg:p-24">
      <div className="h-20 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Happy Ending
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            Does the movie have a happy ending?
          </div>
        </div>
      </div>

      {/* Fancy code goes here: */}
      <SearchComponent />

      <div className="h-10 mb-48 grid justify-content-end lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://github.com/andrewisen-tikab/happy-ending"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Contribute</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Help this project grow by contributing data on GitHub.
          </p>
        </a>
      </div>
    </main>
  );
}
