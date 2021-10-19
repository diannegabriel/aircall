import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import ActivityFeed from './components/ActivityFeed.jsx';
import Header from './Header.jsx';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [status, setStatus] = useState(0);
  const [filteredActivities, setFilteredActivities] = useState([]);
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
          setFilteredActivities(activities.filter(activity => activity.call_type === "missed"))
          break;
        case 2:
            // Archived calls
          console.log("archived calls")
          setFilteredActivities(activities.filter(activity => activity.is_archived === true))
          break;
        default:
            // All Calls
          console.log("recent activities")
          setFilteredActivities(activities.filter(activity => activity.is_archived === false))
          // setFilteredActivities(activities);
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
        filteredActivities={filteredActivities}
      />
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
