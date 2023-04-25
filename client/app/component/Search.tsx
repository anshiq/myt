"use client";
import SearchRecommendation from "@/lib/SearchRecommendation";
import Link from "next/link";
import React, { useEffect, useState } from "react";


function Search() {
  const [search, setSearch] = useState("");
  const [searchRecommendation , setSearchRecommendation]:any = useState([])
  const handleSeach = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  };
  useEffect(()=>{
    const getRecommendation =async()=>{
      const response   = await  SearchRecommendation(search) 
      if(response.error){
        setSearchRecommendation(["error"])
        return
      }
      const content = response.map((eachResponse:any)=>(
        <>
          <Link  href={eachResponse.id} >{eachResponse.name} </Link>
          </>
      )) 
      setSearchRecommendation(content)

      console.log(response)
    }
    getRecommendation()
  },[search.length])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(search)
    // code goes here
  };
  return (
    <div className="flex  flex-row items-center justify-center h-full">
      <form onSubmit={handleSubmit} className="flex flex-row mr-4">
        <input
          className="w-full"
          onChange={handleSeach}
          value={search}
          type="text"
          placeholder="Search"
          />
        <button type="submit">Search</button>
  <div className="absolute top-14">
          {searchRecommendation}
        </div>

      </form>
    </div>
  );
}

export default Search;
