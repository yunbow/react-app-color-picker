import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['heading', 'subheading', 'hexValue', 'body'],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'p', 'span'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    children: 'カラーピッカー',
    variant: 'heading',
  },
};

export const Subheading: Story = {
  args: {
    children: 'プリセットカラー',
    variant: 'subheading',
  },
};

export const HexValue: Story = {
  args: {
    children: '#ff0000',
    variant: 'hexValue',
  },
};

export const Body: Story = {
  args: {
    children: 'これは通常のテキストです',
    variant: 'body',
  },
};