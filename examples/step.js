import '../assets/index.less';
import React from 'react';
import moment from 'moment';
import TimePicker from '..';

const App = () => (
  <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} disableInputStep />
);

export default App;
