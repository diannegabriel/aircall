import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import ActivityFeed from "./components/ActivityFeed.jsx";
import Header from "./Header.jsx";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [category, setCategory] = useState(0);
  const [filteredActivities, setFilteredActivities] = useState([]);
  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities").then((res) => {
      console.log(res.data);
      setActivities(res.data);
    });
  }, []);
  useEffect(() => {
    const handleFilter = () => {
      switch (category) {
        case 1:
          // Archived calls
          setFilteredActivities(
            activities.filter((activity) => activity.is_archived === true)
            .sort((a,b)=> (b.created_at - a.created_at) ? -1 : 1)
          );
          break;
        default:
          // Recent activities
          setFilteredActivities(
            activities.filter((activity) => activity.is_archived === false)
            .sort((a,b)=> (b.created_at - a.created_at) ? -1 : 1)
          );
          break;
      }
    };
    handleFilter();
  }, [activities, category]);

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <ActivityFeed
          activities={activities}
          setActivities={setActivities}
          setCategory={setCategory}
          filteredActivities={filteredActivities}
          setFilteredActivities={setFilteredActivities}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
