import React from 'react';


export default class ListItems extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		this.props.deleteItem(event);
	}
	render(){
		var itemsArray = [];
		this.props.items.map(function(value,index){
			itemsArray.push(<li key={index}>{value} <button onClick={this.handleClick}>Delete</button></li>);
		},this);


		return(<ul>{itemsArray}</ul>)
	}
}