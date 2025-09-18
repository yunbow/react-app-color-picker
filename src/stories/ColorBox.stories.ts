import type { Meta, StoryObj } from '@storybook/react';
import { ColorBox } from '../components/ColorBox';

const meta: Meta<typeof ColorBox> = {
  title: 'Components/ColorBox',
  component: ColorBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    color: '#ff0000',
    onClick: () => console.log('Color clicked'),
  },
};

export const Green: Story = {
  args: {
    color: '#00ff00',
    onClick: () => console.log('Color clicked'),
  },
};

export const Blue: Story = {
  args: {
    color: '#0000ff',
    onClick: () => console.log('Color clicked'),
  },
};

export const WithRightClick: Story = {
  args: {
    color: '#ff00ff',
    onClick: () => console.log('Color clicked'),
    onRightClick: () => console.log('Color right-clicked for removal'),
  },
};