import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 bg-white text-black">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      A System for the  
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          Health and Well-Being 
          {" "}

        </span>
         of A City
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-600 max-w-4xl">
      Urbanizer is working to become the global standard for setting the health and wellbeing of cities, communities and towns.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          try our demo
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border border-neutral-300">
          learn more
        </a>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 justify-center items-center lg:items-stretch">
        
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 border border-green-700 shadow-sm shadow-green-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
