import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

type Story = StoryObj<typeof Badge>

const meta: Meta<typeof Badge> = {
  component: Badge,
  parameters: {
    layout: "centered",
    actions: { disable: true },
    interactions: { disable: true },
  },
}

export default meta

export const Default: Story = {
  args: {
    label: "Badge",
    size: "md",
    status: "default",
    variant: "outline",
  },
}
