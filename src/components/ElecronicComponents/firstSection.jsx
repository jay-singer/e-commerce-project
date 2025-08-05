const FirstSection = () => {
  const lgBg = "assets/electonicImage/TopSection.png";
  const smBg = "/assets/electonicImage/SmallBackground.jpg";
  return (
    <>
      <div
        className={`bg-[url(${smBg})] h-1/3-svh md:bg-[url(${lgBg})] md:h-1/3-svh  lg:h-screen  md:bg-cover  md:bg-center md:bg-no-repeat md:relative`}
      >
        {/** beside descption */}
        <div className="md:block hidden md:absolute md:right-[7rem] lg:right-[24rem] md:bottom-1/4 lg:top-44  md:w-fit md:h-fit  ">
          <div>
            <div className="lg:text-[52px] md:text-[40px] flex flex-col leading-tight font-medium">
              <span>Listen to</span>{" "}
              <span className="">
                {" "}
                the <span className="text-green-700">amazing</span>
              </span>
              <span>music sound</span>
            </div>
            <p className="my-2">Experience music like never before</p>
          </div>
          <button className="bg-navColor text-white py-2 rounded-md w-3/4 font-semibold">
            Shoping Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
