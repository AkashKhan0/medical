export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-5">Failed to load products ❌</div>;
  }

  const products = await res.json();

  const product = products.find((p) => String(p._id) === String(id));

  if (!product) {
    return <div className="p-5 text-red-500">Product not found ❌</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* IMAGE */}
      <img
        src={product.images?.[0]?.url || "/images/placeholder.jpg"}
        className="w-full h-[350px] object-cover rounded"
        alt={product.name}
      />

      {/* NAME */}
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>

      {/* TITLE */}
      {product.title && (
        <h2 className="text-lg font-semibold mt-2 text-gray-700">
          {product.title}
        </h2>
      )}

      {/* DESCRIPTION */}
      {product.description && (
        <p className="text-gray-600 mt-3">{product.description}</p>
      )}
    </div>
  );
}
