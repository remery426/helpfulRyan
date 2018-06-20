import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Listview from './components/Listview';
import Detailview from './components/Detailview/Detailview';
import colorList from './colorList.json';
class App extends Component {
  constructor(){
    super();
    this.state={
      searchColor:'',
      searchTerm:'',
      detailColor:null

    }
    this.handleChange =this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setColor = this.setColor.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.setRandom = this.setRandom.bind(this);
    this.returnToListView = this.returnToListView.bind(this);
  }
  handleClick(color2){
    this.setState({searchColor:color2,detailColor:null})
  }
  handleChange(event) {
    this.setState({searchTerm: (event.target.value)});
  }
  setColor(color){
    this.setState({
      detailColor:color
    })
  }
  returnToListView(){
    this.setState({
      detailColor:null,
    })
  }
  setRandom(){
    let keys = Object.keys(colorList)
    //picks key
    let  randomArray = colorList[keys[ keys.length * Math.random() << 0]]
    let randomIndex = Math.floor(Math.random() * randomArray.length)
    this.setColor(randomArray[randomIndex])
  }
  renderContent(){
    if(!this.state.detailColor){
      return(<Listview  setColor= {this.setColor} searchTerm = {this.state.searchTerm} color ={this.state.searchColor}/>)
    }else{
      return(<Detailview  returnToListView = {this.returnToListView} detailColor={this.state.detailColor}/>)
    }
  }
  render() {
    return (
      <div style ={{width:window.width}} className="App">
        <Header handleChange = {this.handleChange} value={this.state.searchTerm} />
        <Sidebar setRandom = {this.setRandom} clickHandler = {this.handleClick} />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
