import React from "react";
import ReactDOM from "react-dom";
import Input from "./components/Input"

class Main extends React.Component{
	render(){
		return(<Input/>);
		}
}
ReactDOM.render(<Main/>,document.getElementById("app"));	

