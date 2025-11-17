
import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  compact?: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, title, children, showIcon = true, compact = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className={`bg-white rounded-lg shadow-2xl ${compact ? 'p-6 max-w-xs' : 'p-8 max-w-sm'} w-full text-center transform transition-all duration-300 scale-100 hover:scale-105 hover:shadow-[0_0_24px_rgba(13,77,86,0.35)]`}
        onClick={(e) => e.stopPropagation()}
      >
        {showIcon && (
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-5">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
        <h3 className="text-xl font-bold text-dark-teal">{title ?? 'Registration Successful!'}</h3>
        {children ? (
          <div className="text-gray-700 mt-3 text-sm">{children}</div>
        ) : (
          <p className="text-gray-600 mt-2 text-sm">Welcome to the NidhiSetu Yuva Veer Program. We will be in touch with you shortly.</p>
        )}
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full bg-dark-teal text-white font-bold py-2 px-4 rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-teal transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-lg transition-transform"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
