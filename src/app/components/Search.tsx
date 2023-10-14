"use client";

import { usePathname, useSearchParams } from "next/navigation";

import React, { useCallback, useState } from "react";
import { movies } from "../../data/movies";
import Link from "next/link";
import { MovieSearchEngine } from "../../data/MovieSearchEngine";

const doSearch = async (input: string) => {
  const results = await MovieSearchEngine.searchAsync(input);
  const { hits = [] } = results;

  return hits.map((hit) => {
    const { title, guid } = hit.document;
    return { title, guid };
  });
};

type SearchResults = { title: string; guid: string };

/**
 * Simple component that shows the result of a movie search.
 * It will look up the movie in the `movies` array based on the `guid` prop.
 */
function MovieResult({ guid = "123" }: { guid: string }) {
  const movie = movies.find((movie) => movie.guid === guid);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  let message = "";

  if (movie.hasHappyEnding === null) {
    message = `
    No data available.
    Consider contributing this data! :)
    `;
  } else {
    message = movie.hasHappyEnding
      ? "Has happy ending :)"
      : "Does not have happy ending :/";
  }

  return (
    <div>
      <div
        className="relative rounded-full px-3 lg:py-5 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 
      "
      >
        {movie.title}
      </div>

      <h1 className="lg:text-2xl font-bold tracking-tight py-5 whitespace-pre-line">
        {message}
      </h1>
      <Link href="/" className="font-semibold">
        <span aria-hidden="true">&larr;</span>Back
      </Link>
    </div>
  );
}

/**
 * A poorly written component that does a search.
 * The reason for prop drilling is because I'm lazy and I want to store the state in the parent component.
 * (when a user returns to the search page, the state should be preserved)
 */
function MovieSearch({
  searchParams,
  searchInput,
  setSearchInput,
  searchResults,
  setSearchResults,
}: any) {
  // Where are we?
  const pathname = usePathname();

  // Handle input change.
  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    await performSearch(inputValue);
  };

  // Perform the search.
  const performSearch = async (input: string) => {
    const filteredResults = await doSearch(input);
    setSearchResults(filteredResults);
  };

  // Navigate to the search page with the query string.
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return (
    <>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchInput}
        onChange={handleInputChange}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        style={{ color: "black" }}
      />
      <ul role="list" className="divide-y divide-gray-100">
        {searchResults.map((result: any) => (
          <li key={result.guid} className="flex justify-between gap-x-6 py-5">
            <Link
              href={pathname + "?" + createQueryString("movie", result.guid)}
              className="font-semibold"
            >
              {result.title} <span aria-hidden="true">&rarr;</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 * A big component that does everything.
 */
const SearchComponent = () => {
  // Get the search params from the URL.
  const searchParams = useSearchParams();
  const movie = searchParams.get("movie");

  // Also, prepare some state for the search.
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);

  // If the user has selected a movie, show the result.
  // Otherwise, show the search component.
  return (
    <div className="h-80 overflow-scroll px-8">
      {movie ? (
        <MovieResult guid={movie} />
      ) : (
        <MovieSearch
          searchParams={searchParams}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      )}
    </div>
  );
};

export default SearchComponent;
