import { useNavigate } from "react-router-dom";
// import { InputBox } from "./InputBox";
// import { Button } from "./Button";
import { useState } from "react";
// import { signIninput } from "@sanket-777/medium-blog-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "./Spinner";
// import jwtDecode from 'jwt-decode';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

export const SignInbox = () => {
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);



  async function handleGoogleAuth(credentialResponse: CredentialResponse) {
    try {


      const response = await axios.post(`${BACKEND_URL}/api/v1/user/auth/google`, {
        credential: credentialResponse.credential,
      });
      toast.success("Login Successful!");

      const jwt = "Bearer " + response.data.jwt;
      console.log(response);

      localStorage.setItem("token", jwt);
      localStorage.setItem("id", response.data.id);
      setTimeout(() => {
        setLoading(false);
        navigate("/blogs");
      }, 1000);
    } catch (error) {
      console.error('Error during Google authentication:', error);
      toast.error("Failed to save user data.");
    }
  }

  return (
    <>
      {loading && <Spinner />}
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md bg-white shadow-2xl p-8 rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
            <div className="flex justify-center mb-2">
              <div className="w-16 h-1 bg-gray-800 mr-2"></div>
              <div className="w-16 h-1 bg-gray-400 ml-2"></div>
            </div>
            <p className="text-gray-600">
              Sign in to your account and start exploring.
            </p>
          </div>

          <div className="flex justify-center">
            <GoogleLogin
              shape="pill"

              onSuccess={credentialResponse => {
                setLoading(true);
                handleGoogleAuth(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
                toast.error("Login Failure due to some reason");
              }}
            />
          </div>
        </div>
        <ToastContainer />
      </div>

    </>
  );
};
