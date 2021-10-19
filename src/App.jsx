import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import ActivityFeed from './components/ActivityFeed.jsx';
import Header from './Header.jsx';

const App = () => {
  const [activity, setActivity] = useState(null);
  const [status, setStatus] = useState(0);
  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities")
    .then(res => {
      console.log(res.data);
      setActivity(res.data);
    })
  }, [])
  // useEffect(() => {

  // }, [])
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
      <ActivityFeed 
        activity={activity}
        setActivity={setActivity}
        setStatus={setStatus}
      />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
