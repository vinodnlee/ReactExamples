import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         data1: [],
         data2: ''
      }
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
      this.setStateHandler = this.setStateHandler.bind(this);
   };

   //force Update
   forceUpdateHandler() {
      this.forceUpdate();
   };
   //set state
   setStateHandler() {
      console.log("setting state");
      var item = "setState..."
      var myArray = this.state.data1;
      myArray.push(item)
      this.setState({data1: myArray})
   };
   updateState(e) {
      this.setState({data2: e.target.value});
   }
   //FindDOMNode and refs
   clearInput() {
      this.setState({data2: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }

   render() {
      return (
         <div>
            <div>
               <input value = {this.state.data2} onChange = {this.updateState} 
               ref = "myInput"></input>
               <button onClick = {this.clearInput}>CLEAR</button>
               <h4>{this.state.data2}</h4>
            </div>   

            <div>
               <button onClick = {this.setStateHandler}>SET STATE</button>
               <h4>State Array: {this.state.data1}</h4>
            </div>

            <div>
               <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
               <h4>Random number: {Math.random()}</h4>
            </div>
         </div>
      );
   }
}

export default App;