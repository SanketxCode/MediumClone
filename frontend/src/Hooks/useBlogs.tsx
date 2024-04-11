import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface BlogInput {
    "title": string;
    "content": string;
    "id": string;
    "author": {
        "name": string;
    }
}

export const useBlog = ({ id }: { id: string }) => {

    const [loading, setloading] = useState(true);
    const [blog, setBlog] = useState<BlogInput>();

    useEffect(() => {


        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Data Has been recieved !");
                console.log(response.data + "single blog");

                setBlog(response.data.blog)
                setloading(false);
            })
    }, [])
    return {
        loading, blog
    }
}
export const useBlogs = () => {

    const [loading, setloading] = useState(true);
    const [blogs, setBlogs] = useState<BlogInput[]>([]);

    useEffect(() => {

        console.log(localStorage.getItem("token"));

        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Data Has been recieved !");
                console.log(response.data);


                setBlogs(response.data.blogs)
                setloading(false);
            })
    }, [])
    return {
        loading, blogs
    }
}