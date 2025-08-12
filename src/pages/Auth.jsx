import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Usuario registrado correctamente");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Usuario autenticado correctamente");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>{isRegister ? "Registro" : "Login"}</h2>
      <form onSubmit={handleAuth}>
        <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">{isRegister ? "Registrar" : "Ingresar"}</button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
      </button>
    </div>
  );
};

export default Auth;
