import React from 'react';
import ReactDOM from 'react-dom';

import ActivityFeed from './components/ActivityFeed.jsx';
import Header from './Header.jsx';



const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
      <ActivityFeed />
        {/* <Tabs>
          <TabList>
            <Tab>Recent Activities</Tab>
            <Tab>Archived</Tab>
            <Tab>All Calls</Tab>
          </TabList>

          <TabPanel>
            <ActivityFeed />
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs> */}
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
