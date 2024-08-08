import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { Button } from "./Button"

export const AppBar = ({ label }: { label: string }) => {

    console.log(label);

    const navigate = useNavigate();
    return (<>

        <div className="p-4 flex justify-between sticky top-0 z-50 backdrop-blur-sm border-b ">

            <Link to={'/blogs'}>
                <div className="font-serif font-bold text-2xl flex flex-col justify-center cursor-pointer">
                    Medium
                </div>
            </Link>

            <div className="flex flex-cols  items-center  ">
                {label != "" &&

                    <div className=" flex mr-4">

                        <Button label={label} handleclick={() => navigate('/publish')} />

                        <Button label={"Logout"} handleclick={() => navigate('/signin')} />

                    </div>}

                <Avatar size="" authorname="Sanket"></Avatar>
            </div>
        </div>

    </>)
}