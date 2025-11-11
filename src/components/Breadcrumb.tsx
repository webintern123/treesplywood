import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate?: (page: string) => void;
}

export function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm">
        {/* Home icon always first */}
        <li className="flex items-center">
          <button
            onClick={() => onNavigate?.('home')}
            className="flex items-center gap-1 text-gray-600 hover:text-trees-primary transition-colors"
            aria-label="Go to home"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </button>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            {item.link && index < items.length - 1 ? (
              <button
                onClick={() => onNavigate?.(item.link!)}
                className="text-gray-600 hover:text-trees-primary transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
