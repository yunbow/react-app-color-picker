import type { Meta, StoryObj } from '@storybook/react';
import { ColorPreview } from '../components/ColorPreview';

const meta: Meta<typeof ColorPreview> = {
  title: 'Components/ColorPreview',
  component: ColorPreview,
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

export const Default: Story = {
  args: {
    color: '#000000',
  },
};

export const Red: Story = {
  args: {
    color: '#ff0000',
  },
};

export const Blue: Story = {
  args: {
    color: '#0000ff',
  },
};

export const Purple: Story = {
  args: {
    color: '#8A2BE2',
  },
};