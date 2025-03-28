import axios from "axios";
import { useState } from "react";

export const Signin = ({ onClose, onSwitch }) => {
  const [isDisplay, setIsDisplay] = useState(true);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      alert("The password must be at least 8 characters long.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/users/register', {
        fullname,
        email,
        password,
        confirmPassword
      });

      const token = response.data.token;

      if (token) {
        console.log(token);
      }

      console.log(response.status)

      alert('Sign-in Successfull: ' + response.data);
    } catch (err) {
      if (err.response) {
        alert(`Sign-in Failed: ${err.response.data.message || 'Unknown error from server.'}`);
      } else if (err.request) {
        alert('Unable to reach the server. Please try again later.');
      } else {
        alert(`Sign-in Failed: ${err.message}`);
      }
    } finally {
      closeModal;
    }
  }

  return (
    isDisplay && (
      <div onClick={closeModal} className="fixed py-10 inset-0 z-50 flex items-center justify-center w-full h-screen bg-gray-600 bg-opacity-50 text-black">
        <div onClick={(e) => e.stopPropagation()} className="relative bg-white w-10/12 md:w-1/3 h-fit rounded-lg flex flex-col items-center justify-center p-4 py-6 md:py-8">
          <i onClick={closeModal} className="bx bx-x text-4xl absolute cursor-pointer text-gray-600 m-2 top-0 right-0"></i>

          <h3 className="font-semibold text-3xl tracking-wider md:mb-8 mb-6 text-black">Sign Up</h3>

          <form onSubmit={handleFormSubmit} method="post">

            <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Fullname" className="w-full text-lg border border-gray-300 outline-none py-2 px-3 rounded-md mb-2 focus:bg-slate-50" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full text-lg border border-gray-300 outline-none py-2 px-3 rounded-md mb-2 focus:bg-slate-50" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full text-lg border border-gray-300 outline-none py-2 px-3 rounded-md mb-2 focus:bg-slate-50" required />
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" className="w-full text-lg border border-gray-300 outline-none py-2 px-3 rounded-md mb-2 focus:bg-slate-50" required />

            <input type="submit" value={"Sign Up"} placeholder="Confirm password" className="tracking-wider bg-yellow-600 hover:bg-yellow-700 duration-200 w-full text-lg text-white cursor-pointer border border-gray-300 outline-none py-2 px-3 rounded-md mt-4" />
            
            <p className="text-gray-600 w-full text-center mt-4 mb-0 cursor-default">Already have an account? <span className="text-yellow-600 cursor-pointer" onClick={switchModal}>Login</span></p>
          
          </form>
        </div>
      </div>
    )
  )
}
