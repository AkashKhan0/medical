import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-fit uni px-5 relative">
        <div className="fix_w uni_col pb-5">
          {/* Navbar logo name */}
          <div className="w-full sm:w-[85%] md:w-[70%] h-fit uni_col gap-0 ">
            <Link href="/"><h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              A Plus Mart BD
            </h1></Link>
          </div>
          <div className="w-full sm:w-[85%] md:w-[70%] h-fit uni gap-5">
            <div className="w-full hidden sm:block md:block">
              <div className="w-full flex items-center justify-start gap-3">
                <button className="menu_btn"><Link href="/category/Surgical">Surgical</Link></button>
                <button className="menu_btn"><Link href="/category/Medical">Medical</Link></button>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Medical
            </h3>
            <div className="w-full hidden sm:block md:block">
              <div className="w-full flex items-center justify-end gap-3">
                <button className="menu_btn">About Us</button>
                <button className="menu_btn">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
