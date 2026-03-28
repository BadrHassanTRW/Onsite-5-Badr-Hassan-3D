// Toast notification component
import { useEffect } from 'react';

function Toast({ show, message, onClose }) {
  // Auto-hide after 3 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="toast-container">
      <div className="toast show" role="alert">
        <div className="toast-header bg-success text-white">
          <strong className="me-auto">✓ Success</strong>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={onClose}
          ></button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  );
}

export default Toast;
