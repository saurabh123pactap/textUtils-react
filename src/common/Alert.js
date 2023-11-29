import React from 'react'

function Alert(props) {
    const capitalizeMode=(word)=>{
      let text=word.toLowerCase()
        return text.charAt(0).toUpperCase() +text.slice(1)
    }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong> {capitalizeMode(props.alert.type)}: {props.alert.msg}</strong> 
  </div>

  )
}

export default Alert
