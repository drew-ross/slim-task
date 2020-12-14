import React from 'react';
import { Task } from './Task';

const dummyTasks = [
  {
    id: 1,
    taskName: 'Dummy Task',
    complete: true,
  },
  {
    id: 2,
    taskName: 'Another Dummy Task',
    complete: false,
  }
];

export const TaskList = props => {

  return (
    <section className='Widget TaskList'>
      <h2>Tasks</h2>
      {dummyTasks.length &&
        dummyTasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            taskName={task.taskName}
            complete={task.complete}
          />
        ))
      }
    </section>
  );
};