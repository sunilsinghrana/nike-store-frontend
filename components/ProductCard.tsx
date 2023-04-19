import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard() {
  return (
    <Link href="/product/1" className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
         <Image
                width={500}
                height={500}
                src="/product-1.webp"
                alt="productimage"
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Jordan Air</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        {/* &#8377;{p.price} */}$1125
                    </p>

                    {/* {p.original_price && ( */}
                        <>
                            <p className="text-base  font-medium line-through">
                                {/* &#8377;{p.original_price} */}
                                $110
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {/* {getDiscountedPricePercentage(
                                    p.original_price,
                                    p.price
                                )} */}
                                % off
                            </p>
                        </>
                    {/* )} */}
                </div>
            </div>
      
    </Link>
  )
}
