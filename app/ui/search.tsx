"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { FilteredAllLinks } from "../lib/links";
import Link from "next/link";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex">
      <div className="relative flex flex-row items-center">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <MagnifyingGlassIcon className="absolute left-3 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
        <input
          id="search"
          className="rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          style={{ color: "black" }}
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  );
}

type SearchResult = string;

export const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    fetchResults(e.target.value);
  };

  const fetchResults = (query: string) => {
    const dummyResults = FilteredAllLinks(query);
    setResults(dummyResults);
  };
  const handleLinkClick = () => {
    setQuery("");
    setResults([]);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setQuery("");
      setResults([]);
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setQuery("");
      setResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  return (
    <div className="search-component z-20">
      <input
        type="text"
        className="w-96"
        style={{ color: "black" }}
        value={query}
        onChange={handleInputChange}
        placeholder="  Search..."
      />
      {query && (
        <div className="search-results max-h-64 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="search-result hover:underline text-sm"
              style={{ color: "black" }}
            >
              <Link href={result} onClick={handleLinkClick}>
                http://localhost:3000{result}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
