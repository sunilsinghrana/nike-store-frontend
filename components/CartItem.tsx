import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItem() {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        {/* <Image
            src={p.thumbnail.data.attributes.url}
            alt={p.name}
            width={120}
            height={120}
        /> */}
        <Image src="/product-1.webp" alt="logosd" width={120} height={120} />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {/* {p.name} */}
            Jordan Air 6 G
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {/* {p.subtitle} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet alias culpa aliquid dignissimos recusandae cupiditate odit non eaque mollitia!
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            {/* MRP : &#8377;{p.price} */}
            $1125
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {/* {p.subtitle} */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, tempore beatae aspernatur voluptatum velit aperiam.
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                // onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                <option>56</option>
                <option>56</option>
                <option>56</option>
                <option>56</option>
                <option>56</option>
                {/* {p.size.data.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })} */}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                // onChange={(e) => updateCartItem(e, "quantity")}
              >
                <option value="5">2</option>
                <option value="5">2</option>
                <option value="5">2</option>
                <option value="5">2</option>
                <option value="5">2</option>
                {/* {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })} */}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            // onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
