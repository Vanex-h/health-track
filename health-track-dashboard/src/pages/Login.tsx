import { Button } from '../components/Button'
import { TextField } from '../components/Fields'
import Loader from '../components/Loader'
import { Logo } from '../components/Logo'
import backgroundImage from '../images/background-auth.jpg'
import { isValidEmail, isValidPassword } from '../utils/validation'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
// navigate
import {
    Link,
    useNavigate
} from "react-router-dom"
export default function Login() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidEmail(formData.email) && isValidPassword(formData.password)) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                toast.success("Logged in successfully");
                navigate("/dashboard");
            }, 1200);
        }
    }
    return (
        <>
            <div className="relative flex min-h-screen justify-center md:px-12 lg:px-0">
                <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
                    <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                        <div className="flex flex-col">
                            <Link to="/" aria-label="Home">
                                <Logo className="h-10 w-auto" />
                            </Link>
                            <div className="mt-20 space-y-2">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Sign in to your account
                                </h2>
                                <p className='text-sm text-gray-700'>(you can use any valid email and any valid password)</p>
                            </div>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)} className="mt-10 grid grid-cols-1 gap-y-8">
                            <TextField
                                label="Email address"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                autoComplete="email"
                                required
                            />
                            <TextField
                                label="Password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                type="password"
                                autoComplete="current-password"
                                required
                            />
                            <div>
                                <Button
                                    type="submit"
                                    variant="solid"
                                    color="blue"
                                    className="w-full"
                                >
                                    <span>
                                        {loading ? <Loader /> : "Sign in"}
                                    </span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={backgroundImage}
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}
