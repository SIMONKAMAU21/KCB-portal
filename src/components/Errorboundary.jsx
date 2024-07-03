import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service if needed
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>404 Not Found</h2>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <p>
            <Link to="/">Go back to Home</Link>
          </p>
        </div>
      );
    }

    return this.props.children; // Render children normally
  }
}

export default ErrorBoundary;
