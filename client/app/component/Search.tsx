"use client";
import React, { useState } from "react";

type Props = {};

function Search({}: Props) {
  const [search, setSearch] = useState("");
  const handleSeach = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(search)
    // code goes here
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-row ml-2">
      <input
        className="w-full"
        onChange={handleSeach}
        value={search}
        type="text"
        placeholder="Search"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
