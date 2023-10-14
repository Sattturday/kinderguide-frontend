import { album } from '../../utils/constants';
import { ImageSlider } from './ImageSlider';

export default {
  title: 'ImageSlider',
  component: ImageSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (arg) => <ImageSlider {...arg} />;

export const Default = Template.bind({});
Default.args = {
  images: album,
  width: '738px',
};
