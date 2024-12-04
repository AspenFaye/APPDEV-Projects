import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/games">Product</Link>
        </li>
        <li>
          <Link to="/games">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
