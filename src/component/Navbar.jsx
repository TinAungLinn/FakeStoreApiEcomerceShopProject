import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useContextCustom } from "../Context/StateContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // Logics

  const {
    search,
    setSearch,
    state: { cart },
  } = useContextCustom();

  // End Logics
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // Tasks

  return (
    <div className=" sticky top-0  bg-white flex justify-around items-center py-7 shadow">
      <Link to="/">
        <h1 className=" text-3xl font-semibold text-blue-600 header">Shop</h1>
      </Link>
      <div className=" flex item-center gap-5">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" outline-none border-b-2 border-b-gray-500"
        />
        <Link to="/cart">
          <div className=" relative">
            <BsCartPlus className=" text-3xl text-blue-500" />
            <span className=" absolute text-white text-lg bottom-3 bg-teal-500 w-5 h-5 rounded-[100%] flex justify-center items-center p-3 left-5">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
