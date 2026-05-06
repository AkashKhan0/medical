"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
          { cache: "no-store" }
        );

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Find product
  const product = products.find((p) => String(p._id) === String(id));

  if (loading) {
    return <div className="p-5">Loading...</div>;
  }

  if (!product) {
    return <div className="p-5 text-red-500">Product not found ❌</div>;
  }

  const images = product.images || [];

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* MAIN IMAGE */}
      <div className="w-full bg-white rounded shadow-lg">
        <img
          src={images?.[0]?.url || "/images/placeholder.jpg"}
          className="w-full max-h-[350px] object-contain cursor-pointer"
          alt={product.name}
          onClick={() => setSelectedIndex(0)}
        />
      </div>

      {/* OTHER IMAGES */}
      <div className="mt-3 flex justify-start md:justify-center gap-5 overflow-x-scroll no-scrollbar w-full">
        {images.slice(1).map((img, index) => (
          <img
            key={index}
            src={img.url || "/images/placeholder.jpg"}
            className="w-fit h-[130px] cursor-pointer bg-white shadow rounded object-contain"
            alt={product.name}
            onClick={() => setSelectedIndex(index + 1)}
          />
        ))}
      </div>

      {/* PRODUCT INFO */}
      <h1 className="text-2xl font-bold mt-5">{product.name}</h1>

      {product.title && (
        <h2 className="text-lg text-gray-600 mt-1">{product.title}</h2>
      )}

      {product.description && (
        <p className="mt-3 text-gray-600">{product.description}</p>
      )}

      {/* ================= MODAL ================= */}
      {selectedIndex !== null && images.length > 0 && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999999]">
          
          {/* CLOSE */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          {/* PREV */}
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={() =>
              setSelectedIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
          >
            ◀
          </button>

          {/* IMAGE */}
          <img
            src={images[selectedIndex]?.url || "/images/placeholder.jpg"}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            alt="Preview"
          />

          {/* NEXT */}
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={() =>
              setSelectedIndex((prev) => (prev + 1) % images.length)
            }
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}