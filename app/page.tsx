"use client";
import { useEffect, useState } from "react";
import Container from "./utils";
import { instance } from "./hook/instance";
import { ProductT } from "./types";
import ProductCard from "./components/productCard/ProductCard";

export default function Home() {
    const [products, setProducts] = useState<ProductT[] | null>(null);
    useEffect(() => {
        instance()
            .get("/products/search")
            .then(res => {
                setProducts(res.data.data.products);
            });
    }, []);

    return (
        <section className="pt-[107px]">
            <Container>
                <div className="">
                    <h2 className="font-[700] leading-[41px] text-[32px]">
                        Most popular product
                    </h2>
                    <div className="flex gap-[55px] overflow-x-auto">
                        {products &&
                            products.map((product: ProductT) => {
                                return (
                                    <ProductCard
                                        product={product}
                                        key={product.id}
                                    />
                                );
                            })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
