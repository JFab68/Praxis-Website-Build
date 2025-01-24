import { FC, InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className={`${className} w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary`}
          {...props}
        />
        {label && (
          <span className="text-sm text-gray-700">{label}</span>
        )}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Checkbox;
