"use client";
import products from "./item";
import ProductCard from "./ProductCard";

import { useEffect, useRef, useState } from "react";

export default function Showproducts() {
  const [page, setPage] = useState(0);
  const perPage = 20;
  const start = page * perPage;
  const end = start + perPage;
  const currentItems = products.slice(start, end);
  const totalPages = Math.ceil(products.length / perPage);
  const sectionRef = useRef(null);
  const sidebarRef = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sidebar = sidebarRef.current;
      if (!section || !sidebar) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sidebarHeight = sidebar.offsetHeight;
      const scrollY = window.scrollY;

      const footerOffset = 150; // footer height

      // START sticking point
      if (scrollY >= sectionTop) {
        // STOP point (footer er age)
        if (
          scrollY + sidebarHeight >=
          sectionTop + sectionHeight - footerOffset
        ) {
          setStyle({
            position: "absolute",
            top: sectionHeight - sidebarHeight - footerOffset + "px",
          });
        } else {
          setStyle({
            position: "fixed",
            top: "0px",
            width: sidebar.parentElement.offsetWidth + "px",
          });
        }
      } else {
        // normal position
        setStyle({
          position: "relative",
          top: "0px",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="w-full uni px-5 my-10 relative">
      <div className="fix_w flex gap-3">
        {/* LEFT */}
        <div className="w-[20%] relative hidden sm:hidden md:block">
          <div
            ref={sidebarRef}
            style={style}
            className="w-full h-fit uni_col gap-3"
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
          <ProductCard key={product.id} product={product} />
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
            ref={sidebarRef}
            style={style}
            className="w-full h-fit uni_col gap-3"
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
