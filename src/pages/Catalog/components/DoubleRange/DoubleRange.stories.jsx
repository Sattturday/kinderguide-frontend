import React from 'react';
import { Provider } from 'react-redux';

import store from '../../../../../../store';
import { DoubleRange } from './DoubleRange';

export default {
  title: 'DoubleRange',
  component: DoubleRange,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = (args) => <DoubleRange {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 10000000,
};
