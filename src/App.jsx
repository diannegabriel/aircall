import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ActivityFeed from './components/ActivityFeed.jsx';
import Header from './Header.jsx';

const App = () => {
  const [status, setStatus] = useState('all');
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
      <ActivityFeed setStatus={setStatus}/>
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
