import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface BlogInput {
    "authorId": string;
    "title": string;
    "content": string;
    "date": Date;
    "id": string;
    "author": {
        "name": string;
        "id": string
    }
}

export const useBlog = ({ id }: { id: string }) => {

    const [loading, setloading] = useState(true);
    const [blog, setBlog] = useState<BlogInput>({
        title: "",
        content: "",
        date: new Date(),
        id: "",
        authorId: "",
        author: {
            name: "",
            id: ""
        },
    });

    useEffect(() => {


        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setloading(false);
                setBlog(response.data.blog)
            })
    }, [id]);

    return {
        loading, blog
    }
}
export const useBlogs = () => {

    const [loading, setloading] = useState(true);
    const [blogs, setBlogs] = useState<BlogInput[]>([]);

    useEffect(() => {


        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {


                setBlogs(response.data.blogs)
                setloading(false);
            })
    }, [])
    return {
        loading, blogs
    }
}