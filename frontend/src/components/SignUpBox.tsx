import { Link, useNavigate } from "react-router-dom"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { useState } from "react"
import { signUpinput } from "@sanket-777/medium-blog-common"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const SignUpbox = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const [postInputs, setPostinputs] = useState<signUpinput>({
        username: "",
        password: "",
        name: ""
    })
    const [c_pass, setC_pass] = useState("");

    const handleclick = () => {
        console.log(postInputs.password + " " + c_pass);

        if (postInputs.password === c_pass) {
            setPasswordsMatch(true)
            console.log("Passwords match");
            sendRequest();
        }
        else {
            setPasswordsMatch(false)
            console.log("Passwords not match");
        }

    }

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt)
            alert(response.data.message)
            navigate("/signin");
        }
        catch (error) {
            console.log(error);
        }


    }
    return <>

        <div className=" h-screen flex justify-center flex-col bg-backg items-center">
            <div className="text-4xl font-extrabold font-serif ">
                Welcome to Medium
            </div>
            <div className=" pl-6 pr-6 pb-4 pt-3 mt-2 rounded-lg w-fit	 bg-white shadow-2xl">
                <div className="flex justify-center text-center">
                    <div className="  ">
                        <div className="text-3xl font-extrabold ">
                            Create an Account
                        </div>
                        <div className="text-slate-400">
                            Already have an account ?
                            <Link className="underline pl-2" to={'/signin'}>
                                Login
                            </Link>
                        </div>
                        <InputBox label="Username" type="text" placeholder="Enter name here" onChange={(e) => {
                            setPostinputs(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} />
                        <InputBox label="Email" type="text" placeholder="Enter email here" onChange={(e) => {
                            setPostinputs(c => ({
                                ...c,
                                username: e.target.value
                            }))
                        }} />

                        <InputBox label="Password" type={showPassword ? "text" : "password"} placeholder="Enter password here" onChange={(e) => {
                            setC_pass(e.target.value);
                        }} />
                        <InputBox label="Confirm Password" type={showPassword ? "text" : "password"} placeholder="Enter password again" onChange={(e) => {

                            setPostinputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />
                        {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match!</p>}

                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" onChange={(e) => setShowPassword(e.target.checked)} type="checkbox" value="" className="mt-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="mt-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password </label>
                        </div>

                        <Button label="Sign Up" handleclick={handleclick} />
                    </div>
                </div>

            </div>
        </div>

    </>
}