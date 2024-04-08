import { Link } from "react-router-dom"
import { InputBox } from "./InputBox"

export const SignUpbox = () => {

    return <>

        <div className=" h-screen flex justify-center flex-col ">
            <div className="flex justify-center text-center">
                <div className="  ">
                    <div className="text-3xl font-extrabold ">
                        Create an Account
                    </div>
                    <div className="text-slate-400">
                        Already have an account ?
                        <Link  className="underline pl-2" to={'/signin'}>
                            Login
                        </Link>
                    </div>
                    <InputBox label="Username" placeholder="Enter name here" onChange={ (e)=>{

                    }}/>
                    <InputBox label="Email" placeholder="Enter email here" onChange={ (e)=>{

                    }}/>
                    <InputBox label="Password" placeholder="Enter password here" onChange={ (e)=>{

                    }}/>
                </div>
                
            </div>
        </div>

    </>
}