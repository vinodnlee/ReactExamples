import React from "react";

export default class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    handleSubmit(e) {
        e.preventDefault();
        this.context.router.push('/form/');
    }

    generateHeaders(cols){
        return cols.map(function(colData) {
            return (<th key={colData.key}> {colData.label} </th>);
        })
    }

    generateRows(cols,data) {
        return data.map(function(item) {

            let cells = cols.map(function(colData) {
                return <td> {item[colData.key]} </td>;
            });
            return <tr key={item.id}> {cells} </tr>;
        });
    }

    render() {
    	let cols = [
			    { key: 'name', label: 'Full Name' },
			    { key: 'email', label: 'Email' },
			    { key: 'company', label: 'Company' },
			    { key: 'phone', label: 'Phone' },
			    { key: 'website', label: 'Website' },
                { key: 'gender', label: 'Gender' }
			];
		let data = [];
		
    	
    	if (localStorage.getItem("rowvalue")) {
            data = JSON.parse(localStorage.getItem("rowvalue")); 
        } 
        let headerComponents = this.generateHeaders(cols),
            rowComponents = this.generateRows(cols,data);

        return ( 
        		<div>
	        		<table className="table">
	                	<thead> {headerComponents} </thead>
	                	<tbody> {rowComponents} </tbody>
	            	</table>
	        		<button className = "btn btn-primary" onClick={this.handleSubmit.bind(this)}> Go Back </button> 
        		</div> 
        	);
    }
}
