import { Button } from "../components/Button";
import { FiArrowRight } from "react-icons/fi"
export default function Home() {
    return (
        <div className="bg-white flex justify-center items-center h-screen">
            <div className="w-full h-full max-w-screen-md ">
                <div className="flex flex-col justify-center items-center h-full gap-4">
                    <h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>
                    <p className="text-gray-500 text-center">Welcome to the admin dashboard! This dashboard is a central location for managing your website or application. You can use the dashboard to view and manage users, content, settings, and more.</p>
                    <Button color="blue" variant="solid" className="rounded-md space-x-2" href="/login">
                        <span>
                            Login
                        </span>
                        <FiArrowRight />
                    </Button>
                </div>
            </div>
        </div>

    )
}
