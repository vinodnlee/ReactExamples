import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (<div>
           <form onSubmit={onSubmit}>
              <h2 className="card-heading">Sign Up</h2>

              {errors.summary && <p className="error-message">{errors.summary}</p>}

              <div className="form-group">
                <label className="control-label">Name:</label> 
                <input className="form-control" type = "text" onChange = {onChange} name="name" value={user.name}></input>
                {errors.name&& <span>{errors.name}</span>}         
              </div>

              <div className="form-group">
               <label className="control-label">Email:</label> 
               <input  className="form-control" type = "text" onChange = {onChange} name="email" value={errors.email}></input>         
               {errors.email&& <span>{errors.email}</span>}
              </div>

              <div className="form-group">
               <label className="control-label">Password:</label>
               <input className="form-control" type = "text" onChange = {onChange} name="password" value={user.password}></input> 
               {errors.password&& <span>{errors.password}</span>}
              </div>

              <div className="form-group">
                <button  className="btn btn-success" type="submit">Submit</button>
              </div>
              <div>Already have an account? <Link to={'/login'}>Log in</Link></div>
            </form>
        </div>
        );

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;

