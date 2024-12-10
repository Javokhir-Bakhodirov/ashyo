"use client";
import { BiSearch, BiMap } from "react-icons/bi";
import Container from "@/app/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { instance } from "@/app/hook/instance";
import { CategoriesT } from "@/app/types";
import Categories from "../categories/Categories";

const Header = () => {
    const [categories, setCategories] = useState<CategoriesT[] | null>(null);

    useEffect(() => {
        instance()
            .get("/category/search")
            .then(res => {
                setCategories(res.data.data.categories);
            })
            .catch(err => {
                console.error("Error fetching categories:", err);
            });
    }, []);

    return (
        <header>
            <div>
                {/* Top Bar */}
                <div className="top bg-[#EBEFF3] py-[5px]">
                    <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                        <ul className="flex items-center space-x-5">
                            <li>
                                <Link
                                    href=""
                                    className="flex items-center space-x-2 text-[#545D6A]">
                                    <BiMap className="w-[16px] h-[16px]" />
                                    Toshkent
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="text-[#545D6A]">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="text-[#545D6A]">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="text-[#545D6A]">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                        <Link
                            href="tel:+998880083414"
                            className="text-[#545D6A]">
                            +998 88 008 34 14
                        </Link>
                    </div>
                </div>

                {/* Main Header */}
                <Container>
                    <div className="main flex items-center justify-between py-[10px]">
                        <div className="logo">
                            <Link href="/" className="flex items-center">
                                <Image
                                    priority
                                    src="/logo2.svg"
                                    alt="logo"
                                    width={48}
                                    height={48}
                                />
                                <Image
                                    priority
                                    className="-ml-[12px]"
                                    src="/logo.svg"
                                    alt="logo"
                                    height={42}
                                    width={103}
                                />
                            </Link>
                        </div>
                        <div className="flex-grow max-w-[600px] ml-8">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="What are you looking for?"
                                    className="w-full py-3 pl-12 pr-14 text-sm rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none bg-[#EBEFF3]"
                                />
                                <BiSearch
                                    className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 w-5 h-5"
                                    aria-hidden="true"
                                />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-md">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="footer">
                        {categories ? (
                            <ul className="flex items-center justify-between">
                                {categories.map((category, index) => (
                                    <Categories
                                        category={category}
                                        key={index}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <div>Loading categories...</div>
                        )}
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Header;
