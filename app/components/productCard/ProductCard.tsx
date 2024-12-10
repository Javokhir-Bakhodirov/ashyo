"use client";
import { CgShoppingBag } from "react-icons/cg";
import { FaBalanceScaleRight } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { ProductT } from "@/app/types";

interface ProductCardT {
    product: ProductT;
}

const ProductCard: React.FC<ProductCardT> = ({ product }) => {
    return (
        <div className="w-[283px] p-[10px] flex flex-col gap-[28px]">
            <div className=" header relative flex items-center justify-center p-[42px_33px] bg-[#EBEFF3] rounded-lg">
                <img
                    className="object-contain"
                    src={product.images[0]}
                    alt={product.name}
                    width={202}
                    height={202}
                    style={{ width: "202px", height: "202px" }}
                />
                <AiOutlineHeart className="w-[24px]  h-[24px] absolute top-[20px] right-[24px] text-[#545D6A] cursor-pointer " />
            </div>
            <div className="main">
                <h3 className="text-[14px] font-[400] leading-[19px] text-[#545D6A]">
                    {product.name}
                </h3>
            </div>
            <div className="footer flex items-end gap-[5px] justify-between">
                <div className="flex flex-col gap-[5px]">
                    <strong className="text-[20px] font-[700] leading-6">
                        {product.price} USD
                    </strong>
                    <div className=" w-[141px] flex items-center justify-center rounded-md text-[14px] font-[400] leading-[13px] p-[7px_10px] bg-[#F02C961A] text-[#F02C96]">
                        <span>
                            {" "}
                            6 oy / {(Number(product.price) / 6).toFixed(2)} USD
                        </span>
                    </div>
                </div>
                <div className=" flex space-x-1">
                    <button className=" p-[10px_14px] outline-none border-[1px] border-[#545D6A] rounded-lg">
                        <FaBalanceScaleRight className="w-6 h-6 text-[#545D6A]" />
                    </button>
                    <button className=" p-[10px_14px] outline-none border-[1px] bg-[#134E9B] border-[#54586a] rounded-lg">
                        <CgShoppingBag className="w-6 h-6 text-[#fff]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
