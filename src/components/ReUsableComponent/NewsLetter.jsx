import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="bg-green-100 text-slate-800 flex justify-between mt-5 p-5 rounded-lg">
      <img
        src="/assets/products/ElectronicImage/07ca3a2a3603c0f59f5fd17c2cf6ee8d3342fafd.png"
        alt=""
        className="lg:w-[200px] w-[150px] object-cover object-center md:block hidden"
      />
      <div className="flex-1  flex flex-col items-center justify-evenly">
        <h2 className="font-semibold">Join Our Newsletter</h2>
        <p className="text-center">
          Sign up for deals, new products and promotions
        </p>
        <div className=" border-b border-black flex items-center gap-2 px-2 text-gray-800">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="email"
            id="Email"
            className=" bg-transparent w-full py-1 px-4 outline-none"
          />
          <Link to={`#`}>Signup</Link>
        </div>
      </div>
      <img
        src="/assets/products/ElectronicImage/71afd395b628dddf967efb911899b4f87fe5b2ef.png"
        alt=""
        className="lg:w-[200px] w-[150px] object-cover object-center md:block hidden"
      />
    </div>
  );
};

export default NewsLetter;
