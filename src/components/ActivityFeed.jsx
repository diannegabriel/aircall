import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ActivityDetail from "./ActivityDetail.jsx";
import "react-tabs/style/react-tabs.css";
import "../css/ActivityFeed.css";

const ActivityFeed = ({
  activities,
  setActivities,
  setStatus,
  filteredActivities,
  setFilteredActivities,
  archived,
  setArchived
  }) => {
  const handleStatusChange = (e) => {
    setStatus(e);
  };
  const allActivities = filteredActivities.map((activity) => {
    return (
      <ActivityDetail
        key={activity.id}
        activity={activity}
        activities={activities}
        setActivities={setActivities}
        archived={archived}
        setArchived={setArchived}
        setFilteredActivities={setFilteredActivities}
      />
    );
  });
  return (
    <Tabs onSelect={handleStatusChange}>
      <TabList>
        <Tab>Recent Activity</Tab>
        <Tab>Archived</Tab>
      </TabList>

      <TabPanel>{allActivities}</TabPanel>
      <TabPanel>{allActivities}</TabPanel>
    </Tabs>
  );
};

export default ActivityFeed;
