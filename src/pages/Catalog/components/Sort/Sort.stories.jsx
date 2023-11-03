import { Provider } from 'react-redux';

import store from '../../../../store';
import { Sort } from './Sort';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Sort',
  component: Sort,
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

const Template = (arg) => <Sort {...arg} />;

export const Default = Template.bind({});
Default.args = {};
