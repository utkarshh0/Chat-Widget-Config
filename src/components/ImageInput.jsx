import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import { FiUpload } from "react-icons/fi";
import PropTypes from "prop-types"

export default function ImageInput({name, label, value}) {
  
  const { updateFormData } = useContext(FormContext)
  const handleChange = (e) => {
    const { name, files } = e.target
    if(files){
      const tempUrl = URL.createObjectURL(files[0])
      updateFormData(name, tempUrl)
    }
  }

  return (
    <div className="flex flex-col space-y-1">
        <p className="text-sm font-bold">{label}</p>
        <label htmlFor={name} className="text-sm font-bold">
          <div className="text-lg flex items-center justify-between border border-2 rounded-md p-1 w-full md:w-5/6">
            <img
              src={value}
              alt="Avatar Preview"
              className="w-8 h-8 rounded-full"
            />
            <input
              name={name}
              type="file"
              accept="image/"
              id={name}
              className="hidden"
              onChange={handleChange}
            />
            <FiUpload />
            </div>
        </label>
    </div>
  )
}

ImageInput.propTypes = {
  name : PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
  value : PropTypes.string.isRequired

}