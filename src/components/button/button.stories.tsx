import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  component: Button,
  args: {
  }
}   satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary : Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary : Story = {
  args: {
    variant: 'secondary',
  },
}

export const Destructive : Story = {
  args: {
    variant: 'destructive',
  },
}