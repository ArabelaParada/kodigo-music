import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav>
      {/* tus enlaces */}
      <button onClick={() => navigate("/login")}>Iniciar sesión</button>
    </nav>
  );
};

export default Navbar;

