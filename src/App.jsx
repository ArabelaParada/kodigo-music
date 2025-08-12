import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Music from "./pages/Music";
import Auth from "./pages/Auth"; 
import Login from "./pages/Login";
import Register from "./pages/Register"; 
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Ruta protegida */}
        <Route
          path="/musica"
          element={
            <ProtectedRoute>
              <Music />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
