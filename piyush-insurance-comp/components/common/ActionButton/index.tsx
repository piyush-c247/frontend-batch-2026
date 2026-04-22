'use client';

import { ReactNode } from 'react';

interface ActionButtonProps {
  className: string;
  onClick: () => void;
  children: ReactNode;
}

export default function ActionButton({
  className,
  onClick,
  children,
}: ActionButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}