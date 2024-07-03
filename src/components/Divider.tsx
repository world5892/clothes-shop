import '../css/components/Divider.css';

type DividerProps = {
  className: string;
};

function Divider(props: DividerProps) {
  const { className } = props;

  return <div className={`divider ${className}`}>&nbsp;</div>;
}

export default Divider;
