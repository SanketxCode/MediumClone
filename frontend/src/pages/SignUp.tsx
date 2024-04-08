import { Quote } from "../components/Quote"
import { SignUpbox } from "../components/SignUpBox"
export const Signup = () => {
    return <>
        <div className="grid grid-cols-2 ">
            <SignUpbox />
            <div className="invisible lg:visible">
            <Quote />
            </div>
           
        </div>
    </>
}