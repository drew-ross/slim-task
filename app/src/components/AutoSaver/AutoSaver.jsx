import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const AutoSaver = props => {
  const { taskList, widgetsAreOn } = props;
  const [firstLoad, setFirstLoad] = useState(true);

  // Widgets toggled state saver
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    } else {
      saveChanges("widgetsAreOn", widgetsAreOn);
    }
    // eslint-disable-next-line
  }, [widgetsAreOn]);

  // TaskList state saver
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    } else {
      saveChanges("taskList", taskList);
    }
    // eslint-disable-next-line
  }, [taskList]);

  const saveChanges = (name, state) => {
    localStorage.setItem(name, JSON.stringify(state));
  };

  return null;
};

const mapStateToProps = state => {
  return {
    widgetsAreOn: state.widgetReducer.isOn,
    taskList: state.taskListReducer
  };
};

const ConnectedAutoSaver = connect(mapStateToProps, {})(AutoSaver);

export { ConnectedAutoSaver };