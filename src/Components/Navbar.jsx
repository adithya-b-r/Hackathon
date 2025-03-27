import '../App.css';

export const Navbar = () => {
  return (
    <nav
      style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
      className="h-[10vh] w-full bg-black flex justify-between items-center text-white transition-all duration-500"
    >
      <h1 className="text-white text-2xl font-bold select-none hover:tracking-wider transition-all">AgriVerse</h1>

      <div className="flex justify-between items-center" style={{ width: '50%' }}>
        {['MarketPlace', 'Lab', 'Schemes', 'Notifications'].map((item, index) => (
          <a
            key={index}
            href=""
            style={{ marginRight: '1rem' }}
            className="transition-all duration-300 hover:text-green-400 hover:scale-105 font-bold"
          >
            {item}
          </a>
        ))}

        <button
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '5px',
          }}
          className="transition-all duration-100 bg-white text-black hover:bg-black hover:border-2 hover:border-white hover:text-white font-bold cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};
