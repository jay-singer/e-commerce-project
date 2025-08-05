import React from "react";

function SlideShow3() {
  const sections = {
    Customer: [
      ["1", "Secure and hassle-free shopping experience"],
      ["2", "Transparent pricing with no hidden fees"],
      ["3", "Customer support that values your trust"],
    ],
    Seller: [
      ["1", "Seamless product listing and management"],
      ["2", "Fair marketplace policies promoting trust"],
      ["3", "Analytics to help grow your business"],
    ],
    Admin: [
      ["1", "Ensuring platform integrity and security"],
      ["2", "Managing disputes fairly and efficiently"],
      ["3", "Upholding trust and transparency standards"],
    ],
  };

  return (
    <div
      className="relative text-white w-full bg-red-700 border border-red-950 rounded-md"
      style={{
        backgroundImage:
          "url('/assets/frame/tem-rysh-F6-U5fGAOik-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute  inset-0 bg-black bg-opacity-65"></div>

      {/* Content */}
      <div className=" z-10 relative  text-white rounded-lg shadow-lg  h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl  font-bold text-center text-white">
            Why Choose <span>B.Quality</span>?
          </h1>
          <p className="text-md text-center max-w-xl   text-white mt-2">
            <span className="text-navColor">B.Quality</span> is dedicated to
            building an honest and trustworthy e-commerce platform, where
            customers shop with confidence, sellers grow their businesses, and
            admins ensure fairness.
          </p>
        </div>

        <div className="flex justify-evenly gap-6 mt-6 mx-6 mb-6">
          {/* Customer, Seller, Admin sections */}
          {Object.keys(sections).map((role, index) => (
            <div key={index} className="flex-1 ">
              <h2 className="text-lg font-semibold text-navColor ">
                {role} Side
              </h2>
              <div className="mt-4 space-y-3">
                {sections[role].map(([num, content], idx) => (
                  <div key={idx} className="flex items-center gap-2 relative">
                    <span className="text-sm font-medium bg-blue-600 text-white px-3 py-1 rounded-full">
                      {num}
                    </span>
                    <span className="text-sm text-gray-300 text-nowrap ">
                      {content}
                    </span>

                    {/* Vertical Line between each section except the last one */}
                    {idx < sections[role].length - 1 && (
                      <div className="absolute left-4 top-full h-8 border-l border-gray-400"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideShow3;
