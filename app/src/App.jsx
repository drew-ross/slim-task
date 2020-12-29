import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AutoSaver from './components/AutoSaver';
import WidgetContainer, { TaskList } from './components/Widgets';

const App = props => {
  const { widgetsAreOn } = props;

  return (
    <div className='App'>
      <AutoSaver />
      <Sidebar widgetsAreOn={widgetsAreOn} />
      <div className='main'>
        <Header />
        <WidgetContainer component={TaskList} isOn={widgetsAreOn.taskList} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    widgetsAreOn: state.widgetReducer.isOn,
  };
};

export default connect(mapStateToProps, {})(App);