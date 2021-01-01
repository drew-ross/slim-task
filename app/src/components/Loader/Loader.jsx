import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTasks } from '../../state/actions/taskListActions';

const Loader = props => {
  const { setTasks } = props;

  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem('taskList'));
    setTasks(taskList);

    // eslint-disable-next-line
  }, []);

  return null;
};

export const connectedLoader = connect(null, { setTasks })(Loader);