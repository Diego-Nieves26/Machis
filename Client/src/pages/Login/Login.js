import { BtnBack, Logo } from "../../components";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import React, { useState } from "react";
import axios from "axios";
import "./css/style.css";

const link = "http://localhost:4000/api/v1/users";

const Login = () => {
  const [changeLogin, setChangeLogin] = useState(false);
  const { register, handleSubmit } = useForm();

  const submitLogin = (e) => {
    console.log(e);
    axios.post(`${link}/login`, e).then((res) => console.log(res.data));
  };

  const submitNewUser = (e) => {
    console.log(e);
    axios.post(`${link}/signup`, e).then((res) => console.log(res.data));
  };

  return (
    <motion.div
      className="Login"
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 1.5,
        },
      }}
    >
      <BtnBack />
      {changeLogin ? (
        <div className="sign_up">
          <Logo />
          <form onSubmit={handleSubmit(submitLogin)} className="form__login">
            <input type="email" {...register("email")} placeholder="Email" />
            <input
              type="text"
              {...register("password")}
              placeholder="Contraseña"
            />
            <button>Iniciar</button>
          </form>
          <div className="ornament__login">
            <span></span> O <span></span>
          </div>
          <h3 className="login__google">
            <i className="bx bxl-google"></i> Iniciar sesion con Google
          </h3>
          <h4>¿Olvidaste tu contraseña?</h4>
        </div>
      ) : (
        <div>
          <Logo />
          <form onSubmit={handleSubmit(submitNewUser)} className="form__login">
            <input type="text" {...register("name")} placeholder="Nombre" />
            <input type="email" {...register("email")} placeholder="Email" />
            <input
              type="text"
              {...register("password")}
              placeholder="Contraseña"
            />
            <button>Iniciar</button>
          </form>
          <div className="ornament__login">
            <span></span> O <span></span>
          </div>
          <h3 className="login__google">
            <i className="bx bxl-google"></i> Crea una cuenta con Google
          </h3>
        </div>
      )}
      <div className="change__login">
        <p>{changeLogin ? "¿No tienes una cuenta?" : "¿Tienes una cuenta?"}</p>
        <button onClick={() => setChangeLogin(!changeLogin)}>
          {changeLogin ? "Registrate" : "Inicia secion"}
        </button>
      </div>
    </motion.div>
  );
};

export default Login;
