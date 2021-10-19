import React, { Fragment } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ActivityDetail from './ActivityDetail.jsx';
import 'react-tabs/style/react-tabs.css';
import '../css/ActivityFeed.css'

const ActivityFeed = () => {
  return (
    <Tabs>
          <TabList>
            <Tab>Recent Activities</Tab>
            <Tab>Archived</Tab>
            <Tab>All Calls</Tab>
          </TabList>

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
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
  )
}

export default ActivityFeed; 