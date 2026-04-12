import products from "@/components/product_part/item";
import ProductCard from "@/components/product_part/ProductCard";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="w-full uni px-5 my-10 relative">
    <div className="w-full fix_w">
      <h1 className="text-2xl font-bold mb-6">{category} Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
}