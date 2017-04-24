import React, { PropTypes } from 'react';



const Dashboard = ({ secretData }) => (
  <div className="container">
    <div>
      <h1>"Dashboard" </h1>
      	<h2>"You should get access to this page only after authentication."</h2>
    </div>

    {secretData && <div> {secretData}</div>}
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
