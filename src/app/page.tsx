import Image from "next/image";
import Header from "./components/header/page";
import banner from "../../public/baner.png";
import Products from "./components/products/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Image src={banner} alt="/baner.png" />
        <button className="relative bottom-52 left-36  border rounded w-32 sm:w-44 text-sm p-3 text-white hover:bg-heart mt-4">
          Shop Now
        </button>
      </div>
      <div>
        <div className="flex gap-8 mt-9 mb-4 ml-16">
          <p className="text-black underline font-semibold text-sm font-sans">
            New Arrival
          </p>
          <p className="text-par text-sm  font-semibold font-sans">
            Best Seller
          </p>
          <p className="text-par text-sm  font-semibold font-sans">
            Featured Products
          </p>
        </div>
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Footer/>
      </div>

    </>
  );
}
