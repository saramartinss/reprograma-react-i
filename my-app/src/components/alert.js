import React from 'react'
import './alert.css'

function Alert(props){
    return(
      <div className = {`alert alert__color-${props.cor}`}>
        {props.title && <h1>{props.title}</h1>}
        <p className = "alert__texto">{props.children}</p>
      </div>
    )
}

export default Alert