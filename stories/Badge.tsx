import React from 'react';
import './badge.css';

export interface BadgeProps {
  label: string,
  size?: 'xs' | 'sm' | 'md',
  status?: "default" | "info" | "error" | "success" | "warning"
  variant?: "filled" | "outline" | "subtle"
}

export const Badge = ({
  label,
  size = 'md',
  status = "default",
  variant = "outline", /* the `filled` variant only works with `default` and `info` statuses.*/
  ...props
}: BadgeProps) => {
  return (
    <span
      className={['t-badge', `t-badge--${size}`, `t-badge--${status}`, `t-badge--${variant}`].join(' ')}
      {...props}
    >
      {label}
    </span>
  );
};