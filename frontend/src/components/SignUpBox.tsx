import { Link, useNavigate } from "react-router-dom";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { useState } from "react";
import { signUpinput } from "@sanket-777/medium-blog-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "./Spinner"

export const SignUpbox = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [loading, setloading] = useState(false);

    const [postInputs, setPostinputs] = useState<signUpinput>({
        username: "",
        password: "",
        name: ""
    });
    const [c_pass, setC_pass] = useState("");

    const handleclick = () => {
        if (postInputs.password === c_pass) {
            setPasswordsMatch(true);
            setloading(true);
            sendRequest();
        } else {
            setPasswordsMatch(false);
        }
    };

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
            const jwt = "Bearer " + response.data.jwt;
            localStorage.setItem("token", jwt);
            toast.success('Registration successful!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                setloading(false)
                navigate("/signin");
            }, 3000);
            
        } catch (error) {
            console.log(error);
            setloading(false)
            toast.error('Registration Failed')

        }
    }

    return (<>
        {loading && <Spinner />}
        <div className="h-screen flex justify-center items-center  ">
            <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-6">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                        Join Our Community
                    </h2>

                    <div className="flex justify-center mb-2">
                        <div className="w-16 h-1 bg-gray-800 mr-2"></div>
                        <div className="w-16 h-1 bg-gray-400 ml-2"></div>
                    </div>

                    <div className="text-lg text-gray-600">
                        Create an account and unlock exclusive features.
                    </div>
                </div>

                <p className="text-gray-600 text-center mb-4">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-gray-800 underline font-bold">
                        Login
                    </Link>
                </p>

                <InputBox
                    label="Username"
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setPostinputs({ ...postInputs, name: e.target.value })}
                />
                <InputBox
                    label="Email"
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setPostinputs({ ...postInputs, username: e.target.value })}
                />

                <InputBox
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    onChange={(e) => setC_pass(e.target.value)}
                />
                <InputBox
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    onChange={(e) => setPostinputs({ ...postInputs, password: e.target.value })}
                />

                {!passwordsMatch && (
                    <p className="text-red-500 text-sm mb-4">Passwords do not match!</p>
                )}

                <div className="flex items-center mb-4 mt-4">
                    <input
                        id="showPassword"
                        type="checkbox"
                        className="mr-2 h-4 w-4 text-gray-800 focus:ring-gray-800 border-gray-300 rounded"
                        onChange={(e) => setShowPassword(e.target.checked)}
                    />
                    <label htmlFor="showPassword" className="text-sm text-gray-700">
                        Show Password
                    </label>
                </div>

                <div className="flex justify-center">
                    <Button label="Sign Up" handleclick={handleclick} />
                </div>

            </div>
        <ToastContainer/>
        </div>
    </>);
}
