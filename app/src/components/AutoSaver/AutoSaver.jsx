import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const AutoSaver = props => {
  const taskList = props.taskList;
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    console.log(taskList);
    if (firstLoad) {
      setFirstLoad(false);
    } else {
      saveChanges("taskList", taskList);
    }
  });

  const saveChanges = (name, state) => {
    localStorage.setItem(name, JSON.stringify(state));
  };

  return null;
};

const mapStateToProps = state => {
  return {
    taskList: state.taskListReducer
  };
};

const ConnectedAutoSaver = connect(mapStateToProps, {})(AutoSaver);

export { ConnectedAutoSaver };