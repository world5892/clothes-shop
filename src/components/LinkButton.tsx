import { Link } from 'react-router-dom';
import '../css/components/LinkButton.css';

type LinkButtonProps = {
  to: string;
  className: string;
  children: React.ReactNode;
};

function LinkButton(props: LinkButtonProps) {
  const { to, className, children, ...rest } = props;
  return (
    <Link to={to} className={`btn ${className}`} {...rest}>
      {children}
    </Link>
  );
}

export default LinkButton;
