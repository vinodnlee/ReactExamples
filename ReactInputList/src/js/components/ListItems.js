import React from 'react';


export default class ListItems extends React.Component{
	constructor(props){
		super(props);
	}
	handleClick(value){
		this.props.deleteItem(value);
	}
	render(){
		var itemsArray = [];
		this.props.items.map(function(value,index){
			itemsArray.push(<li key={index}>{value} <button onClick={this.handleClick.bind(this,value)}>Delete</button></li>);
		},this);


		return(<ul>{itemsArray}</ul>)
	}
}
