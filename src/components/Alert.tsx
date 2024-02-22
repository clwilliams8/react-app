import { ReactNode } from "react";
interface AlertProps {
  children: ReactNode;
  onClose?: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary">
      {children}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
