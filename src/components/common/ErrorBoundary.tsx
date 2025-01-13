import { Component, ErrorInfo, ReactNode } from 'react';
import Button from '../ui/Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error('Uncaught error:', error, errorInfo);
    
    // Log error to error tracking service
    if (import.meta.env.PROD) {
      // TODO: Add error tracking service integration
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    this.props.onReset?.();
  };

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 max-w-md mx-auto mt-10 bg-red-50 border border-red-100 rounded-lg">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-900 mb-3">
              Oops! Something went wrong
            </h2>
            <p className="text-red-700 mb-4">
              We're sorry for the inconvenience. Here's what we know:
            </p>
            <div className="text-left bg-red-100 p-3 rounded-md mb-4">
              <p className="text-sm text-red-900 font-medium mb-1">
                {this.state.error?.message}
              </p>
              {this.state.errorInfo && (
                <details className="text-xs text-red-700">
                  <summary>Technical details</summary>
                  <pre className="mt-2 overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>
            <Button
              onClick={this.handleReset}
              variant="secondary"
              className="w-full"
            >
              Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
