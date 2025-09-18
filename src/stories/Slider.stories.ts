import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../components/Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['red', 'green', 'blue'],
    },
    value: {
      control: { type: 'range', min: 0, max: 255, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    label: '赤 (R)',
    value: 255,
    color: 'red',
    onChange: (value) => console.log('Red value changed:', value),
  },
};

export const Green: Story = {
  args: {
    label: '緑 (G)',
    value: 128,
    color: 'green',
    onChange: (value) => console.log('Green value changed:', value),
  },
};

export const Blue: Story = {
  args: {
    label: '青 (B)',
    value: 0,
    color: 'blue',
    onChange: (value) => console.log('Blue value changed:', value),
  },
};