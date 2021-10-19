import React, { Fragment } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ActivityDetail from './ActivityDetail.jsx';
import 'react-tabs/style/react-tabs.css';
import '../css/ActivityFeed.css'

const ActivityFeed = () => {
  return (
    <Fragment>
      {/* <div className="archive-calls">
        <span className="iconify archive-icon" data-icon="fluent:archive-24-regular" data-width="25" data-height="25"></span>
        <p>Archive all calls</p>
      </div> */}
      <Tabs>
          <TabList>
            <Tab>Recent Activities</Tab>
            <Tab>Archived</Tab>
            <Tab>All Calls</Tab>
          </TabList>

          <TabPanel>
            {/* <ActivityFeed /> */}
            <h2>Any content 1</h2>
            <ActivityDetail />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
    </Fragment>
  )
}

export default ActivityFeed; 