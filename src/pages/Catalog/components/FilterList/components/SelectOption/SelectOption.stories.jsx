import { Provider } from 'react-redux';

import store from '../../../../../../store';
import { SelectOption } from './SelectOption';

export default {
  title: 'SelectOption',
  component: SelectOption,
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

const Template = (args) => <SelectOption {...args} />;

export const Default = Template.bind({});
Default.args = {};
