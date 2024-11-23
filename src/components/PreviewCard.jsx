import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import { RxCross2 } from "react-icons/rx"
import { IoMicOutline } from "react-icons/io5"


export default function PreviewCard() {

  const { formData } = useContext(FormContext)
  console.log(formData.headerColor)
  return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div 
          className="w-full md:w-4/5 h-4/6 flex flex-col rounded-lg overflow-hidden shadow-lg shadow-slate-400 z-30"
          style={{backgroundColor : formData.backgroundColor, color : formData.chatFontColor, fontFamily : formData.font}}
        >
          <div 
            className={`flex justify-between items-center px-4 py-2 text-white text-md font-bold`}
            style={{backgroundColor : formData.headerColor, color : formData.headerFontColor}}
          >
            <p>{formData.bot}</p>
            <button className="text-xl cursor-pointer"><RxCross2 /></button>
          </div>
          <div className="h-full flex space-x-1 text-sm p-2">
            <img className="w-8 h-8 rounded-full" src={formData.avatar} alt="" />
            <p>Hi! I&apos;m Greebo, your friendly concierge monster, here to answer questions, show you around, and automatically perform tasks on the site for you. How can I help?</p>
          </div>
          <div className="bg-white py-2 px-4 flex justify-between">
            <input 
              type="text" 
              className="border-none outline-none w-full"
              placeholder="Need help? Just type or say it"
            />
            <button><IoMicOutline /></button>
          </div>
        </div>
        <div className="w-full md:w-4/5 relative -top-6 z-20">
         <img className="w-2/12 float-right rounded-lg" src={formData.launcher} alt="" />
        </div>
      </div>
  )
} 
