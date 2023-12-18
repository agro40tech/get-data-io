import "./SubmitButton.css";

interface ISubmitButtonProps {
  buttonText: string;
  className: string;
  padding: string;
  minWidth: string;
  maxHeight: string;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  buttonText,
  className,
  minWidth,
  maxHeight,
  padding,
}) => {
  const buttonStyles = {
    padding: padding,
    minWidth: minWidth,
    maxHeight: maxHeight,
  };

  return (
    <>
      <button
        className={`${className} button-submit`}
        style={buttonStyles}
        type="submit">
        {buttonText}
      </button>
    </>
  );
};

export default SubmitButton;
