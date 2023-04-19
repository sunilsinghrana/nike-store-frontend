import React from 'react'
import Wrapper from '@/components/Wrapper'
import { IoMdHeartEmpty } from 'react-icons/io'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'

export default function ProductDetails() {
  return (
    <div className='w-full md:py-0'>
        <Wrapper>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

            {/* left column start */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full'><ProductDetailsCarousel/></div>
            {/* left column end */}

            {/* right column start */}
            <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {/* {p.name} */} Jordan Retro 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            {/* {p.subtitle} */} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, officia?
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                {/* MRP : &#8377;{p.price} */}
                                $111
                            </p>
                            {/* {p.original_price && ( */}
                                <>
                                    <p className="text-base  font-medium line-through">
                                        {/* &#8377;{p.original_price} */}
                                        $1225
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {/* {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        // )}
                                        % off */}
                                        $1112
                                    </p>
                                </>
                            {/* // )} */}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                {/* {p.size.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 font-medium ${
                                            item.enabled
                                                ? "hover:border-black cursor-pointer"
                                                : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                        } ${
                                            selectedSize === item.size
                                                ? "border-black"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))} */}
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            {/* {showError && (
                                <div className="text-red-600 mt-1">
                                    Size selection is required
                                </div>
                            )} */}
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            // onClick={() => {
                            //     if (!selectedSize) {
                            //         setShowError(true);
                            //         document
                            //             .getElementById("sizesGrid")
                            //             .scrollIntoView({
                            //                 block: "center",
                            //                 behavior: "smooth",
                            //             });
                            //     } else {
                            //         dispatch(
                            //             addToCart({
                            //                 ...product?.data?.[0],
                            //                 selectedSize,
                            //                 oneQuantityPrice: p.price,
                            //             })
                            //         );
                            //         notify();
                            //     }
                            // }}
                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                {/* <ReactMarkdown>{p.description}</ReactMarkdown> */}
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae asperiores, quo unde cum porro cumque vel est odio minima, quasi numquam suscipit ipsa nostrum architecto?
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>

<RelatedProducts/> 
        </Wrapper>
    </div>
  )
}
