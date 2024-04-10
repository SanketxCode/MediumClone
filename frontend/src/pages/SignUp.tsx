import { Quote } from "../components/Quote"
import { SignUpbox } from "../components/SignUpBox"
export const Signup = () => {
    return <>
        <div className="lg:grid grid-cols-2">
            <SignUpbox />
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </>
}