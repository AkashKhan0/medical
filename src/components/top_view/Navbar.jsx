"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { RiShieldStarLine } from "react-icons/ri";
import {
  GiMedicalThermometer,
  GiScalpel,
  GiScalpelStrike,
} from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import {
  FaHandHoldingMedical,
  FaHome,
  FaSearch,
  FaUserTie,
} from "react-icons/fa";
import { MdCall, MdMedicalServices } from "react-icons/md";
import { HiHome } from "react-icons/hi2";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
        );

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  // FILTER PRODUCTS
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { icon: <FaHome />, label: "Home", href: "/" },
    {
      icon: <GiScalpelStrike />,
      label: "Surgical",
      href: "/category/Surgical",
    },
    {
      icon: <MdMedicalServices />,
      label: "Medical",
      href: "/category/Medical",
    },
    { icon: <MdCall />, label: "Contact", href: "/contact" },
    { icon: <FaUserTie />, label: "About", href: "/about" },
  ];

  return (
    <>
      <div
        className={`w-full h-fit z-[99999] transition-all duration-300 pb-3 md:pb-0 ${
          isSticky
            ? "fixed top-0 left-0 shadow-md animate-slideDown bg-[#d4d4d4]"
            : "relative bg-transparent shadow-none"
        }`}
      >
        <div
          className={`w-full hidden md:flex items-center justify-center p-1 bg-[#63202D]`}
        >
          <div className="fix_w flex items-center justify-evenly">
            <div className="w-fit uni gap-2">
              <RiShieldStarLine className="text-base text-[#ffffff]" />
              <p className="text-base text-[#ffffff]">
                Trusted Quality, Precision Care.
              </p>
            </div>
            <div className="w-fit uni gap-2">
              <GiMedicalThermometer className="text-base text-[#ffffff]" />
              <p className="text-base text-[#ffffff]">
                Surgical & Medical Instruments You Can Rely On.
              </p>
            </div>
            <div className="w-fit uni gap-2">
              <TbTruckDelivery className="text-base text-[#ffffff]" />
              <p className="text-base text-[#ffffff]">
                Fast Delivery Across Bangladesh.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`w-full h-fit uni px-5 relative transition-all duration-300`}
        >
          <div className="fix_w flex flex-col sm:flex-col md:flex-row items-center justify-between gap-1 sm:gap-1 md:gap-10">
            {/* Navbar logo name */}
            <div className="w-full sm:w-full md:w-fit min-w-fit h-fit gap-0 flex items-center justify-center sm:justify-center md:justify-start">
              <Link
                href="/"
                className="text-center flex flex-col items-center md:items-start"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#A21410]">
                  A Plus Mart BD
                </h1>
                <div className="w-fit uni gap-3">
                  <div className="w-[40px] h-[2.3px] bg-[#A21410] block sm:block md:hidden"></div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#A21410]">
                    Medical
                  </h3>
                  <div className="w-[40px] h-[2.3px] bg-[#A21410]"></div>
                </div>
              </Link>
            </div>

            {/* items */}
            <div className="w-full h-fit uni gap-5">
              {/* menu items */}
              <div className="w-full">
                <div className="w-full flex items-center justify-center sm:justify-center md:justify-end gap-2">
                  <Link href="/" className="hidden sm:hidden md:block">
                    <div className="bg-[#851e1b] text-[#ffffff] w-[35px] h-[32px] rounded-full uni gap-1">
                      <HiHome className="text-xl" />
                    </div>
                  </Link>
                  <Link
                    href="/category/Surgical"
                    className="hidden sm:hidden md:block"
                  >
                    <div className="menu_btn uni gap-1">
                      <GiScalpel className="text-sm" />
                      <span className="mb-0.5">Surgical</span>
                    </div>
                  </Link>
                  <Link
                    href="/category/Medical"
                    className="hidden sm:hidden md:block"
                  >
                    <div className="menu_btn uni gap-1">
                      <FaHandHoldingMedical className="text-sm" />
                      <span className="mb-0.5">Medical</span>
                    </div>
                  </Link>
                  {/* search bar */}
                  <div className="relative w-full max-w-[450px]">
                    <div className="flex items-center bg-[#fdfdfd] rounded">
                      <input
                        type="search"
                        name="search"
                        placeholder="Search here..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-2 py-1 rounded w-full text-lg outline-none"
                      />

                      <FaSearch className="text-lg px-2 w-fit cursor-pointer min-w-[22px]" />
                    </div>

                    {/* SEARCH SUGGESTIONS */}
                    {filteredProducts.length > 0 && (
                      <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-50 max-h-[300px] overflow-y-auto border">
                        {filteredProducts.map((product) => (
                          <Link
                            key={product._id}
                            href={`/products/${product._id}`}
                            onClick={() => {
                              setSearch("");
                              setFilteredProducts([]);
                            }}
                            className="block px-3 py-2 hover:bg-gray-100 border-b"
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link href="/about" className="hidden sm:hidden md:block">
                    <div className="menu_btn uni gap-1">
                      <FaUserTie className="text-sm" />
                      <span className="mb-0.5">About</span>
                    </div>
                  </Link>
                  <Link href="/contact" className="hidden sm:hidden md:block">
                    <div className="menu_btn uni gap-1">
                      <MdCall className="text-sm" />
                      <span className="mb-0.5">Contact</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view navbar menu */}
      <div className="w-full z-[999999] h-[60px] fixed left-0 bottom-0 flex items-center justify-center md:hidden">
        <div className="w-[95%] h-full bg-[#472428] rounded-full flex items-center justify-evenly gap-2">
          {items.map((item, index) => {
            return (
              <Link href={item.href} key={index}>
                <div className="flex flex-col items-center justify-center text-white transition-all duration-500">
                  {/* Icon */}
                  <div
                    className={`transition-all duration-500 text-xl
                `}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <h3
                    className={`uppercase font-semibold
                    text-[10px]
                `}
                  >
                    {item.label}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
