const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#202124] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#E20A13]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Anel, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am enthusiastic, focused and motivated Junior Developer with one
              plus years of experience, seeking an opportunity to contribute grow and 
              learn. Proficient in an assortment of technologies base of Javascript 
              like React, React Native and NodeJS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
