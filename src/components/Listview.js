import React from 'react';
import '../List.css';
import colorList from '../colorList.json';
import ListSquare from './ListSquare';
class Listview extends React.Component {
  constructor(props){
    super();
    this.state={
      color: '',
      searchTerm: '',
      colorList: [],
      allColors: [],
      page: 1
    }
    this.renderSquare = this.renderSquare.bind(this)
    this.renderPageButtons = this.renderPageButtons.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
  }
  componentDidUpdate(){
    if(this.props.searchTerm != this.state.searchTerm){
      this.setState({searchTerm:this.props.searchTerm},function(){
      let arr1 =[];
      let subArr =[];
      let results = [];
      results = this.state.allColors.filter((word)=>{return word.match(("^"+this.state.searchTerm))});
      for(var i=0;i<results.length;i++){
        subArr.push(results[i])
        if(arr1.length>=3){
          break
        }
        if(subArr.length%4 == 0){
          arr1.push(subArr);
          subArr = [];
        }
      }
      if(subArr.length){
        arr1.push(subArr)
      }
      this.setState({
        colorList: arr1
      });
    })
    }
    if(this.props.color!=this.state.color){
    let arr1 =[];
    let subArr =[];

    this.setState({color:this.props.color},function(){
    let key = this.state.color
    for(var i=0;i<colorList[key].length;i++){
      subArr.push(colorList[key][i])
      if(subArr.length%4 == 0){
        arr1.push(subArr);
        subArr = [];
      }
    }
    arr1.push(subArr)
    console.log(arr1)
    this.setState({
      colorList: arr1,
    });
  })
  }
  }
  componentWillMount(){
    let arr1 =[];
    let arr2 =[];
    let subArr =[];
    let count = 1;
    for(var key in colorList){
      for(var i=0;i<colorList[key].length;i++){
        if(count<=12){
        subArr.push(colorList[key][i])
        if(count%4 == 0){
          arr1.push(subArr);
          subArr = [];
        }
        count+=1
      }
      arr2.push(colorList[key][i])
    }

    }
    this.setState({
      colorList: arr1,
      allColors:arr2
    });
  }
  renderSquare(){
    return(
    this.state.colorList.map((rowValue)=>{
      return (
          <tr>
          {
          rowValue.map((listValue)=>{
          return(
            <td><ListSquare onClick ={this.props.setColor}>{listValue}</ListSquare></td>
            )
          })
        }
      </tr>
    )
  }))
  }
  handlePageClick(page){
    console.log(page)
    let start = (page-1) * 12;
    let index = 0;
    let subArr = [];
    let arr1 = [];
    while(start+index<start+12 && start + index <this.state.allColors.length){
      if((start+index)%4==0){
        arr1.push(subArr)
        subArr = []
      }
      subArr.push(this.state.allColors[start+index])
      index+=1
    }
    arr1.push(subArr)
    this.setState({
      colorList:arr1
    })
  }
  renderPageButtons(){
    let listOfPages = [];
    let count = 1;
    for(let i=0;i<this.state.allColors.length;i++){
      if((i+1)%12 == 0){
        listOfPages.push(count)
        count+=1
      }
    }
    listOfPages.push(count)
    return(
    listOfPages.map((page)=>{
      return <a onClick ={()=>this.handlePageClick(page)}> {page}</a>
    })
  )
  }
  render(){
    return(
      <div style ={{float:"right",width:'70%',textAlign: 'left', paddingTop:'5%'}}>
      <table>
        {this.renderSquare()}
      </table>
      <span {{paddingLeft:40%}}>
      {this.renderPageButtons()}
      </span>
      </div>
    )
  }
}
export default Listview;
