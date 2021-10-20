import React, { Fragment } from "react";
import axios from "axios";
import "../css/ActivityDetail.css";

const ActivityDetail = ({ activity, activities, setActivities }) => {
  const handleArchiveCall = () => {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${activity.id}`, {
        is_archived: !activity.is_archived,
      })
      .then((res) => {
        setActivities([
          ...activities.filter((elem) => elem.id !== res.data.id),
          res.data,
        ]);
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
  const date = new Date(activity.created_at);
  if (!activities) return null;
  return (
    <Fragment>
      <div className="call-date">
        <h5>
          <span>
            <strong>
              {date.toString().slice(4, 7) +
                "." +
                date.toString().slice(7, 10) +
                "," +
                date.toString().slice(10, 15)}
            </strong>
          </span>
        </h5>
      </div>
      <div className="call-detail" onClick={handleArchiveCall}>
        <div className="call-icon">
          <span
          className="iconify"
          data-icon="fluent:call-dismiss-20-filled"
          style={{ color: "#BA2800" }}
          data-width="25"
          data-height="25"
        ></span>
        </div>
        <div className="call-info">
          <h3>{activity.from}</h3>
          <h4>
            tried to call on <strong>{activity.via}</strong>
          </h4>
        </div>
        <div className="call-time">
          <p>
            {date.toLocaleString().slice(-11, -6) +
              date.toLocaleString().slice(-3)}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ActivityDetail;
