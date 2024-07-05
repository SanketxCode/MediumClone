import { SignUpbox } from "../components/SignUpBox";
import Lottie from 'react-lottie';
import animationData from '../animations/signupanimation.json';

export const Signup = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
    <div className="lg:grid grid-cols-2 ">
                <SignUpbox />
                <div className="hidden lg:block m-auto">
                    <Lottie options={defaultOptions} height={400} width={400} />
                </div>
            </div>
        </>
    );
};
