import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../Utils/Constants";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [scroll, setScroll] = useState(window.scrollY);
  const searchCache = useSelector(store => store.search);

  const toggleMenuHandler = () => {
    console.log("Clicked");
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery])
      {
         setSuggestions(searchCache[searchQuery]); 
      }else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);


  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log({[searchQuery]: json[1]})
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
    console.log(json);
  };

  const onSearchHandler = () => {};

  return (
    <div className="grid grid-flow-col p-2 mx-4">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjngCfF1EEhYTfgOYyjr2tjCzfgjGltIi0FJCXJpFh2kj_1v52ym75Vcw4UPC4vrkk8s&usqp=CAU"
        />
        <img
          className="h-16 mx-4"
          alt="logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        />
      </div>
      <div className="col-span-10 px-8 flex justify-center items-center flex-col">
        <div className="w-1/2">
          <div className="w-full">
            <input
              className="border w-5/6 border-gray-400 p-2 outline-1 outline-blue-300 rounded-l-full"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="border w-1/6 border-gray-400 px-4 py-2 rounded-r-full bg-gray-100">
              🔍
            </button>
          </div>
          {showSuggestion && (
            <div className="fixed w-4/12 rounded-lg bg-white p-2">
              <ul>
                {suggestions.map((s, i) => (
                  <li key={i} className="p-2 rounded-sm hover:bg-gray-300">
                    🔍 &nbsp; {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 flex items-center">
        <img
          className="h-9"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
