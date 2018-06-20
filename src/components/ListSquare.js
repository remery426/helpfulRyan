import React from 'react'
import '../List.css';

const ListSquare = (props)=>{
  return(
    <div style={{paddingLeft:'10%'}} onClick = {()=>props.onClick(props.children)}>
      <div style = {{backgroundColor:props.children, width:150,height:150}}></div>
      <p style ={{textAlign:'left',color:props.children}}> {props.children}</p>
    </div>
  )
}

export default ListSquare;
