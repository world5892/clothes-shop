import '../css/components/Paragraph.css';

type ParagraphProps = {
  modifier?: 'light' | 'dark';
  className?: string;
  children: React.ReactNode;
};

function Paragraph(props: ParagraphProps) {
  const { className = '', modifier = 'light', children } = props;

  return <p className={`paragraph paragraph--${modifier} ${className}`}>{children}</p>;
}

export default Paragraph;
