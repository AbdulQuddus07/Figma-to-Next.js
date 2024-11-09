import Image from "next/image";
import iphone14 from "../../../../public/Iphone 14 pro.png";
import camera from "../../../../public/camera.png";
import watch from "../../../../public/watch.png";
import headphone from "../../../../public/headphones.png";
import handwatch from "../../../../public/handwatch.png";
import samsung from "../../../../public/samsung-mobile.png";
import earbud from "../../../../public/earbuds.png";
import tab from "../../../../public/tab.png";
import { FaRegHeart } from "react-icons/fa";

export default function Products() {
    return (
        <div className="flex gap-5 flex-wrap justify-center">
            
        <div className = "Item p-2 rounded-sm shadow-lg bg-bgproduct w-72 h-80">
            <FaRegHeart size={20}  className="ml-60 text-heart" />
            <div className="Images flex justify-center">
            <Image src={iphone14} alt="img" width={150} height={150} className="h-40 object-contain border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-sm">Apple iphone 14 pro 512GB Gold</h1>
            </div>
            <div className = "Price px-3 text-center font-bold text-lg">
                <h2>$900</h2>
            </div>
            <button className = "w-40 mt-2 py-2 bg-slate-800 text-white rounded hover:bg-slate-500 ml-16">Shop Now</button>
        </div>


        
        <div className = "Item p-2 rounded-sm shadow-lg bg-bgproduct w-72 h-80">
            <FaRegHeart size={20}  className="ml-60 text-heart" />
            <div className="Images flex justify-center">
            <Image src={camera} alt="img" width={150} height={150} className="h-40 object-contain border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-sm">Apple iphone 14 pro 512GB Gold</h1>
            </div>
            <div className = "Price px-3 text-center font-bold text-lg">
                <h2>$900</h2>
            </div>
            <button className = "w-40 mt-2 py-2 bg-slate-800 text-white rounded hover:bg-slate-500 ml-16">Shop Now</button>
        </div>
        <div className = "Item p-2 rounded-sm shadow-lg bg-bgproduct w-72 h-80">
            <FaRegHeart size={20}  className="ml-60 text-heart" />
            <div className="Images flex justify-center">
            <Image src={watch} alt="img" width={150} height={150} className="h-40 object-contain border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-sm">Apple iphone 14 pro 512GB Gold</h1>
            </div>
            <div className = "Price px-3 text-center font-bold text-lg">
                <h2>$900</h2>
            </div>
            <button className = "w-40 mt-2 py-2 bg-slate-800 text-white rounded hover:bg-slate-500 ml-16">Shop Now</button>
        </div>
        <div className = "Item p-2 rounded-sm shadow-lg bg-bgproduct w-72 h-80">
            <FaRegHeart size={20}  className="ml-60 text-heart" />
            <div className="Images flex justify-center">
            <Image src={headphone} alt="img" width={150} height={150} className="h-40 object-contain border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-sm">Apple iphone 14 pro 512GB Gold</h1>
            </div>
            <div className = "Price px-3 text-center font-bold text-lg">
                <h2>$900</h2>
            </div>
            <button className = "w-40 mt-2 py-2 bg-slate-800 text-white rounded hover:bg-slate-500 ml-16">Shop Now</button>
        </div>
        <div className = "Item p-2 rounded-sm shadow-lg bg-bgproduct w-72 h-80">
            <FaRegHeart size={20}  className="ml-60 text-heart" />
            <div className="Images flex justify-center">
            <Image src={handwatch} alt="img" width={150} height={150} className="h-40 object-contain border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-sm">Apple iphone 14 pro 512GB Gold</h1>
            </div>
            <div className = "Price px-3 text-center font-bold text-lg">
                <h2>$900</h2>
            </div>
            <button className = "w-40 mt-2 py-2 bg-slate-800 text-white rounded hover:bg-slate-500 ml-16">Shop Now</button>
        </div>
        <div className = "Item p-2 rounded-sm shadow-lg bg-bgproduct w-72 h-80">
            <FaRegHeart size={20}  className="ml-60 text-heart" />
            <div className="Images flex justify-center">
            <Image src={samsung} alt="img" width={150} height={150} className="h-40 object-contain border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-sm">Apple iphone 14 pro 512GB Gold</h1>
            </div>
            <div className = "Price px-3 text-center font-bold text-lg">
                <h2>$900</h2>
            </div>
            <button className = "w-40 mt-2 py-2 bg-slate-800 text-white rounded hover:bg-slate-500 ml-16">Shop Now</button>
        </div>
        <div className = "Item p-2 rounded-sm shadow-lg bg-bgproduct w-72 h-80">
            <FaRegHeart size={20}  className="ml-60 text-heart" />
            <div className="Images flex justify-center">
            <Image src={earbud} alt="img" width={150} height={150} className="h-40 object-contain border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-sm">Apple iphone 14 pro 512GB Gold</h1>
            </div>
            <div className = "Price px-3 text-center font-bold text-lg">
                <h2>$900</h2>
            </div>
            <button className = "w-40 mt-2 py-2 bg-slate-800 text-white rounded hover:bg-slate-500 ml-16">Shop Now</button>
        </div>
        <div className = "Item p-2 rounded-sm shadow-lg bg-bgproduct w-72 h-80">
            <FaRegHeart size={20}  className="ml-60 text-heart" />
            <div className="Images flex justify-center">
            <Image src={tab} alt="img" width={150} height={150} className="h-40 object-contain border-gray-200"/>
            </div>
            <div className = "Product Name px-3 text-center">
                <h1 className="font-medium text-sm">Apple iphone 14 pro 512GB Gold</h1>
            </div>
            <div className = "Price px-3 text-center font-bold text-lg">
                <h2>$900</h2>
            </div>
            <button className = "w-40 mt-2 py-2 bg-slate-800 text-white rounded hover:bg-slate-500 ml-16">Shop Now</button>
        </div>
        </div>
    );
}