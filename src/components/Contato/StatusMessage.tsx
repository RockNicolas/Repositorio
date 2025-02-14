import React from 'react';

interface StatusMessageProps {
  message: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ message }) => {
  return <div className="status-message">{message}</div>;
};

export default StatusMessage;
