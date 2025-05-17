import React from 'react';

type UnderConstructionModalProps = {
  onClose: () => void;
};

export default function UnderConstructionModal({ onClose }: UnderConstructionModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-dark-extra text-off-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Under Construction</h2>
        <p className="mb-6">
          My Digital Garden is currently under construction, check back soon!
        </p>
        <button
          onClick={onClose}
          className="bg-purple-haze hover:bg-purple-haze/90 text-white px-4 py-2 rounded transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
