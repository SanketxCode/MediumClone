import { SignInbox } from "../components/SignInBox"
import Lottie from 'react-lottie';
import animationData from '../animations/signinanimation.json';
export const Signin = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return <>
        <div className="lg:grid grid-cols-2 ">
            <div className="hidden lg:block m-auto">
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <SignInbox />
        </div>

    </>
}