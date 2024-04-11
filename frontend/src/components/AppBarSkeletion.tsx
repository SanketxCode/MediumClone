export const AppBarSkeleton = () => {

    return (<>
        <div className="p-4 sticky top-0 z-50  border-b ">

            <div role="status" className="animate-pulse  flex justify-between bg-white  ">
                    <div className="h-8 w-28 bg-gray-200 rounded-full mb-4"></div>
                <div className="flex justify-bewteen items-center ">
                    <div className="h-10 w-20 mr-2 bg-gray-200 rounded-full   max-w-[360px] mb-2.5"></div>
                    <div className="h-10 w-10  bg-gray-200 rounded-full   max-w-[360px] mb-2.5"></div>
                </div>

            </div>
        </div>
    </>)
}