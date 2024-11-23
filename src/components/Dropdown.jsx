import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import PropTypes from "prop-types"

export default function Dropdown({name, label, value}) {

    const { updateFormData } = useContext(FormContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        updateFormData(name, value)
    }
  return (
    <div className="flex flex-col space-y-1">
        <label className="text-sm font-bold">{label}</label>
        <select 
            name={name}
            value={value}
            className="w-full bg-white md:w-5/6 border border-2 rounded-md p-2 text-sm"
            onChange={handleChange}
        >
            <option value="">Select a font</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Verdana, sans-serif">Verdana</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="'Times New Roman', serif">Times New Roman</option>
            <option value="'Courier New', monospace">Courier New</option>
        </select>
    </div>
  )
}

Dropdown.propTypes = {
    name : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired
}