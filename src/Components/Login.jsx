import axios from "axios";
import { useState } from "react";

export const Login = ({ onClose, onSwitch }) => {
  const [isDisplay, setIsDisplay] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setIsDisplay(false);
    onClose();
  };

  const switchModal = () => {
    closeModal;
    onSwitch();
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email,
        password
      });

      alert("Sign-in Successful: " + response.data.message);
      window.location.reload();
    } catch (err) {
      if (err.response) {
        alert(`Login Failed: ${err.response.data.message || 'Unknown error from server.'}`);
      } else if (err.request) {
        alert('Unable to reach the server. Please try again later.');
      } else {
        alert(`Login Failed: ${err.message}`);
      }
    } finally {
      closeModal;
    }
  }

  if (!isDisplay) return null;

  return (
    <div onClick={closeModal} className="fixed py-10 inset-0 z-50 flex items-center justify-center w-full h-screen bg-gray-600 bg-opacity-50 text-black">
      <div onClick={(e) => e.stopPropagation()} className="relative bg-white w-10/12 md:w-1/3 h-fit rounded-lg flex flex-col items-center justify-center p-4 py-6 md:py-8">
        <i onClick={closeModal} className="bx bx-x text-4xl absolute cursor-pointer text-gray-600 m-2 top-0 right-0"></i>

        <h3 className="font-semibold text-3xl tracking-wider md:mb-8 mb-6 text-black">Login</h3>

        <form onSubmit={handleFormSubmit} method="post">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full text-lg border border-gray-300 outline-none py-2 px-3 rounded-md mb-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full text-lg border border-gray-300 outline-none py-2 px-3 rounded-md mb-2"
          />
          <p className="text-yellow-600 mt-1 mb-2 cursor-pointer inline-flex justify-end w-full">Forgot Password?</p>

          <input
            type="submit"
            value="Login"
            className="tracking-wider bg-yellow-600 hover:bg-yellow-700 duration-200 w-full text-lg text-white cursor-pointer border border-gray-300 outline-none py-2 px-3 rounded-md mt-4"
          />
        </form>

        <p className="text-gray-600 mt-4 mb-4 cursor-default">
          Don't have an account? <span className="text-yellow-600 cursor-pointer" onClick={switchModal}>Signup</span>
        </p>
      </div>
    </div>
  );
};