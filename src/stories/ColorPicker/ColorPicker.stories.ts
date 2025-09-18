import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '../../features/color-picker/ColorPickerApp';

const meta: Meta<typeof ColorPicker> = {
  title: 'Features/ColorPicker/ColorPickerApp',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};