import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { Button } from "../components/Button"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return (<>

        <div>
            
            <AppBar label="" />
            <div className=" flex lg:flex-row flex-col  justify-center items-center m-3 p-2  ">
                <div className="max-w-screen-lg w-full   items-center m-2 " >
                    <div className=" max-w-screen-lg p-2  w-full items-center">
                        <input className=" w-full h-full outline-none text-4xl p-2" onChange={(e) => {
                            setTitle(e.target.value);
                        }} placeholder="Title" />
                    </div>
                    <div className="max-w-screen-lg p-3 w-full h-full ">

                        <textarea id="message" onChange={(e) => {
                            setDescription(e.target.value);
                        }} rows={4} className="block p-2.5 w-full h-screen text-gray-900 bg-gray-50 rounded-lg outline-none text-lg" placeholder="Write your thoughts here..." />
                    </div>
                </div>
                <div className="flex self-start m-4">
                    <Button label="Publish Blog" handleclick={async () => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title: title,
                            content: description,
                            date : new Date(),
                            authorId: localStorage.getItem("id")
                        }, {
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        });
                        navigate(`/blog/${response.data.id}`);

                    }} />
                </div>

            </div>

        </div>
    </>)
}