interface Props {
    label: string,
    handleclick: () => void
}
export const Button = ({ label, handleclick }: Props) => {

    return (
        <>
            <button type="button" onClick={handleclick} className={`${label === "New Blog" ? 'bg-green-700' : 'bg-blue-700'} hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-200 ease-in-out transform-gpu active:scale-95`}>{label}</button>
        </>
    )
}