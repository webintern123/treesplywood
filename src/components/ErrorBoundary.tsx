import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { ModernButton } from './design-system/ModernButton';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // TODO: Send error to logging service (e.g., Sentry, LogRocket)
    // logErrorToService(error, errorInfo);
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#432011]/5 via-white to-[#A0522C]/5 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full">
            {/* Glass Card */}
            <div className="bg-white/80 backdrop-blur-xl border border-[#A0522C]/20 rounded-2xl shadow-xl p-8 md:p-12">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#A0522C] to-[#432011] rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-center text-[#432011] mb-4">
                Oops! Something Went Wrong
              </h1>

              {/* Description */}
              <p className="text-center text-[#432011]/70 mb-8">
                We encountered an unexpected error. Don't worry, our team has been notified and we're working on fixing it.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm font-mono text-red-800 mb-2">
                    <strong>Error:</strong> {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="text-xs text-red-700 mt-2">
                      <summary className="cursor-pointer hover:text-red-900">
                        Stack Trace
                      </summary>
                      <pre className="mt-2 overflow-x-auto whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ModernButton
                  onClick={this.handleReset}
                  variant="primary"
                  icon={<RefreshCw className="w-5 h-5" />}
                >
                  Try Again
                </ModernButton>

                <ModernButton
                  onClick={this.handleReload}
                  variant="secondary"
                  icon={<RefreshCw className="w-5 h-5" />}
                >
                  Reload Page
                </ModernButton>

                <ModernButton
                  onClick={this.handleGoHome}
                  variant="outline"
                  icon={<Home className="w-5 h-5" />}
                >
                  Go Home
                </ModernButton>
              </div>

              {/* Help Text */}
              <p className="text-center text-sm text-[#432011]/60 mt-8">
                If the problem persists, please{' '}
                <a
                  href="/contact"
                  className="text-[#A0522C] hover:text-[#432011] underline"
                >
                  contact our support team
                </a>
                .
              </p>
            </div>

            {/* Additional Info */}
            <p className="text-center text-sm text-[#432011]/50 mt-6">
              Error ID: {Date.now().toString(36).toUpperCase()}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simple wrapper component for inline error boundaries
export function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            <AlertTriangle className="w-5 h-5 inline mr-2" />
            This section encountered an error. Please refresh the page.
          </p>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
