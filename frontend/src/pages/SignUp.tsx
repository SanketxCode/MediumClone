import { Quote } from "../components/Quote"
import { SignUpbox } from "../components/SignUpBox"
export const Signup = () => {
    return <>
        <div className="lg:grid grid-cols-2">
            <SignUpbox />
            <div className="visible lg:visible">
            <Quote />
            </div>
        </div>
    </>
}