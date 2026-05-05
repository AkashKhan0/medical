"use client";
// import products from "./item";
import ProductCard from "./ProductCard";

import { useState, useEffect } from "react";

export default function Showproducts() {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const perPage = 20;
  const start = page * perPage;
  const end = start + perPage;
  const currentItems = products.slice(start, end);
  const totalPages = Math.ceil(products.length / perPage);

   // 🔥 FETCH DATA FROM BACKEND
 useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full uni px-5 my-10 relative z-10"
    >
      <div className="fix_w flex gap-3">
        {/* LEFT */}
        <div className="w-[20%] relative hidden sm:hidden md:block">
          <div
            // ref={sidebarRef}
            // style={style}
            className="w-full h-fit uni_col gap-3 sticky top-[80px]"
          >
            <div className="w-full h-auto">
              <img
                src="/images/ads1.jpg"
                alt="ads"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-auto">
              <img
                src="/images/ads2.png"
                alt="ads"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="w-full sm:w-full md:w-[60%] h-fit min-h-[900px]">
          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
            {currentItems.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* PAGINATION BUTTONS */}
          <div className="flex gap-3 justify-center mt-5">
            <button
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-2 border disabled:opacity-50"
            >
              Prev
            </button>

            <span className="px-4 py-2">
              {page + 1} / {totalPages}
            </span>

            <button
              disabled={page === totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[20%] relative hidden sm:hidden md:block">
          <div
            className="w-full h-fit uni_col gap-3 sticky top-[80px]"
          >
            <div className="w-full h-auto">
              <img
                src="/images/ads3.jpg"
                alt="ads"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-auto">
              <img
                src="/images/ads4.jpg"
                alt="ads"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
