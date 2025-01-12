import React from "react";

const Testimony = () => {
  const arrObject = [
    {
      imageUrl: "/assets/profile/profile1.jpeg",
      testimony:
        "I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.",
      customerName: "Angelina Jay",
      customerTitle: "Co-founder",
    },
  ];
  return (
    <div className=" text-center text-textColor">
      <h3 className=" text-center font-bold text-primary lg:text-[36px] my-4">
        What our customers say
      </h3>
      <div className="w-full flex justify-center">
        {arrObject.map((value, index) => {
          return (
            <div
              className="flex flex-col items-center lg:w-[40%] md:w-[30px)
              gap-4 lg:m-0 "
              key={index}
            >
              <img
                className="rounded-[100%] w-[88px] h-[88px] object-cover object-center"
                src={value.imageUrl}
                alt={value.customerName}
              />
              <div className="flex flex-col gap-3">
                <p className="md:text-[16px] text-[13px] w-[310px] md:w-full md:p-0 text-center ">
                  {value.testimony}
                </p>
                <h4 className="text-primary font-semibold xl:text-[24px] lg:text[18px] md:text-[16px]">
                  {value.customerName}
                </h4>
                <h5 className=" font-[400] text-[16px]">
                  {value.customerTitle}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimony;
