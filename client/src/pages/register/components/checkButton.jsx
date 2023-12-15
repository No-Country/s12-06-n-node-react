import { useState } from "react"
import CheckIcon from "../assets/checkIcon";

export default function CheckButton({ checkName }) {

    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className="flex items-center gap-2">
            <div
                onClick={handleCheck}
                className={`w-5 h-5 ${isChecked ? 'bg-principal' : ''} border border-principal rounded flex justify-center items-center transition-all`}
            >
                {isChecked && <CheckIcon />}
            </div>
            <span className="text-sm">{checkName}</span>
        </div>
    )
}
