import { createContext, useState } from "react"
import PropTypes from "prop-types";
import avatar from '../assets/avatar.jpg'
import launcher from '../assets/launcher.jpg'

export const FormContext = createContext();

export const FormProvider = ({children}) => {
    const[formData, setFormData] = useState({
        config : 'config-1',
        bot : 'Greebo',
        font : '',
        headerColor : '#E63A1E',
        headerFontColor : '#FFFFFF',
        backgroundColor : '#E8E1DB',
        chatFontColor : '#323130',
        avatar : avatar,
        launcher : launcher
    })

    const updateFormData = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field] : value
        }))
    }

    return(
        <FormContext.Provider value={{ formData, updateFormData, setFormData }}>
            {children}
        </FormContext.Provider>
    )
}

FormProvider.propTypes = {
    children : PropTypes.node.isRequired
}