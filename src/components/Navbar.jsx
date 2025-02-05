import { FaFacebook } from "react-icons/fa";
export default function Navbar() {
return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
            <div className="flex items-center space-x-4">
                    <div><FaFacebook className="text-3xl" /></div>
                    <div>
                            <h1 className="text-xl font-bold">Facebook Official Giveaway</h1>
                    </div>
            </div>
            <div className="">
                    Sponsored by Facebook
            </div>
    </nav>
)
}
