type ButtonProps = {
  type?: 'button' | 'submit';
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  const { className, type = 'button', children, ...rest } = props;

  return (
    <button type={type} className={`btn ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
