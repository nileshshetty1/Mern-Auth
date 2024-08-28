import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-slate-700">
      <div className="flex justify-between text-white items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">LearnAuth</h1>
        </Link>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="hover:text-gray-500 cursor-pointer underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-gray-500 cursor-pointer underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:text-gray-500 cursor-pointer underline">
              Sign-in
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
