import React, { Fragment } from 'react';

import ActivityDetail from './ActivityDetail.jsx';
import '../css/ActivityFeed.css'

const ActivityFeed = () => {
  return (
    <Fragment>
      <div className="archive-calls">
        <span className="iconify archive-icon" data-icon="fluent:archive-24-regular" data-width="25" data-height="25"></span>
        <p>Archive all calls</p>
      </div>
      <ActivityDetail />
    </Fragment>
  )
}

export default ActivityFeed; 