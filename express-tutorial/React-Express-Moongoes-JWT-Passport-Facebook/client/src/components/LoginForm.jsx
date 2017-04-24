import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (
  <div className="container">
    <form>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="form-group">
        <label className="control-label">Email:</label> 
        <input type = "text" className="form-control" onChange ={onChange} name="email" value={user.email}></input>
        {errors.name&& <span>{errors.name}</span>}
      </div>

      <div className="form-group">
        <label className="control-label">Password:</label>
        <input type = "text" className="form-control" onChange ={onChange} name="password" value={user.password}></input> 
        {errors.password&& <span>{errors.password}</span>}
      </div>

      <div className="form-group">
          <label className="control-label hidden"></label>
          <button className="btn btn-success" onClick={onSubmit} name ="login">Login</button>
          <label className="control-label hidden"></label>
          <a href="/auth/facebook" className="btn btn-primary facebook"><span className="fa fa-facebook"></span> Facebook</a>
      </div>

      <div>Dont have an account? <Link to={'/signup'}>Create one</Link>.</div>
    </form>
  </div>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
