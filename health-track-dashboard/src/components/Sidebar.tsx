import { FiLogOut } from "react-icons/fi";
import { Button } from "./Button";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import Loader from "./Loader";


export default function Sidebar() {
    const {userId} = useParams()
    console.log("params", userId)
    const links: { label: string, href: string }[] = [
        {
            label: "overview", href: '/dashboard'
        },
        {
            label: "users (table)", href: "/dashboard/users"
        },
        {
            label: "Analytics", href: userId ? `/dashboard/users/${userId}` : "users"
        }
    ];

    const location = useLocation();
    const navigate = useNavigate();
    const [loggingOut, setLoggingOut] = useState(false);

    // implement actual logout logic
    const logout = () => {
        setLoggingOut(true);
        setTimeout(() => {
            toast.success("You have been logged out successfuly!");
            navigate("/login");
        }, 1400)
    }

    return (
        <div className="h-[92vh] w-[15vw] shadow-md fixed p-4 flex flex-col justify-between">
            <div className="space-y-2">
                {
                    links.map(link => (
                        <li className="list-none" key={link.href}>
                            <Link
                                to={link.href}
                                className={`block py-2.5 px-4 rounded transition duration-200 ${location.pathname == link.href ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-200'}`}>
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </div>
            <Button disabled={loggingOut} onClick={logout} className="mb-8 rounded-md space-x-4">
                {loggingOut ?
                    <Loader /> :
                    <>
                        <span>logout</span>
                        <FiLogOut className="text-lg" />
                    </>}
            </Button>
        </div>
    )
}

