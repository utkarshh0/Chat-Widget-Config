import { FaCircle } from "react-icons/fa";
import PreviewCard from "./PreviewCard";
import Button from './Button'
import PropTypes from "prop-types";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { handleDownload } from "../utils/configUtils";

export default function Preview({isEdit, handleEdit}) {

  const { formData } = useContext(FormContext)

  return (
    <div className={`w-full h-full bg-pink-100 px-16 py-4 flex flex-col items-center justify-between ${isEdit && `hidden md:flex`}`}>
        <div className={`absolute right-10 top-5 ${isEdit && `hidden`}`}>
          <Button 
            label={"Edit"}
            style="p-2 rounded-full md:hidden"
            onClick={() => handleEdit(true)}
          />
        </div>
        <div className="flex justify-center items-center space-x-2 mt-8">
          <span className="text-[8px] text-green-500"><FaCircle /></span>
          <p className="font-bold">Live Preview</p>
        </div>
        <PreviewCard />
        <Button 
          label="Download Config"
          onClick={() => handleDownload(formData)}
        />
    </div>
  )
}

Preview.propTypes = {
  isEdit : PropTypes.bool.isRequired,
  handleEdit : PropTypes.func.isRequired
}
