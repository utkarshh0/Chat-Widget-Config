import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import PropTypes from 'prop-types'

export default function Input({name, label, value, type="text"}) {
    
    const { updateFormData } = useContext(FormContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        updateFormData(name, value)
    }

    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-bold">{label}</label>
            <input 
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                className="w-full md:w-5/6 border border-2 rounded-md p-2 text-sm"
            />
        </div>
  )
}

Input.propTypes = {
    name : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    type : PropTypes.string
}