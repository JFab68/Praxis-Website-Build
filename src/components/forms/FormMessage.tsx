import { useEffect } from 'react';

interface FormMessageProps {
  message: string;
  type: 'success' | 'error';
  onDismiss?: () => void;
}

const FormMessage = ({ message, type, onDismiss }: FormMessageProps) => {
  useEffect(() => {
    if (onDismiss) {
      const timer = setTimeout(onDismiss, 5000);
      return () => clearTimeout(timer);
    }
  }, [onDismiss]);

  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const borderColor = type === 'success' ? 'border-green-400' : 'border-red-400';

  return (
    <div
      className={`${bgColor} ${textColor} ${borderColor} border-l-4 p-4 mb-4`}
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  );
};

export default FormMessage;