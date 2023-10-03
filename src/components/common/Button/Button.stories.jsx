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
  variant: 'primary',
};

export const Square = Template.bind({});
Square.args = {
  children: 'Just a square',
  variant: 'square',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Just a link',
  variant: 'link',
};
