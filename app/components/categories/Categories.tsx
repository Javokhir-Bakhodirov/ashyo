"use client";
import { CategoriesT } from "@/app/types";
import React from "react";

interface CategoryT {
    category: CategoriesT;
}

const Categories: React.FC<CategoryT> = ({ category }) => {
    return (
        <li className="text-[#545D6A] text-[16px] leading-[21px] font-[400]">
            {category.name}
        </li>
    );
};

export default Categories;
