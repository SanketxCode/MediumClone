import { Link } from "react-router-dom"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { useState } from "react"

export const SignUpbox = () => {

    const [showPassword, setShowPassword] = useState(false);
    return <>

        <div className=" h-screen flex justify-center flex-col bg-backg ">
            <div className=" p-6  m-3 rounded-md  m-auto bg-white shadow-2xl">
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

                        }} />
                        <InputBox label="Email" type="text" placeholder="Enter email here" onChange={(e) => {

                        }} />

                        <InputBox label="Password" type={showPassword ? "text" : "password"} placeholder="Enter password here" onChange={(e) => {

                        }} />
                        <InputBox label="Confirm Password" type={showPassword ? "text" : "password"} placeholder="Enter password again" onChange={(e) => {

                        }} />

                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" onChange={(e) => setShowPassword(e.target.checked)} type="checkbox" value="" className="mt-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="mt-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show Password </label>
                        </div>

                        <Button label="Sign Up" />
                    </div>
                </div>

            </div>
        </div>

    </>
}