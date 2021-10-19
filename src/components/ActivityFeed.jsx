import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ActivityDetail from './ActivityDetail.jsx';
import 'react-tabs/style/react-tabs.css';
import '../css/ActivityFeed.css'

const ActivityFeed = ({ activity, setActivity, setStatus }) => {
  const handleStatusChange = (e) => {
    console.log(e)
    setStatus(e)
  }
  return (
    <Tabs onSelect={handleStatusChange}>
      <TabList >
        <Tab>All Calls</Tab>
        <Tab>Missed</Tab>
        <Tab>Archived</Tab>
      </TabList>

      <TabPanel>
        <h2>All Calls</h2>
        <ActivityDetail 
          activity={activity}
          setActivity={setActivity}
        />
      </TabPanel>
      <TabPanel>
        <div className="archive-calls">
          <span className="iconify archive-icon" data-icon="fluent:archive-24-regular" data-width="25" data-height="25"></span>
          <p>Archive all calls</p>
        </div>
        <ActivityDetail />
      </TabPanel>
      <TabPanel>
        <div className="archive-calls">
          <span className="iconify archive-icon" data-icon="fluent:archive-24-regular" data-width="25" data-height="25"></span>
          <p>Unarchive all calls</p>
        </div>
      </TabPanel>
    </Tabs>
  )
}

export default ActivityFeed; 