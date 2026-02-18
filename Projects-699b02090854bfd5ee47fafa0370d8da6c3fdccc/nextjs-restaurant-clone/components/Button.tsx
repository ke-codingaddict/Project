import Link from 'next/link';


const Button = ({ name, path = "#", target }: { name: string, path?: string, target?: string }) => (
  <Link href={path} className="custom__button" target={target}>
     {name}
  </Link>
);

export default Button;
