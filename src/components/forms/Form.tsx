import { FC, HTMLAttributes } from 'react';
import Button from '../ui/Button';

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  className?: string;
  title?: string;
  description?: string;
  onSubmit: () => void;
}

const Form: FC<FormProps> = ({
  className,
  title,
  description,
  onSubmit,
  children,
  ...props
}) => {
  return (
    <form 
      className={`${className} bg-white rounded-lg shadow-md p-6`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      {...props}
    >
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      
      <div className="space-y-4">
        {children}
      </div>
      
      <div className="mt-6">
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
