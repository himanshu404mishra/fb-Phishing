import { IoGift } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router";

export default function Card() {

  const navigate= useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg border border-blue-600 space-y-3">
        <h2 className="text-2xl text-blue-600 font-bold">Official Facebook iPhone Giveaway!</h2>
        <p className="text-sm text-gray-500 w-[70%] text-center">Join now for a chance to win the latest iPhone, courtesy of Facebook.</p>
        <div className="h-75 w-full overflow-hidden rounded-lg cursor-pointer">
            <img className="hover:scale-95 transition" src={`https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.medium.jpg`} alt="iphone16 photo" />
        </div>
        <button onClick={()=>navigate("/spinthewheel")} className="bg-blue-600 px-5 py-2 rounded-lg text-white font-semibold w-full flex items-center justify-center gap-2 text-lg hover:bg-blue-700 cursor-pointer transition active:scale-105"><IoGift /> Enter Giveaway</button>
        <p className="text-green-600 flex items-center gap-2"><MdVerified /> Verified by Facebook</p>
    </div>
  )
}
