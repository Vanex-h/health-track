import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export default function Navbar() {
    return (
        <div className="w-full h-[8vh] shadow-md fixed top-0 z-50 left-0 bg-white flex items-center justify-between px-6">
            <Link to={'/dashboard'}>
                <Logo />
            </Link>
            <div className="flex items-center gap-2">
                <div className="rounded-full p-2 capitalize text-lg font-medium text-white bg-blue-500">
                    VA
                </div>
                <div className="text-gray-700">
                    <p>Vanessa Hirwa</p>
                    <p className="text-sm">vanessahirwa5@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
