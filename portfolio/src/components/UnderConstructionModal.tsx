import React from 'react';

type UnderConstructionModalProps = {
  onClose: () => void;
};

export default function UnderConstructionModal({ onClose }: UnderConstructionModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 animate-slide-down"
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
        }}
      >
        <h2 className="text-xl font-bold mb-4">Under Construction</h2>
        <p className="mb-6">
          My Digital Garden is currently under construction, check back soon!
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 rounded transition hover:opacity-90"
          style={{
            backgroundColor: 'var(--toggle-bg)',
            color: 'var(--toggle-fg)',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
