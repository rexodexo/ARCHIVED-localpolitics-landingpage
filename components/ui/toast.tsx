//import { useState } from 'react';

import React from 'react';

export interface ToastProps {
  title: string;
  description: string;
}

export const Toast: React.FC<ToastProps> = ({ title, description }) => (
  <div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export type ToastActionElement = React.ReactElement;