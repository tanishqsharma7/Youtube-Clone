import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import headerIcon from "../svg/headerIcon.svg";
import searchIcon from "../svg/searchIcon.svg";
import userIcon from "../svg/userIcon.svg";
import { cacheResult } from "../Utils/seachSlice";

const Header = () => {
  const [searchSuggestion, setSearchSuggestion] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search.searchCache);
  
  const dispatch = useDispatch();

  // toggle side bar 
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // function to fetch data from query 
  const getSearchSuggestions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchSuggestion
    );
    const json = await data.json();

    setSuggestionList(json[1]);
    dispatch(cacheResult({[searchSuggestion]:json[1]}));

  };

  useEffect(() => {
    // debouncing of search result 
    const timer = setTimeout(() => {
      if (searchCache[searchSuggestion]) {
        setSuggestionList(searchCache[searchSuggestion]);
      } else {
        // if it not present in cache then make API call and store result in Cache
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchSuggestion]);

  return (
    <div className=" flex flex-row shadow-md p-4 justify-between ">
      <div className="flex flex-row mx-4">
        <img
          src={headerIcon}
          onClick={() => toggleMenuHandler()}
          className="w-7 h-10 mr-4 cursor-pointer"
          alt="header-icon"
        />
        <img
          alt="you-tube-logo"
          className="w-20 h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row">
          <input
            className="w-96 h-10 rounded-l-full border-black placeholder:text-gray-500 pl-4 "
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchSuggestion(e.target.value)}
            value={searchSuggestion}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <img
            src={searchIcon}
            className="w-14 h-10 px-5 border border-gray-500 rounded-r-full"
            alt="header-icon"
          />
        </div>
        {showSuggestions && suggestionList.length > 0 && (
          <div className="fixed border-gray-400 bg-slate-50 mt-11 ml-1 w-96 rounded-xl shadow-2xl opacity-95">
            <ul className="m-4 list-inside ">
              {suggestionList.map((suggest) => (
                <li className="flex items-center hover:bg-gray-200 rounded-lg p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mx-4">
        <img className="w-9 h-10 " src={userIcon} alt="user-icon" />
      </div>
    </div>
  );
};
export default Header;
