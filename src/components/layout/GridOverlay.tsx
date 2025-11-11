import { useState, useEffect } from 'react';

/**
 * GridOverlay - Visual 12-column grid overlay for development
 * Press 'G' key to toggle visibility
 * Specs: 12 columns, 24px gutters, 120px margins
 */
export function GridOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div className="w-full h-full max-w-[1440px] mx-auto px-[120px]">
        <div className="grid grid-cols-12 gap-[24px] h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className="bg-red-500/10 border-x border-red-500/30"
            >
              <div className="text-center text-xs text-red-500/50 pt-2">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Info Badge */}
      <div className="fixed top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-xs shadow-lg">
        Grid Overlay Active (Press G to hide)
      </div>
    </div>
  );
}
