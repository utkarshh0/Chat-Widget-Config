
export const handleDownload = (formData) => {
    
    try{
      const blob = new Blob([JSON.stringify(formData, null, 2)], {type : "application/json"})

      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
    
      link.download = `${formData.config}.json`
      
      document.body.appendChild(link);
      link.click(); 
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(link.href), 100);
    }
    catch(err){
      console.error(err)
    }
  }

export const loadConfigWithValidation = async (file, requiredFields) => {
  
    if(!file){
      alert('No File Selected');
      return;
    }

    const text = await file.text();
    try {
      const config = JSON.parse(text);
      const hasAllFields = requiredFields.every((field) => Object.hasOwn(config, field));
     
      if (!hasAllFields) {
        alert("The configuration file is missing one or more required fields.")
        throw new Error("The configuration file is missing one or more required fields.");
      }
      return config;
    } 
    catch (error) {
      alert("Invalid JSON format")
      throw new Error(error.message || "Invalid JSON format.");
    }
}
