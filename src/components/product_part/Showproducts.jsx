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

  const handlePageChange = (newPage) => {
    setPage(newPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 🔥 FETCH DATA FROM BACKEND
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
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
    <div className="w-full uni px-5 my-10 relative z-10">
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
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {/* Prev Button */}
            <button
              disabled={page === 0}
              onClick={() => handlePageChange(page - 1)}
              className="px-4 py-1 rounded-full border border-black text-[#000000] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#63202D] hover:text-white transition"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {(() => {
              const pages = [];

              // Total page কম হলে সব show করবে
              if (totalPages <= 4) {
                for (let i = 0; i < totalPages; i++) {
                  pages.push(i);
                }
              } else {
                // প্রথম 2 টা page
                pages.push(0);
                pages.push(1);

                // dots
                if (page > 2 && page < totalPages - 3) {
                  pages.push("start-dots");

                  pages.push(page - 1);
                  pages.push(page);

                  pages.push("end-dots");
                } else {
                  pages.push("dots");
                }

                // শেষ 2 টা page
                pages.push(totalPages - 2);
                pages.push(totalPages - 1);
              }

              return pages.map((item, index) => {
                // Dots
                if (typeof item === "string") {
                  return (
                    <span
                      key={index}
                      className="w-8 h-8 flex items-center justify-center text-gray-500"
                    >
                      ...
                    </span>
                  );
                }

                // Page Button
                return (
                  <button
                    key={index}
                    onClick={() => handlePageChange(item)}
                    className={`w-8 h-8 uni rounded-full border transition font-medium
            ${
              page === item
                ? "bg-[#63202D] text-white border-[#848484]"
                : "bg-white text-black border-gray-300 hover:border-[#63202D] hover:bg-[#63202D] hover:text-[#f9f9f9]"
            }
          `}
                  >
                    {item + 1}
                  </button>
                );
              });
            })()}

            {/* Next Button */}
            <button
              disabled={page === totalPages - 1}
              onClick={() => handlePageChange(page + 1)}
              className="px-4 py-1 rounded-full border border-black text-[#000000] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#63202D] hover:text-white transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[20%] relative hidden sm:hidden md:block">
          <div className="w-full h-fit uni_col gap-3 sticky top-[80px]">
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
