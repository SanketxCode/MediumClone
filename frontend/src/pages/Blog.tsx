import { useBlog } from "../Hooks/useBlogs"
import { SingleBlog } from "../components/SingleBlog"
import { useParams } from "react-router-dom"
import { Spinner } from "../components/Spinner";

export const Blog = () => {


    const { id: string } = useParams();
    const { loading, blog } = useBlog({ id: string || " " });

    if (loading) {
        return <div>
            <Spinner />
        </div>
    }




    return (<>
        <div>
            <SingleBlog blog={blog} />
        </div>

    </>)
}