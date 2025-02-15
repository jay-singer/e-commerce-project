import React from "react";

function TestimonyComp({ data }) {
  return (
    <div className="">
      {" "}
      <h3 className=" text-center font-bold text-primary lg:text-[36px] my-4">
        What our customers say
      </h3>
      <div className="w-full flex justify-center">
        <div
          className="flex flex-col items-center lg:w-[40%] md:w-[30px)
              gap-4 lg:m-0  "
        >
          <div className=" bg-slate-400 w-[80px] h-[80px] flex rounded-full">
            <img
              className="rounded-full w-full object-cover object-center"
              src={data.imageUrl}
              alt={data.customerName}
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-3 relative">
            <p className="md:text-[16px] text-[13px] w-[310px] md:w-[70%] md:p-0 text-center ">
              {data.testimony}
            </p>

            <h4 className="text-primary font-semibold xl:text-[24px] lg:text[18px] md:text-[16px]">
              {data.customerName}
            </h4>
            <h5 className=" font-[400] text-[16px]">{data.customerTitle}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonyComp;
