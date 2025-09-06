"use client";
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export function Button({ children, className = '', ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & { className?: string }) {
  return (
    <button className={`btn btn-primary ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
