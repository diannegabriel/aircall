import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ActivityDetail from './ActivityDetail.jsx';
import 'react-tabs/style/react-tabs.css';
import '../css/ActivityFeed.css'

const ActivityFeed = ({ activities, setActivities, setStatus, filteredActivities }) => {
  const handleStatusChange = (e) => {
    setStatus(e);
  }
  const handleArchiveCall = (e) => {
    
  }
  const allActivities = filteredActivities.map((activity) => {
    return (
      <ActivityDetail
        key={activity.id}
        activity={activity}
        activities={activities}
      />
    );
  });
  return (
    <Tabs onSelect={handleStatusChange}>
      <TabList>
        <Tab>Recent Activity</Tab>
        <Tab>Missed</Tab>
        <Tab>Archived</Tab>
      </TabList>

      <TabPanel>
        {allActivities}
      </TabPanel>
      <TabPanel>
        <div className="archive-calls">
          <span className="iconify archive-icon" data-icon="fluent:archive-24-regular" data-width="25" data-height="25"></span>
          <p>Archive all calls</p>
        </div>
        {allActivities}
      </TabPanel>
      <TabPanel>
        <div className="archive-calls">
          <span className="iconify archive-icon" data-icon="fluent:archive-24-regular" data-width="25" data-height="25"></span>
          <p>Unarchive all calls</p>
        </div>
        {allActivities}
      </TabPanel>
    </Tabs>
  )
}

export default ActivityFeed; 