interface Props {
    label: string
}
export const Button = ({ label }: Props) => {

    return (
        <>
            <button type="button" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-200 ease-in-out transform-gpu active:scale-95 mt-1 ">{label}</button>
        </>
    )
}