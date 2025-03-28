import "../App.css";
import { Login } from "./Login";
import { Signin } from "./Signin";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);

  const openModal = () =>{
    setToggleLogin(true);
  }

  return (
    <nav
      style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      className="h-[10vh] w-full bg-black flex justify-between items-center text-white transition-all duration-500"
    >
      <div className="flex items-center">
        <img src="/imgs/logo.png" alt="" className="h-12 w-12 mr-2" />
        <Link to="/home" className="text-white text-2xl font-bold select-none hover:tracking-wider transition-all">
          AgriVerse
        </Link>
      </div>

      <div
        className="flex justify-between items-center"
        style={{ width: "50%" }}
      >
        <Link
          to="/about"
          style={{ marginRight: "1rem" }}
          className="transition-all duration-300 hover:text-green-400 hover:scale-105 font-bold"
        >
          About
        </Link>
        <Link
          to="/weather"
          style={{ marginRight: "1rem" }}
          className="transition-all duration-300 hover:text-green-400 hover:scale-105 font-bold"
        >
          Weather
        </Link>
        <Link
          to="/loan"
          style={{ marginRight: "1rem" }}
          className="transition-all duration-300 hover:text-green-400 hover:scale-105 font-bold"
        >
          Loans
        </Link>
        <a
          href=""
          style={{ marginRight: "1rem" }}
          className="transition-all duration-300 hover:text-green-400 hover:scale-105 font-bold"
        >
          Notifications
        </a>

        <button
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "5px",
          }}
          className="transition-all duration-100 bg-white text-black hover:bg-black hover:border-2 hover:border-white hover:text-white font-bold cursor-pointer"
          onClick={openModal}
        >
          Sign In
        </button>
      </div>

      {toggleLogin && (<Login onClose={() => setToggleLogin(false)} onSwitch={() => { setToggleLogin(false); setToggleRegister(true) }} />)}
      {toggleRegister && (<Signin onClose={() => setToggleRegister(false)} onSwitch={() => { setToggleRegister(false); setToggleLogin(true) }} />)}
    </nav>
  );
};