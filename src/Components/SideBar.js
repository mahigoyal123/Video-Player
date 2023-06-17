import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-72 bg-white max-h-screen overflow-y-auto">
      <ul className="mb-4 mt-2 px-6">
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr />
      <h1 className="mt-4 font-bold px-6">Subscriptions</h1>
      <ul className="mb-4 px-6">
        <li>DD React</li>
        <li>Nasaste Js</li>
        <li>Gaurav Sev</li>
        <li>Ankit</li>
        <li>World Affairs</li>
        <li>The Lallantop</li>
      </ul>
      <hr />
      <h1 className="mt-4 px-6 font-bold">Explore</h1>
      <ul className="mb-4 px-6">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Live</li>
        <li>News</li>
        <li>Learning</li>
      </ul>
      <hr />
      <h1 className="mt-4 font-bold px-6">More from youtube</h1>
      <ul className="mb-4 px-6">
        <li>YouTube Premium</li>
        <li>Youtube Stdio</li>
        <li>YouTube Music</li>
        <li>YouTube Kid</li>
      </ul>
      <hr />
      <ul className="mt-4 pb-8 px-6">
        <li>Setting</li>
        <li>Report History</li>
        <li>Help</li>
      </ul>
      <p className="mb-2 pb-2 px-6 text-gray-500 font-light text-sm">
        © 2023 Amrit Anand
      </p>
    </div>
  );
};

export default SideBar;
