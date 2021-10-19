import React from "react";
import '../css/ActivityDetail.css'

const ActivityDetail = ({ activities }) => {
  // console.log(activities)
  // const handleActivities = () => {
  //   setActivities(activities.map((activity) => {
  //     // console.log(activity)
  //     return activity
  //   }));
  // }
  if (!activities) return null;

  return (
    <div className="call-detail">
      {/* I am ActivityDetail inside ActivityFeed */}
      <div className="missed-call-icon">
        <span className="iconify" data-icon="flat-color-icons:missed-call" data-width="25" data-height="25"></span>
      </div>
      <div className="missed-call-info">
        {/* <h3>{activities.from}</h3> */}
        {/* <h4>tried to call on <strong>{activities[0].via}</strong></h4> */}
      </div>
      <div className="missed-call-time">
        {/* <p>{activities[0].created_at}</p> */}
        <p>12:34 PM</p>
      </div>
      {/* <p>Number of calls: {activities.length}</p> */}
      {/* <p>Call type: {activities[0].call_type}</p> */}
      {/* <p>Direction: {activities[0].direction}</p> */}
      {/* <p>Duration: {activities[0].duration}</p> */}
      {/* <p>ID: {activities[0].id}</p> */}
      {/* <p>Archived?: {activities[0].is_archived}</p> */}
      {/* <p>To: {activities[0].to}</p> */}
    </div>
  )
}

export default ActivityDetail; 