import { useNavigate } from "react-router-dom"

interface BlogInputTypes {
    authorname: string,
    title: string,
    content: string,
    publishedDate: string,
    id: string
}
export const BlogCard = ({ authorname, title, content, publishedDate, id }: BlogInputTypes) => {
    const navigate = useNavigate();
    function handleclick() {
        navigate(`/blog/${id}`);
    }
    return (
        <>
            <div className=" p-4 border-b cursor-pointer " onClick={handleclick}>

                <div className=" flex items-center">

                    <Avatar size="small" authorname={authorname} />
                    <div className="font-extralight text-sm pl-2 flex justify-center">
                        {authorname}
                    </div>
                    <Dot />
                    <div className=" text-slate-300 font-extralight text-sm">
                        {publishedDate}
                    </div>
                </div>

                <div className="font-bold  text-xl">
                    {title}
                </div>
                <div className=" text-sm">
                    {content.substring(0, 200) + "...."}
                </div>
                <div className="m-1 text-sm  bg-slate-50 w-fit rounded-lg p-1">
                    {`${Math.ceil(content.length / 100)}`} minutes read
                </div>

            </div>
        </>
    )
}

export function Avatar({ authorname, size }: { authorname: string, size: string }) {
    return (<>
        <div className={`m-1 relative inline-flex items-center justify-center ${size === 'small' ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-700`}>
            <span className={`font-medium ${size === 'small' ? "text-sm" : "text-xl"} text-gray-600 dark:text-gray-300`}>{authorname[0].toUpperCase()}</span>
        </div>
    </>)
}

function Dot() {

    return (<>
        <div className=" w-0.5 h-0.5 m-1 bg-slate-400 rounded-full">

        </div>
    </>)
}