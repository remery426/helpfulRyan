import React from 'react';
import '../../Sidebar.css';
import Button from './Button.js';
class Sidebar extends React.Component{
  render(){
    return(
      <div className= "sideBar">
      <Button onClick={this.props.setRandom}> Random Color </Button>
      <table>
        <tr onClick={()=>this.props.clickHandler("red")}> Red</tr>
        <tr onClick={()=>this.props.clickHandler("orange")}> Orange </tr>
        <tr onClick={()=>this.props.clickHandler("yellow")}> Yellow</tr>
        <tr onClick={()=>this.props.clickHandler("green")}> Green </tr>
        <tr  onClick={()=>this.props.clickHandler("blue")}> Blue </tr>
        <tr  onClick={()=>this.props.clickHandler("purple")}> Purple </tr>
        <tr  onClick={()=>this.props.clickHandler("brown")}> Brown </tr>
        <tr  onClick={()=>this.props.clickHandler("gray")}> Gray </tr>
      </table>
      </div>
    )
  }
}
export default Sidebar;
