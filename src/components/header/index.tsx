import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { FiUser, FiLogIn } from "react-icons/fi";

export default function Header() {
  const signedIn = false;
  const loadingAuth = false;
  return (
    <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow-md mb-4">
      <header className="w-full max-w-7xl flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Logo" className="h-8" />
        </Link>

        {!loadingAuth && signedIn ? (
          <Link to="/dashboard">
            <FiUser size={20} />
          </Link>
        ) : (
          <Link to="/login">
            <FiLogIn size={20} />
          </Link>
        )}
      </header>
    </div>
  );
}
