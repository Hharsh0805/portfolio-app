import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img
        src="/images/HSlogo2.jpeg"
        alt="Harsh-ify Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="text-xl font-bold text-white">
        Harsh-<span className="italic">Ify</span>
      </span>
    </Link>
  );
}
