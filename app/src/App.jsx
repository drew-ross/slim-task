import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WidgetContainer, { TaskList } from './components/Widgets';

const App = props => {
  const { widgetsAreOn } = props;

  return (
    <div className='App'>
      <Header />
      <Sidebar />
      <WidgetContainer component={TaskList} isOn={widgetsAreOn.taskList} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    widgetsAreOn: state.widgetReducer.isOn,
  };
};

export default connect(mapStateToProps, {})(App);