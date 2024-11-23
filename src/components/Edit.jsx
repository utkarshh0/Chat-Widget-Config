import { useContext, useRef } from "react";
import Button from "./Button";
import ColorInput from "./ColorInput";
import ImageInput from "./ImageInput";
import Input from "./Input";
import { FormContext } from "../context/FormContext";
import Dropdown from "./Dropdown";
import PropTypes from "prop-types";
import { loadConfigWithValidation } from "../utils/configUtils";

export default function Edit({isEdit, handleEdit}) {

  const {formData, setFormData} = useContext(FormContext)
  const fileInputRef = useRef(null)

  const handleLoadConfig = async (e) => {

    const file = e.target.files[0]
    const requiredFields = Object.keys(formData);
    try{
      const loadedConfig = await loadConfigWithValidation(file, requiredFields)

      setFormData(loadedConfig)  
      alert("Success")

      if (fileInputRef.current) {
        fileInputRef.current.value = ''; 
      }
    } catch(err){
      console.error(err)
    }

  }

  return (
    <div className={`w-full h-full px-16 py-4 flex flex-col justify-around ${!isEdit && `hidden md:flex`}`}>
        <div className="flex justify-around md:block">
          <label className="w-fit text-xs bg-black text-white font-medium px-6 py-2 rounded-lg cursor-pointer">
            Load Config
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={handleLoadConfig}
            />
          </label>
          <Button
            label="Preview"
            style="md:hidden"
            onClick={() => handleEdit(false)}
          />
        </div>
        <Input 
          name="config"
          label="Config Name"
          value={formData.config}
        />
        <Input 
          name="bot"
          label="Bot Name"
          value={formData.bot}
        />
        
        <Dropdown 
          name="font"
          label="Font Family"
          value={formData.font}
        />
        <ColorInput 
          name="headerColor"
          label="Header Color"
          value={formData.headerColor}
        />
        <ColorInput 
          name="headerFontColor"
          label="Header Font Color"
          value={formData.headerFontColor}
        />
        <ColorInput 
          name="backgroundColor"
          label="Background Color"
          value={formData.backgroundColor}
        />
        <ColorInput 
          name="chatFontColor"
          label="Chat Font Color"
          type="color"
          value={formData.chatFontColor}
        />
        <ImageInput 
          name="avatar"
          label="Avatar Image"
          value={formData.avatar}
        />
        <ImageInput 
          name="launcher"
          label="Launcher Image"
          value={formData.launcher}
        />
    </div>
  )
}

Edit.propTypes = {
  isEdit : PropTypes.bool.isRequired,
  handleEdit : PropTypes.func.isRequired
}