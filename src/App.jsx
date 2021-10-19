import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import ActivityFeed from './components/ActivityFeed.jsx';
import Header from './Header.jsx';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [status, setStatus] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities")
    .then(res => {
      console.log(res.data);
      setActivities(res.data);
    })
  }, [])

  useEffect(() => {
    const handleFilter = () => {
      switch(status){
        case 1:
          // Missed calls
          console.log("missed calls")
          break;
        case 2:
          // Archived calls
          console.log("archived calls")
          break;
        default:
          // All Calls
          console.log("all calls")
          break;
      }
    }
    handleFilter();
  }, [activities, status])

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
      <ActivityFeed 
        activities={activities}
        setActivities={setActivities}
        setStatus={setStatus}
      />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
