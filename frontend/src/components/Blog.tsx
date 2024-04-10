
interface BlogInputTypes {
    authorname: string,
    title: string,
    content: string,
    publishedDate : string
}
export const Blog = ({ authorname, title, content , publishedDate }: BlogInputTypes) => {
    return (
        <>
        <div className=" p-4 border-b ">

            <div className=" flex items-center">

                <Avatar authorname={authorname} />
                <div className="font-extralight text-sm pl-2 flex justify-center">
                    {authorname}
                </div>
                <Dot/>
                <div className=" text-slate-300 font-extralight text-sm">
                    {publishedDate}
                </div>
            </div>

            <div className="font-bold  text-xl">
                {title}
            </div>
            <div className=" text-sm 	 ">
                {content.substring(0,100) + "...."}
            </div>
            <div className="m-1 text-sm  bg-slate-50 w-fit rounded-lg p-1">
                {`${Math.ceil(content.length/100)}`} minutes read
            </div>
            
        </div>
        </>
    )
}

function Avatar({ authorname }: { authorname: string }) {
    return (<>
        <div className=" m-1 relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-700">
            <span className="font-medium text-gray-600 dark:text-gray-300">{authorname[0]}</span>
        </div>
    </>)
}

function Dot(){

    return (<>
        <div className=" w-0.5 h-0.5 m-1 bg-slate-400 rounded-full">

        </div>
    </>)
}