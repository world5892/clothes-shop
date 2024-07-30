import '../css/components/Divider.css';

interface DividerProps {
  className: string;
}

function Divider(props: DividerProps) {
  const { className } = props;

  return <div className={`divider ${className}`}>&nbsp;</div>;
}

export default Divider;
