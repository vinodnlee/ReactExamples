import React from 'react';
import LoginForm from './LoginForm.jsx';
export default class HomePage extends React.Component{

 render(){
 	return (
 		<div className="container">
		   <div> "React Application This is the home page ragavi." </div>
      <LoginForm
            onSubmit={function(e){ e.preventDefault();
                        console.log('submitted')}}
            onChange={(e) => console.log('changed')}
            errors={{ password: 'Invalid' }}
        user={{ password: 'jane@doe.com', name: 'Jane Doe' }}
      />
   		</div>
		)
 	}
}