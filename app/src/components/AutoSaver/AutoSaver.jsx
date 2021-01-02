import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const AutoSaver = props => {
  const { taskListState, widgets } = props;
  const [firstLoad, setFirstLoad] = useState(true);

  // Widgets toggled state saver
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    } else {
      saveChanges("widgets", widgets);
    }
    // eslint-disable-next-line
  }, [widgets]);

  // TaskList state saver
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    } else {
      saveChanges("taskListState", taskListState);
    }
    // eslint-disable-next-line
  }, [taskListState]);

  const saveChanges = (name, state) => {
    localStorage.setItem(name, JSON.stringify(state));
  };

  return null;
};

const mapStateToProps = state => {
  return {
    widgets: state.widgetReducer,
    taskListState: state.taskListReducer
  };
};

const ConnectedAutoSaver = connect(mapStateToProps, {})(AutoSaver);

export { ConnectedAutoSaver };