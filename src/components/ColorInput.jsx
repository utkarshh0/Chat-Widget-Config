import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import PropTypes from "prop-types"

export default function ColorInput({name, label, value}){
  
  const { updateFormData } = useContext(FormContext)

  const handleColorChange = (e) => {
    const { name, value } = e.target
    updateFormData(name, value.toUpperCase())
  }
  

  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-bold">
        {label}
      </label>
      <div className="w-full md:w-5/6 border border-2 rounded-md flex">
        <input
            type="text"
            name={name}
            value={value}
            onChange={handleColorChange}
            className="w-full text-sm p-1 cursor-pointer outline-none"
        />
        <input
            name={name}
            type="color"
            value={value}
            onChange={handleColorChange}
            className="h-7 w-7 overflow-hidden rounded-full relative right-2"
        />
      </div>
    </div>
  )
}

ColorInput.propTypes = {
  name : PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
  value : PropTypes.string.isRequired
  
}