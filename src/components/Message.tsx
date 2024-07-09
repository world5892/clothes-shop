import '../css/components/Message.css';

type MessageProps = {
  text: string;
  result: 'success' | 'failure';
};

function Message(props: MessageProps) {
  const { text, result } = props;

  return <p className={`message message--${result}`}>{text}</p>;
}

export default Message;