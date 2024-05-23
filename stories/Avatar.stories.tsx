import type { Meta, StoryObj } from "@storybook/react"
import { Canvas } from '@storybook/blocks';
import { Avatar } from "./Avatar"

type Story = StoryObj<typeof Avatar>

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: {
    layout: "centered",
    actions: { disable: true },
    interactions: { disable: true },
  },
  tags: ['autodocs'],
}

export default meta

export const Default: Story = {
  args: {
    size: "xxl",
    imgAlt: "Someone's profile pic",
    imgSrc: "https://placebeard.it/250/250",
    status: "default",
  },
}
