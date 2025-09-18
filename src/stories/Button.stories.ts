import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'コピー',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: '現在の色を保存',
    variant: 'secondary',
  },
};

export const FullWidth: Story = {
  args: {
    children: '現在の色を保存',
    variant: 'secondary',
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'コピー',
    disabled: true,
  },
};