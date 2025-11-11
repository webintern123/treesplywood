import { ReactNode } from 'react';

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * GridContainer - 12-column grid system matching Figma layout
 * Specs: 1440px max-width, 120px margins (desktop), 24px gutters
 * Responsive padding: 24px (mobile) → 48px (tablet) → 120px (desktop)
 */
export function GridContainer({ children, className = '' }: GridContainerProps) {
  return (
    <div className={`w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[120px] max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  );
}

interface GridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: number;
  className?: string;
}

/**
 * Grid - Responsive grid component
 * Uses 24px gap to match Figma gutter spacing
 */
export function Grid({ children, columns = 12, gap = 24, className = '' }: GridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  };

  return (
    <div 
      className={`grid ${gridCols[columns]} ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
}

interface GridItemProps {
  children: ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
}

/**
 * GridItem - Grid item with column span control
 */
export function GridItem({ children, span = 1, className = '' }: GridItemProps) {
  const colSpan = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
  };

  return (
    <div className={`${colSpan[span]} ${className}`}>
      {children}
    </div>
  );
}
