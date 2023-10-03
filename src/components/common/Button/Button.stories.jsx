import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Press me',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Press me',
  size: 'large',
};

export const Square = Template.bind({});
Square.args = {
  children: '1',
  variant: 'square',
  width: '30px',
  size: 'small',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Just a link',
  variant: 'link',
};
