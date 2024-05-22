import React from 'react';
import './avatar.css';

export interface AvatarProps {
  imgAlt: string,
  imgSrc: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  status?: "default" | "error" | "success"
}

export const Avatar = ({
  imgAlt,
  imgSrc,
  size = 'md',
  status,
  ...props
}: AvatarProps) => {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      className={['t-avatar', `t-avatar--${size}`, status && `t-avatar--${status}`].join(' ')}
      {...props}
    />
  );
};