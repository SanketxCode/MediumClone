import { BlogInput } from "../Hooks/useBlogs"
import { AppBar } from "./AppBar";
import { Avatar } from "./BlogCard";

export const SingleBlog = ({ blog }: { blog: BlogInput }) => {




    return (<>
        <div>
            <AppBar label={""} />
            <div className="flex justify-center">

                <div className="grid grid-cols-12 px-4 w-full pt-200 max-w-screen-xl pt-12  ">
                    <div className="col-span-9 ">
                        <div className="text-5xl font-extrabold ">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Posted on 2nd December
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>
                    <div className="border-l col-span-3 p-2">
                        <div className="text-slate-500">
                            Author
                        </div>
                        <div className="flex w-full">

                            <div className=" pr-4 flex flex-col justify-center">
                                <Avatar size="big" authorname={blog.author.name} />
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat eum dolor facere quibusdam,
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}