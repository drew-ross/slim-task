import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTaskListState } from '../../state/actions/taskListActions';

const Loader = props => {
  const { setTaskListState } = props;

  useEffect(() => {
    const taskListState = JSON.parse(localStorage.getItem('taskListState'));
    if (taskListState !== null) {
      setTaskListState(taskListState);
    }

    // eslint-disable-next-line
  }, []);

  return null;
};

export const connectedLoader = connect(null, { setTaskListState })(Loader);