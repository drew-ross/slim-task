import { MenuButton } from './MenuButton';
import { connect } from 'react-redux';

import { toggleWidget } from '../../state/actions/widgetActions';

export default connect(null, { toggleWidget })(MenuButton);