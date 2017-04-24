import React, { PropTypes } from 'react';
import { Link } from 'react-router';


export default class LoginForm extends React.Component{
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);  
  }

  render(){
    const {onSubmit,onChange,errors,user} = this.props;
    return(
          <div>
            <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Login</h2>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
              <label>Name:</label> 
              <input type = "text" name="name" onChange ={onChange} value={user.name}></input>
              {errors.name&& <span>{errors.name}</span>}
            </div>

            <div className="field-line">
               <label>Password:</label>
               <input type = "text" name="password" onChange ={onChange} value={user.password}></input> 
               {errors.password&& <span>{errors.password}</span>}
            </div>

            <div className="button-line">
              <button type="submit">Login </button>
            </div>

            <div>Dont have an account? <Link to={'/signup'}>Create one</Link>.</div>
          </form>
          </div>
      );
  }
}
