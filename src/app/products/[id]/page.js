import products from "@/components/product_part/item";

export default async function ProductDetails({ params }) {
  const { id } = await params; // ✅ IMPORTANT FIX

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return <div className="p-5">Product not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      <img src={product.image} className="w-full h-[350px] object-cover" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>

      {/* DETAILS */}
      <div className="mt-5">
        {product.details && (
          <div className="space-y-4">
            {/* TITLE */}
            {product.details.title && (
              <h2 className="text-xl font-semibold">{product.details.title}</h2>
            )}

            {/* DESCRIPTION */}
            {product.details.description && (
              <p className="text-gray-600">{product.details.description}</p>
            )}

            {/* FEATURES LIST */}
            {product.details.features && (
              <ul className="list-disc pl-5 space-y-1">
                {product.details.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
