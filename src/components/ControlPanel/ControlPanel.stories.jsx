import { ControlPanel } from './ControlPanel';

export default {
  title: 'ControlPanel',
  component: ControlPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <ControlPanel {...arg} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};
