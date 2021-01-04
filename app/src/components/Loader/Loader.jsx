import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTaskListState } from '../../state/actions/taskListActions';
import { setWidgetState } from '../../state/actions/widgetActions';

const Loader = props => {
  const { setTaskListState, setWidgetState } = props;

  useEffect(() => {
    const taskListState = JSON.parse(localStorage.getItem('taskListState'));
    if (taskListState !== null) {
      setTaskListState(taskListState);
    }

    const widgets = JSON.parse(localStorage.getItem('widgets'));
    if (widgets !== null) {
      setWidgetState(widgets);
    }

    // eslint-disable-next-line
  }, []);

  return null;
};

export const connectedLoader = connect(null, { setTaskListState, setWidgetState })(Loader);