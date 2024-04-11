
export const BlogSkeleton = () => {

    return (<>
        <div className=" flex flex-col justify-center items-center  ">
        
        <div role="status" className="animate-pulse flex flex-col justify-center w-60  mt-4 p-1 bg-white  ">
            <div  className="flex flex-row items-center">
                <div className="h-8 w-8 bg-gray-200 rounded-full   mb-4"></div>
                <div className="h-4 w-20 ml-1 bg-gray-200 rounded-full   max-w-[360px] mb-2.5"></div>
                <div className="h-4 w-20 ml-1 bg-gray-200 rounded-full   max-w-[360px] mb-2.5"></div>
            </div>
            <div className="h-2 w-56 bg-gray-200 rounded-full   max-w-[360px] mb-2.5"></div>
            <div className="h-2 w-52 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 w-56 bg-gray-200 rounded-full   max-w-[330px] mb-2.5"></div>
            <div className="h-2 w-52  bg-gray-200 rounded-full   max-w-[300px] mb-2.5"></div>
            <div className="h-2 w-10 ml-5 mb-3 bg-gray-200 rounded-full   max-w-[360px]"></div>
        </div>
        </div>


    </>)
}