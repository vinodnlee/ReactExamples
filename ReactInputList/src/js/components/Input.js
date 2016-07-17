import React from "react";
import ListItems from "./ListItems";
export default class Input extends React.Component{
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state={
       InputList:[]
    }
  }
  deleteItem(event){
      console.log("delete this item");
  }
  handleClick(){ 
      let inputList = this.state.InputList.concat(this.refs.input.value);
      this.setState({
        InputList : inputList
      });
      console.log("input"+this.state.InputList);

  }
  render(){
    console.log("rendering input");
      
    return(
      <div>
        <input type="text" ref="input"/>
        <button onClick={this.handleClick}>Add item</button>
        <ListItems items={this.state.InputList} deleteItem={this.deleteItem}/>
      </div>
      );
  }
}
