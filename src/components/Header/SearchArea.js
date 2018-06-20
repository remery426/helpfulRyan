import React from 'react';
import '../../Header.css';
class SearchArea extends React.Component{
  constructor(props){
    super();
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <input type="text" value={this.props.value} onChange={this.props.handleChange} />
    )
  }
}
export default SearchArea;
