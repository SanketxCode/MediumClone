import { ChangeEvent } from "react"


interface InputBoxtypes {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const InputBox = ({ label, placeholder, onChange }: InputBoxtypes) => {

    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-left mt-3">{label}</label>
            <input onChange={onChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>)

}
