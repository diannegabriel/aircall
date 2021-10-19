import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const ActivityDetail = () => {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities")
    .then(res => {
      console.log(res.data);
      setActivity(res.data);
    })
  }, [])

  if (!activity) return null;

  return (
    <div>
      <p>I am ActivityDetail inside ActivityFeed</p>
      {/* <h1>{activity}</h1> */}
      <p>Number of calls: {activity.length}</p>
      <p>Call type: {activity[0].call_type}</p>
      <p>Created at: {activity[0].created_at}</p>
      <p>Direction: {activity[0].direction}</p>
      <p>Duration: {activity[0].duration}</p>
      <p>From: {activity[0].from}</p>
      <p>ID: {activity[0].id}</p>
      <p>Archived?: {activity[0].is_archived}</p>
      <p>To: {activity[0].to}</p>
      <p>Via: {activity[0].via}</p>
    </div>
  )
}

export default ActivityDetail; 