import * as React from 'react';

export interface IConditionalRenderProps {
  children: React.ReactNode;
  render: boolean;
}

export default function ConditionalRender({
  children,
  render,
}: IConditionalRenderProps) {
  return <>{render && children}</>;
}
