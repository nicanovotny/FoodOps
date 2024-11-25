import React from 'react';

interface LoadingMessageProps {
  message: string;
}

const LoadingMessage: React.FC<LoadingMessageProps> = ({ message }) => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <p className="text-xl text-center text-white bg-primary py-2 px-4 rounded-lg">
        {message}
      </p>
    </div>
  );
};

export default LoadingMessage;
