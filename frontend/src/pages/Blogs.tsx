import { useBlogs } from "../Hooks/useBlogs"
import { AppBar } from "../components/AppBar"
import { AppBarSkeleton } from "../components/AppBarSkeletion"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeletion"


export const Blogs = () => {
    const { loading, blogs } = useBlogs()
    console.log(blogs)

    if (loading) {
        return (<>
            <AppBarSkeleton />
            <div className=" flex flex-col justify-center">

                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />

                </div>
            </div>
        </>)
    }
    return (<><div>
        <AppBar label="New Blog" />
        <div className=" flex justify-center">

            <div className=" max-w-md">
                {
                    blogs.map(bg => <BlogCard key={bg.id}
                        authorname={bg.author.name || "Anonymous"}
                        title={bg.title}
                        content={bg.content}
                        publishedDate={bg.date}
                        id={bg.id}
                        />)
                }


            </div>
        </div>
    </div>
    </>)
}