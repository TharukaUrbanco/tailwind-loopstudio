const SecondComponent = () => {
  return (
    <div
      className="
        flex flex-col md:flex-row
        my-10 justify-center 
        items-center gap-8 
        CommonPadding
    "
    >
      <img
        src="/images/mobile/image-interactive.jpg"
        className="w-[380px] md:w-[500px] lg:w-[700px]"
      />

      <div
        className="flex flex-col justify-center gap-5 p-4 bg-white 
      md:-ml-[250px] md:-mb-[160px] md:py-14 md:h-[300px]"
      >
        <h3 className="text-3xl uppercase font-thin text-center">
          The leader in interactive VR
        </h3>

        <p className="text-gray-400 text-xs text-center">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default SecondComponent;
