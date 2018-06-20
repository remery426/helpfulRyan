import React from 'react';
import Button from '../Sidebar/Button';
const Detailview = (props)=>{
  return(
    <div>
    <div style = {{border: '1px solid grey',marginLeft:'21%', width:'75%', min-height:600, display:'block'}}>
    <div style = {{width:'100%', height:'80%',backgroundColor:props.detailColor}}></div>
    <h1> {props.detailColor} </h1>
  </div>
  <Button style={{textAlign:'center'}} onClick ={props.returnToListView}>Return</Button>
  </div>
)
};
export default Detailview;
