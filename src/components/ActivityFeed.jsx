import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ActivityDetail from './ActivityDetail.jsx';
import 'react-tabs/style/react-tabs.css';
import '../css/ActivityFeed.css'

const ActivityFeed = ({ activities, setActivities, setStatus }) => {
  const handleStatusChange = (e) => {
    setStatus(e);
  }
  return (
    <Tabs onSelect={handleStatusChange}>
      <TabList>
        <Tab>All Calls</Tab>
        <Tab>Missed</Tab>
        <Tab>Archived</Tab>
      </TabList>

      <TabPanel>
        <h2>All Calls</h2>
        <ActivityDetail 
          activities={activities}
          setActivities={setActivities}
        />
      </TabPanel>
      <TabPanel>
        <div className="archive-calls">
          <span className="iconify archive-icon" data-icon="fluent:archive-24-regular" data-width="25" data-height="25"></span>
          <p>Archive all calls</p>
        </div>
        <ActivityDetail 
          activities={activities}
          setActivities={setActivities}
        />
      </TabPanel>
      <TabPanel>
        <div className="archive-calls">
          <span className="iconify archive-icon" data-icon="fluent:archive-24-regular" data-width="25" data-height="25"></span>
          <p>Unarchive all calls</p>
        </div>
        <ActivityDetail 
          activities={activities}
          setActivities={setActivities}
        />
      </TabPanel>
    </Tabs>
  )
}

export default ActivityFeed; 