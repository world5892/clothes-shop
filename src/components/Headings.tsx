import '../css/components/Headings.css';

type HeadingProps = {
  // type?: 'primary' | 'secondary' | 'tertiary';
  modifier?: 'light' | 'dark';
  className?: string;
  children: React.ReactNode;
};

// const Headings = {
//   Primary: ({ children }: HeadingProps) => <h1 className="heading-primary">{children}</h1>,
//   Secondary: ({ children, type }: HeadingProps) => <h2 className={`heading`}>{children}</h2>,
//   Tertiary: ({ children }: HeadingProps) => <h3 className="heading-tertiary">{children}</h3>,
// };

const Headings = {
  Primary(props: HeadingProps) {
    const { className = '', children } = props;

    return <h1 className={`heading-primary ${className}`}>{children}</h1>;
  },

  Secondary(props: HeadingProps) {
    const { className = '', modifier = 'light', children } = props;

    return (
      <h2 className={`heading-secondary heading-secondary--${modifier} ${className}`}>
        {children}
      </h2>
    );
  },

  Tertiary(props: HeadingProps) {
    const { className = '', children } = props;

    return <h3 className={`heading-tertiary ${className}`}>{children}</h3>;
  },
};

export default Headings;
