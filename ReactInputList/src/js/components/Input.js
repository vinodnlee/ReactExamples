import React from "react";
import ListItems from "./ListItems";
import objectPath from "object-path";
export default class Input extends React.Component{
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state={
       InputList:[]
    }
  }
  _removeElement(eachvalue,index){
    console.log("remove value::"+ eachvalue+"at index::" +index+" item to be deleted" +this);
    return eachvalue!== this;
  }
  deleteItem(value){
      console.log("delete this item" +value);
      //array.filter(function(currentValue,index,arr), thisValue);
      var pendingItem = this.state.InputList.filter(this._removeElement,value);
      this.setState({
        InputList : pendingItem
      });
  }
  handleClick(){
      let inputList = this.state.InputList.concat(this.refs.input.value);
      this.setState({
        InputList : inputList
      });
      console.log("input"+this.state.InputList);
      this.refs.input.value = "";

  }
  render(){
    var obj = {
    b: "d",
    c: ["e", "f"],
    '\u1200': 'unicode key',
    'dot.dot': 'key'
};
    console.log("rendering input");
    objectPath.set(obj,["a.h"], "m");
    return(
      <div>
        <input type="text" ref="input"/>
        <button onClick={this.handleClick}>Add item</button>
        <ListItems items={this.state.InputList} deleteItem={this.deleteItem}/>
      </div>
      );
  }
}
