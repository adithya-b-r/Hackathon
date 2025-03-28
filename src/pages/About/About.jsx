export const About = () => {
  return(
    <div id="about" className="w-full h-[90vh] bg-lime-50 flex justify-center flex-col items-center">
      <div className="flex flex-col w-full items-center">
        <h1 style={{WebkitTextStroke: "1px black"}} className="mt-8 font-bold text-4xl text-emerald-600">About us</h1>
        <img src="/imgs/line.png" className="h-8" alt="" />
      </div>

      <div className="w-[90%] h-[70vh] flex justify-around items-center">
        <div
          style={{border: "5px ridge grey", borderTopLeftRadius: "10px", borderTopRightRadius: "80px", borderBottomLeftRadius: "80px", borderBottomRightRadius: "80px"}} 
          className="w-[40vh] h-[60vh] flex items-center flex-col justify-center px-4 text-center bg-white">
            <img src="/imgs/about1.png" className="h-32 w-32" alt="" />
            <h4 className="my-4 font-semibold font-lg">Smart Farming Solutions</h4>
            <p className="">AI-powered soil health analysis, real-time weather forecasting, and data-driven insights to help farmers make informed decisions </p>
          </div>
        <div 
          style={{border: "5px ridge grey", borderTopLeftRadius: "80px", borderTopRightRadius: "80px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}} 
          className="w-[40vh] h-[60vh] flex items-center flex-col justify-center px-4 text-center bg-white">
            <img src="/imgs/about2.png" className="h-32 w-32" alt="" />
            <h4 className="my-4 font-semibold font-lg">Market & Financial Access</h4>
            <p>A digital marketplace for buying and selling farm produce, along with easy access to bank loans and government schemes.</p>
          </div>
        <div 
          style={{border: "5px ridge grey", borderTopLeftRadius: "80px", borderTopRightRadius: "10px", borderBottomLeftRadius: "80px", borderBottomRightRadius: "80px"}} 
          className="w-[40vh] h-[60vh] flex items-center flex-col justify-center px-4 text-center bg-white">
            <img src="/imgs/about3.png" className="h-32 w-32" alt="" />
            <h4 className="my-4 font-semibold font-lg"> Empowering Farmers</h4>
            <p>Bridging the gap between traditional farming and modern technology, ensuring a better future for farmers through education, tools, and support.</p>
          </div>
      </div>
    </div>
  )
}