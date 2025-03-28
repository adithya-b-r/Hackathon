import { useNavigate } from 'react-router-dom'



export const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      id="home"
      className="w-full h-[90vh] px-12 py-16 flex items-center justify-between bg-lime-50"
    >
      <div className="max-w-lg h-full gap-5 flex flex-col">
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          About Agriverse
        </h1>
        <p className="text-xl text-gray-600 mt-2 italic font-semibold">
          "Empowering Farmers with Smart Solutions"
        </p>

        <p className="text-gray-700 mt-10 text-xl indent-12 tracking-wider">
          Agriverse is your one-stop destination for all farming needs. From
          buying and selling essentials to AI-driven crop recommendations and
          government schemes, we provide everything farmers need to thrive.
        </p>

        <button
          onClick={() => navigate("/about")}
          className="w-54 mt-12 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700"
        >
          Learn More
        </button>
      </div>

      <img src="/imgs/home.png" alt="Agriverse" className="w-1/2 rounded-lg" />
    </div>
  );
};
