import React from 'react'
import '../../Sidebar.css';

const Button = (props)=>{
  return(
    <button onClick={props.onClick}> {props.children}</button>
  )
}

export default Button;
