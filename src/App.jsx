import { useState } from "react";
import Edit from "./components/Edit";
import Preview from "./components/Preview";

export default function App(){

  const [isEdit, setIsEdit] = useState(true)
  console.log(isEdit)
  
  const handleEdit = (it) => {
    setIsEdit(it)
  }

  return(
    <>
      <div className="h-screen w-screen overflow-x-hidden tracking-wide md:flex">   
          <Edit isEdit={isEdit} handleEdit={handleEdit}/>
          <Preview isEdit={isEdit} handleEdit={handleEdit}/>
      </div>
    </>
  )
}