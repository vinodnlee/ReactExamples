import React from 'react'

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    handleSubmit(event) {
        event.preventDefault();
        let localstorageData,
            row = {
              "name": this.refs.name.value,
              "email": this.refs.email.value,
              "company": this.refs.company.value,
              "phone": this.refs.phone.value,
              "website": this.refs.website.value,
              "gender": event.target.elements.gender.value
            }
        if (localStorage.getItem("rowvalue")) {
            localstorageData = JSON.parse(localStorage.getItem("rowvalue"));
            localstorageData.push(row);
            localStorage.setItem("rowvalue", JSON.stringify(localstorageData));
        } else {
            localStorage.setItem("rowvalue", JSON.stringify([row]));
        }
        const path = '/grid/'
        this.context.router.push(path)
    }

    render() {
        return ( 
          <div>
            <form action = ""onSubmit = { this.handleSubmit }>
              <div className = "form-group">
                <label htmlFor = "name"> Your full name * </label> 
                <input className = "form-control" name = "name" ref = "name" required type = "text"/>
              </div> 
              <div className = "form-group">
                <label htmlFor = "email" > Your email address * </label> 
                <input className = "form-control" name = "email" ref = "email" required type = "email"/>
              </div> 
              <div className = "form-group">
                <label htmlFor = "company"> Your company * </label> 
                <input className = "form-control" name = "company" ref = "company" required type = "text"/>
              </div> 
            <div className = "form-group">
              <label htmlFor = "phone" > Your phone number * </label> 
              < input className = "form-control" name = "phone" ref = "phone" required type = "number" />
            </div> 
            <div className = "form-group">
              <label htmlFor = "website"> Your present location </label> 
              <input className = "form-control" name = "website" ref = "website" required type = "text"/>
            </div>
            <div className = "form-group">
              <label htmlFor = "website"> Your Gender * </label> 
              <label className = "radio-inline"> 
              <input name = "gender" ref ="gender" type = "radio" value = "male" / > < span > male </span></label>
              <label className = "radio-inline"> 
              <input name = "gender" ref = "gender" type = "radio" value = "female" / > < span > female < /span></label>
            </div> 
            <div className = "form-group">
              <button className = "btn btn-primary" type = "submit"> Send Form </button> 
            < /div> 
          < /form> 
        < /div>
        )
    }
}

