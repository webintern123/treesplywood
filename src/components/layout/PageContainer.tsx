import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageContainer - Wrapper for page content with grid margins
 * Use this for page sections that should respect the 12-column grid
 */
export function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-[120px] py-10 ${className}`}>
      {children}
    </div>
  );
}
