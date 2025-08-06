// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!form.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Correo inválido';
    }
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Formulario enviado correctamente 🎉');
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Nombre:</label><br />
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>Correo:</label><br />
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
