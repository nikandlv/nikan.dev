import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

function Logo(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 305.703 305.703"
      version="1.1"
      viewBox="0 0 305.703 305.703"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M304.907 92.26a24.997 24.997 0 00-17.299-17.775L31.91.975A25 25 0 00.975 31.909l73.51 255.701a25 25 0 0041.704 10.772l182.189-182.189a25.006 25.006 0 006.529-23.933z"></path>
    </SvgIcon>
  );
}

export default Logo;
