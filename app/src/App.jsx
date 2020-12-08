import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WidgetContainer, { TaskList } from './components/Widgets';

const App = () => {
  return (
    <div className='App'>
      <Sidebar />
      <WidgetContainer component={TaskList} isOn={true}/>
    </div>
  );
};

export default App;