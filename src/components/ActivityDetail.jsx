import React from "react";
import '../css/ActivityDetail.css'

const ActivityDetail = ({ activities, activity }) => {
  if (!activities) return null;

  let icon = '';
  if (activity.call_type === "missed") {
    icon=<span className="iconify" data-icon="flat-color-icons:missed-call" data-width="25" data-height="25"></span>
  } else if (activity.call_type === "answered") {
    icon=<span class="iconify" data-icon="flat-color-icons:phone" data-width="25" data-height="25" data-rotate="270deg"></span>
  } else if (activity.call_type === "voicemail") {
    icon=<span class="iconify" data-icon="flat-color-icons:voicemail" data-width="25" data-height="25"></span>
  }

  return (
    <div className="call-detail">
      <div className="missed-call-icon">
        {icon}
      </div>
      <div className="missed-call-info">
        <h3>{activity.from}</h3>
        <h4>tried to call on <strong>{activity.via}</strong></h4>
      </div>
      <div className="missed-call-time">
        {/* <p>{activities[0].created_at}</p> */}
        <p>12:34 PM</p>
      </div>
    </div>
  )
}

export default ActivityDetail; 