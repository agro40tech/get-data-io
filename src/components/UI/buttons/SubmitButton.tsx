import "./SubmitButton.css";

interface ISubmitButtonProps {
  buttonText: string;
  className: string;
  padding: string;
  minWidth: string;
  maxHeight: string;
  onClick?: Function;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  buttonText,
  className,
  minWidth,
  maxHeight,
  padding,
  onClick,
}) => {
  const buttonStyles = {
    padding: padding,
    minWidth: minWidth,
    maxHeight: maxHeight,
  };

  return (
    <>
      {!onClick ? (
        <button
          className={`${className} button-submit`}
          style={buttonStyles}
          type="submit">
          {buttonText}
        </button>
      ) : (
        <button
          className={`${className} button-submit`}
          style={buttonStyles}
          type="submit"
          onClick={() => onClick()}>
          {buttonText}
        </button>
      )}
    </>
  );
};

export default SubmitButton;
