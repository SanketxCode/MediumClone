import { useBlog } from "../Hooks/useBlogs"
import { SingleBlog } from "../components/SingleBlog"
import { useParams } from "react-router-dom"

export const Blog = () => {


    const { id: string } = useParams();
    const { loading, blog } = useBlog({ id: string || " " });


    if (loading) {
        return <div>
            Loading...
        </div>
    }

    return (<>
        <div>
            <SingleBlog blog={blog} />
        </div>

    </>)
}