import React from "react";
import "./styles.css";
import { useState } from "react";
import PasswordInput from "../Button";
import ThemeButton from "../Button-Theme";

export default function Cabeca() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <div className={`caixaFora ${isDark ? "dark" : "light"} `}>
        <ThemeButton
          isDark={isDark}
          setIsDark={setIsDark}
          toggleTheme={toggleTheme}
        />
        <h1>Register</h1>

        <form className="campo">
          <label className="descricao">Full name</label>
          <input></input>
          <label className="descricao">
            Email
          </label>
          <input type="email"></input>
          <label className="descricao">Password</label>
          <PasswordInput />
          <a href="#">forgot password?</a>
          <button type="button" className="register-button">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
