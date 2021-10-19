import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ActivityFeed from './components/ActivityFeed.jsx';
import Header from './Header.jsx';



const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <Tabs>
          <TabList>
            <Tab>Activity</Tab>
            <Tab>Archived</Tab>
          </TabList>

          <TabPanel>
            <ActivityFeed />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
