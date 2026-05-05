import Link from "next/link";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white flex flex-col justify-between">
      
      {/* IMAGE */}
      <Link href={`/products/${product._id}`}>
        <div className="h-[240px] w-full overflow-hidden">
          <img
            src={product.images?.[0]?.url || "/images/placeholder.jpg"}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* NAME */}
        <div className="p-2">
          <h2 className="text-sm font-semibold text-center line-clamp-2">
            {product.name}
          </h2>
        </div>
      </Link>

      {/* BUTTONS */}
      <div className="flex border-t">        
        {/* MESSENGER */}
        <a
          href="https://m.me/aplusmartbdmedicalsurgical"
          target="_blank"
          className="w-1/2 flex items-center justify-center gap-2 py-2 text-blue-600 hover:bg-blue-50"
        >
          <FaFacebookMessenger />
          <span className="text-sm font-medium">Messenger</span>
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/8801853838891"
          target="_blank"
          className="w-1/2 flex items-center justify-center gap-2 py-2 text-green-600 hover:bg-green-50 border-l"
        >
          <FaWhatsapp />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}