import Navbar from "./Navbar";

const Home = () => {
  return (
    <div
      className="
       flex flex-col        
        w-screen HomeBackgroundImage
        h-[450px] md:h-[600px]
        "
    >
      <Navbar />

      {/* First Icon */}
      <div className="flex my-auto CommonPadding">
        <div
          className="
            flex flex-col
            max-w-[550px]
            text-white text-3xl md:text-5xl 
            border-2 border-white p-6 uppercase
            font-thin
            "
        >
          <h1>Impressive Experiences That Impressive</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
