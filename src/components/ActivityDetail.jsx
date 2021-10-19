import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import '../css/ActivityDetail.css'

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
    <div className="call-detail">
      {/* I am ActivityDetail inside ActivityFeed */}
      <div className="missed-call-icon">
        <span className="iconify" data-icon="flat-color-icons:missed-call" data-width="25" data-height="25"></span>
      </div>
      <div className="missed-call-info">
        <p>From: {activity[0].from}</p>
        <p>tried to call on {activity[0].via}</p>
      </div>
      <div className="missed-call-time">
        <p>{activity[0].created_at}</p>
      </div>
      {/* <p>Number of calls: {activity.length}</p> */}
      {/* <p>Call type: {activity[0].call_type}</p> */}
      {/* <p>Direction: {activity[0].direction}</p> */}
      {/* <p>Duration: {activity[0].duration}</p> */}
      {/* <p>ID: {activity[0].id}</p> */}
      {/* <p>Archived?: {activity[0].is_archived}</p> */}
      {/* <p>To: {activity[0].to}</p> */}

    </div>
  )
}

export default ActivityDetail; 