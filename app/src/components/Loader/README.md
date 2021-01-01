The purpose of the Loader component is to load/pull state for all the widgets from localStorage.
In the future, this component will pull state from an API once a user is logged in.

This component was built to separate initial state loading from the widgets, so that the data
would be available whether the widget components have mounted or not. This also allows widgets
to mount/remount without redundant data pulls. This also allows widget components to have access
to data about other widgets, such as a Calendar component having access to TaskList data without
needing to mount the TaskList component.