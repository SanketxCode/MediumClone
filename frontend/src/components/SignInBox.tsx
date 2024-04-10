import { Link, useNavigate } from "react-router-dom"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { useState } from "react"
import { signIninput } from "@sanket-777/medium-blog-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
export const SignInbox = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [postInputs, setPostinputs] = useState<signIninput>({
        username: "",
        password: ""
    })
    async function handleclick() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt)
            alert(response.data)
            navigate("/blog");
        }
        catch (error) {
            console.log(error);

        }
    }
    return <>
        <div className=" h-screen flex justify-center flex-col bg-backg items-center  ">
            <div className="text-4xl font-extrabold text-center font-serif ">
                Welcome Back to Medium
            </div>
            <div className=" px-6 py-4 p mt-4 rounded-lg  bg-white shadow-2xl">
                <div className="flex justify-center text-center">
                    <div className="  ">

                        <div className="text-3xl font-extrabold ">
                            Login
                        </div>
                        <div className="text-slate-400">
                            Don't have an account ?
                            <Link className="underline pl-2" to={'/signup'}>
                                Signup
                            </Link>
                        </div>

                        <InputBox label="Email" type="text" placeholder="Enter email here" onChange={(e) => {
                            setPostinputs(c => ({
                                ...c,
                                username: e.target.value
                            }))
                        }} />

                        <InputBox label="Password" type={showPassword ? "text" : "password"} placeholder="Enter password here" onChange={(e) => {
                            setPostinputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />

                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" onChange={(e) => setShowPassword(e.target.checked)} type="checkbox" value="" className="mt-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="mt-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password </label>
                        </div>

                        <Button label="Sign In" handleclick={handleclick} />
                    </div>
                </div>

            </div>
        </div>

    </>
}