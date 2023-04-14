import React, { useEffect, useState } from "react";
import { useContextCustom } from "../Context/StateContext";
import CartProducts from "./CartProducts";
import { Link } from "react-router-dom";

const Cart = () => {
  //
  //
  //
  //
  //
  //
  // Logics

  const {
    state: { cart },
    dispatch
  } = useContextCustom();

  const [mainTotal, setMainTotal] = useState();

  useEffect(() => {
    setMainTotal(total);
  }, []);

  const total = () => cart?.reduce((pv, cv) => pv + cv.price, 0);

  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };

  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };

  // End Logic
  //
  //
  //
  //
  //
  //
  //
  // Tasks

  return (
    <>
      {cart.length !== 0 ? (
        <div>
          <div className=" pt-7 pb-5 flex flex-col items-center">
            {cart?.map((item) => {
              return (
                <CartProducts
                  key={item.id}
                  item={item}
                  increaseTotal={increaseTotal}
                  decreaseTotal={decreaseTotal}
                />
              );
            })}
          </div>
          <hr className=" w-[60%] mx-auto" />
          <div className=" flex justify-around my-5">
            <p className=" text-xl text-gray-500">Total</p>
            <p className=" text-xl text-gray-500">
              ${" "}
              {mainTotal == undefined ? "undefined" : `${mainTotal.toFixed(2)}`}
            </p>
          </div>
          <div className=" flex justify-center mb-20">
            <button onClick={()=>dispatch({type:"CLEAR_CART"})} className=" btn py-1 px-5 bg-red-500 rounded-md text-white">
              Clear
            </button>
          </div>
        </div>
      ) : (
        <div className=" h-screen flex items-center justify-center">
          <div className=" flex flex-col items-center gap-5 justify-center">
            <h2 className=" text-3xl text-teal-500">Your Cart is empty!</h2>
            <Link to="/">
              <button className=" btn text-white text-lg py-1 px-5 bg-blue-500 rounded-md">
                Fill it
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
