import React, { useEffect } from "react";
import axios from "axios";
import "../css/ActivityDetail.css";

const ActivityDetail = ({ activity, activities, setActivities }) => {
  const handleArchiveCall = () => {
    axios
    .post(`https://aircall-job.herokuapp.com/activities/${activity.id}`, {
      is_archived: !activity.is_archived
    })
    .then ((res) => {
      console.log(res.data);
      setActivities([
        ...activities.filter(elem => elem.id !== res.data.id), 
        res.data
      ])
      // activities.sort(function(a, b) {
      //   var keyA = new Date(a.updated_at),
      //     keyB = new Date(b.updated_at);
      //   // Compare the 2 dates
      //   if (keyA < keyB) return -1;
      //   if (keyA > keyB) return 1;
      //   return 0;
      // });
    })
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
  const date = new Date(activity.created_at);
  console.log(date.toLocaleString());
  if (!activities) return null;
  return (
    <div className="call-detail" onClick={handleArchiveCall}>
      <div className="call-icon">{icon}</div>
      <div className="call-info">
        <h3>{activity.from}</h3>
        <h4>
          tried to call on <strong>{activity.via}</strong>
        </h4>
      </div>
      <div className="call-time">
        <p>{date.toLocaleString().slice(-11, -6) + date.toLocaleString().slice(-3)}</p>
        {/* <p>12:34 PM</p> */}
      </div>
    </div>
  );
};

export default ActivityDetail;
