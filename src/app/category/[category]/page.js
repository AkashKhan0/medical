// import products from "@/components/product_part/item";
import ProductCard from "@/components/product_part/ProductCard";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  let products = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
      {
        cache: "no-store",
      }
    );

    products = await res.json();
  } catch (error) {
    console.log("Fetch error:", error);
  }

  // category filter (case insensitive)
  const filteredProducts = products.filter(
    (item) =>
      item.category?.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="w-full uni px-5 my-10 relative h-fit min-h-[400px]">
    <div className="w-full fix_w">
      <h1 className="text-2xl font-bold mb-6">{category} Products</h1>

      {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found 😢</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        )}
    </div>
    </div>
  );
}