import { ReactNode } from 'react';

export type Pattern = 'dots' | 'waves' | 'lines' | 'circles' | 'none';

export interface SectionProps {
  children: ReactNode;
  pattern?: Pattern;
  className?: string;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}