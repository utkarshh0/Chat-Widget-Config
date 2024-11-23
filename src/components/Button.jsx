import PropTypes from "prop-types"

export default function Button({label, style, onClick}) {
  
    return (

        <button
            onClick={onClick}
            className={`w-fit text-xs bg-black text-white font-medium px-6 py-2 rounded-lg ${style}`}>
                {label}
        </button>
  )
}

Button.propTypes = {
    label : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
    style : PropTypes.string
}