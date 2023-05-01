"use client";
import SearchRecommendation from "@/lib/SearchRecommendation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [searchRecommendationBox, setSearchRecommendationBox] = useState(false);
  const [searchRecommendation, setSearchRecommendation]: any = useState([]);
  const handleSeach = (e: any) => {
    setSearch(e.target.value);
    // console.log(search);
  };
  useEffect(() => {
    if (search.length >= 1) {
      const getRecommendation = async () => {
        const response = await SearchRecommendation(search);
        if (response.error) {
          setSearchRecommendation(["error"]);
          return;
        }
        if (response.length > 0) {
          if(response[0].name==search){

            setSearchRecommendationBox(false);
          }
          else{

            setSearchRecommendationBox(true);
          }
          const content = response.map((eachResponse: any) => (
            <>
              <Link
                onClick={() => {
                  setSearch(eachResponse.name);
                }}
                className=" ml-2 py-2"
                href={`${eachResponse._id}`}
              >
                {eachResponse.name}
              </Link>
              </>
          ));

          const element = <>{content}</>;
          if (search.length > 0 && content.length > 0) {
            setSearchRecommendation(element);
            console.log(content);
          } else {
            setSearchRecommendation(<div className="hidden"></div>);
          }
        } else{

          setSearchRecommendationBox(false)
        }
      };
      getRecommendation();
    } else {

      setSearchRecommendationBox(false)
    }
  }, [search.length]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(search)
    // code goes here
  };
  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-row mr-4">
      <input
        className="w-full pl-3 h-full"
        onChange={handleSeach}
        value={search}
        type="text"
        placeholder="Search"
        />
      <button type="submit">Search</button>
      <div
        onClick={ ()=> setSearchRecommendationBox(false) }
        className={`${
searchRecommendationBox ? "absolute   h-72 top-14 flex flex-col  bg-white w-3/4" : "hidden"
}  `}
      >
        {searchRecommendation}
      </div>
    </form>
  );
}

export default Search;
