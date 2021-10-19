import React, { useEffect } from "react";
import axios from "axios";
import "../css/ActivityDetail.css";

const ActivityDetail = ({ activities, activity, archived, setArchived }) => {
  const handleArchiveCall = () => {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${activity.id}`, {
        is_archived: !activity.is_archived
      })
      .then((res) => {
        console.log(res.data);
        setArchived(res.data.is_archived)
      });
  };
  let icon = "";
  if (activity.call_type === "missed") {
    icon = (
      <span
        className="iconify"
        data-icon="fluent:call-dismiss-20-filled"
        style={{ color: "#BA2800" }}
        data-width="25"
        data-height="25"
      ></span>
    );
  } else if (activity.call_type === "answered") {
    icon = (
      <span
        className="iconify"
        data-icon="fluent:call-checkmark-24-filled"
        style={{ color: "green" }}
        data-width="25"
        data-height="25"
      ></span>
    );
  } else if (activity.call_type === "voicemail") {
    icon = (
      <span
        className="iconify"
        data-icon="fa-solid:voicemail"
        style={{ color: "#14379F" }}
        data-width="25"
        data-height="25"
      ></span>
    );
  }
  if (!activities) return null;
  return (
    <div className="call-detail" onClick={handleArchiveCall}>
      <div className="missed-call-icon">{icon}</div>
      <div className="missed-call-info">
        <h3>{activity.from}</h3>
        <h4>
          tried to call on <strong>{activity.via}</strong>
        </h4>
      </div>
      <div className="missed-call-time">
        {/* <p>{activities[0].created_at}</p> */}
        <p>12:34 PM</p>
      </div>
    </div>
  );
};

export default ActivityDetail;
