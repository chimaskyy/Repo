// ErrorBoundary.js
import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  const handleError = (error, errorInfo) => {
    setHasError(true);
    setError({ error, errorInfo });
  };

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {error.toString()}

          {error.componentStack}
        </details>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
