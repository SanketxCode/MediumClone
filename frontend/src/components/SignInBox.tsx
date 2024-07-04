import { Link, useNavigate } from "react-router-dom";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { useState } from "react";
import { signIninput } from "@sanket-777/medium-blog-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "./Spinner";

export const SignInbox = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [postInputs, setPostInputs] = useState<signIninput>({
    username: "",
    password: "",
  });

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
      const jwt = "Bearer " + response.data.jwt;
      localStorage.setItem("token", jwt);
      localStorage.setItem("id", response.data.id);
      toast.success("Sign-in successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="flex justify-center items-center h-screen ">
        <div className="w-full max-w-md bg-white shadow-2xl p-8 rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <div className="flex justify-center mb-2">
              <div className="w-16 h-1 bg-gray-800 mr-2"></div>
              <div className="w-16 h-1 bg-gray-400 ml-2"></div>
            </div>
            <p className="text-gray-600">
              Sign in to your account and start exploring.
            </p>
          </div>
          <p className="text-gray-600 text-center mb-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-gray-800 underline font-bold">
              Sign up
            </Link>
          </p>
          <div className="bg-white  rounded-lg p-6">
            <InputBox
              label="Email"
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setPostInputs((prevInputs) => ({
                  ...prevInputs,
                  username: e.target.value,
                }))
              }
            />
            <InputBox
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) =>
                setPostInputs((prevInputs) => ({
                  ...prevInputs,
                  password: e.target.value,
                }))
              }
            />
            <div className="flex items-center mb-4 mt-4">
              <input
                id="showPassword"
                type="checkbox"
                className="mr-2 h-4 w-4 text-gray-800 focus:ring-gray-800 border-gray-300 rounded"
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="showPassword" className="text-sm text-gray-700">
                Show Password
              </label>
            </div>
            <div className="flex justify-center">
              <Button label="Sign In" handleclick={handleClick} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};