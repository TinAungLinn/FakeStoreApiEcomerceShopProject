import React from "react";
import { useContextCustom } from "../Context/StateContext";
import "../index.css";

const Product = (props) => {
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  const { id, image, title, price, description } = props;

  const { dispatch } = useContextCustom();
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  return (
    <div className=" flex flex-col shadow rounded p-5  mt-10 w-72 h-[450px]">
      <div>
        <img src={image} className=" max-w-[150px] mb-5 h-[150px] " alt="" />
        <h2 className=" text-3xl font-semibold mb-5 text-gray-500">
          {title.substring(0, 25)}...
        </h2>
        <h4 className=" text-xl">$ {price}</h4>
      </div>
      <div className="mt-auto">
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}
          className=" btn py-2 px-5 rounded bg-teal-500 text-white me-2"
        >
          Add To Cart
        </button>
        <button className=" btn py-2 px-5 rounded bg-teal-500 text-white">
          Detail
        </button>
      </div>
    </div>
  );
};

export default Product;
