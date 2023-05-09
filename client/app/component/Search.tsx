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
          if (response[0].name == search) {
            setSearchRecommendationBox(false);
          } else {
            setSearchRecommendationBox(true);
          }
          const content = response.map((eachResponse: any) => (
              <Link
              key={eachResponse._id}
                onClick={() => {
                  setSearch(eachResponse.name);
                }}
                className="  hover:bg-gray-200 py-1 pl-1 my-1 hover:text-blue-600  border-l border-gray-500 "
                href={`${eachResponse._id}`}
              >
                {eachResponse.name}
              </Link>
          ));

          const element = <>{content}</>;
          if (search.length > 0 && content.length > 0) {
            setSearchRecommendation(element);
            //console.log(content);
          } else {
            setSearchRecommendation(<div className="hidden"></div>);
          }
        } else {
          setSearchRecommendationBox(false);
        }
      };
      getRecommendation();
    } else {
      setSearchRecommendationBox(false);
    }
  }, [search.length]);
  return (
    <form  className="flex h-full flex-row mr-1">
      <input
        className="w-full pl-3 h-full"
        onChange={handleSeach}
        value={search}
        type="text"
        placeholder="Search"
      />
      <div
        onClick={() => setSearchRecommendationBox(false)}
        className={`${
          searchRecommendationBox
            ? "absolute   h-72 top-14 flex flex-col  bg-white w-3/4"
            : "hidden"
        }  `}
      >
        {searchRecommendation}
      </div>
    </form>
  );
}

export default Search;
