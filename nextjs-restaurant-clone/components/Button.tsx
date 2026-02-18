import Link from 'next/link';



interface ButtonProps {
  name: string;
  path?: string;
  target?: string;
  onClick?: () => void;
}

const Button = ({ name, path = "#", target, onClick }: ButtonProps) => {
  if (onClick) {
    return (
      <button type="button" className="custom__button" onClick={onClick}>
        {name}
      </button>
    );
  }
  
  return (
    <Link href={path} className="custom__button" target={target}>
      {name}
    </Link>
  );
};

export default Button;
