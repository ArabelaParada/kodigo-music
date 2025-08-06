import { useForm } from "react-hook-form";
import "../App.css"; // importar los estilos

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(`Formulario enviado:\nNombre: ${data.nombre}\nEmail: ${data.email}`);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contáctanos</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-field">
          <label>Nombre:</label>
          <input
            {...register("nombre", { required: "El nombre es obligatorio" })}
            className="form-input"
          />
          {errors.nombre && <span className="form-error">{errors.nombre.message}</span>}
        </div>

        <div className="form-field">
          <label>Email:</label>
          <input
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email no válido"
              }
            })}
            className="form-input"
          />
          {errors.email && <span className="form-error">{errors.email.message}</span>}
        </div>

        <button type="submit" className="form-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
