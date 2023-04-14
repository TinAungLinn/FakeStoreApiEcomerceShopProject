import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useContextCustom } from "../Context/StateContext";

const CartProducts = ({ item, increaseTotal, decreaseTotal }) => {
  //
  //
  //
  //
  //
  //
  //
  //
  // Logics
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContextCustom();

  const increase = () => {
    setQuantity(quantity + 1);
    increaseTotal(item.price);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseTotal(item.price);
    }
  };

  const oneItemPrice = quantity * item.price;

  const delBtn = () => {
    dispatch({ type: "REMOVE", payload: item });
    decreaseTotal(oneItemPrice);
  };

  // End Logic
  //
  //
  //
  //
  //
  //
  //
  //
  // Tasks

  return (
    <div className=" mt-5 flex items-center justify-between w-[500px] ">
      <div className=" flex justify-center items-center gap-7">
        <div className=" w-[120px]">
          <img src={item.image} className=" max-w-[100px] h-[100px] " alt="" />
        </div>
        <div className=" ms-3">
          <p className=" font-semibold text-gray-500">
            {item.title.substring(0, 25)}...
          </p>
          <p>$ {oneItemPrice.toFixed(2)}</p>
          <p onClick={delBtn} className=" cursor-pointer text-red-500">
            Remove
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <p
          onClick={increase}
          className=" text-3xl text-teal-500 cursor-pointer"
        >
          {<IoIosArrowUp />}
        </p>
        <p className=" select-none text-xl text-gray-500">{quantity}</p>
        <p
          onClick={decrease}
          className=" text-3xl text-teal-500 cursor-pointer"
        >
          {<IoIosArrowDown />}
        </p>
      </div>
    </div>
  );
};

export default CartProducts;
