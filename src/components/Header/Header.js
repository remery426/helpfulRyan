import React from 'react';
import Logo from './Logo.js';
import SearchArea from './SearchArea';
import '../../Header.css';
const Header = (props)=>{
  return(
    <div className = "headerBody">
    <Logo style ={{paddingBottom: 70, display:"inline"}}  className="logo" />
    <SearchArea value ={props.value} handleChange ={props.handleChange}/>
    </div>
    )
  }
export default Header;
