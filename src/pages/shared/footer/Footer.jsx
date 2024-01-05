import logo from "../../../assets/images/logo.png";
import moment from "moment";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const years = moment().format("YYYY");

  return (
    <footer className="h-full pt-14 pl-2 xl:mx-20 ">
      <div className="md:grid pb-10">
        <div className="md:col-start-1 md:col-end-13 xl:col-end-3">
          <img className="" src={logo} alt="" />
          <p className="text-[#6b7280] mt-5 xl:pr-0 pr-10 text-sm md:w-96 xl:w-72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            dignissim nunc, id maximus ex. Etiam nec dignissim elit, at
            dignissim enim.
          </p>
        </div>
        <div className="mt-7 md;col-start-1 xl:col-start-3">
          <h2 className="text-2xl text-[#1f2937]">Company</h2>
          <div className="text-[#6b7280] text-sm mt-3 space-y-2">
            <p>Home</p>
            <p>Specialities</p>
            <p>consult</p>
          </div>
        </div>
        <div className="mt-4 md:mt-7 md:col-start-6 xl:col-start-6">
          <h2 className="text-2xl  text-[#1f2937]">Specialities</h2>
          <div className="text-[#6b7280] text-sm mt-3 space-y-2">
            <p>Neurology</p>
            <p>Cardiologist</p>
            <p>Dentist</p>
          </div>
        </div>
        <div className="mt-4 md:mt-7 md:col-start-11 xl:col-end-9">
          <h2 className="text-2xl text-[#1f2937]">Contact Us</h2>
          <div className="text-[#6b7280] text-sm mt-3 space-y-2 tracking-tight">
            <p>3556 Beech Street, USA</p>
            <p>
              +1 315 369 5943 <br /> doccure@example.com
            </p>
          </div>
        </div>
        <div className="inline-grid mt-4 md:mt-7 md:col-start-1 md:col-end-13 xl:col-start-12">
          <h2 className="text-2xl text-[#1f2937]">Join Our Newsletter</h2>
          <div className=" inline-flex mx-3 mt-3">
            <input
              className="h-10 px-2 w-52 focus:outline-none shadow-md"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <button className=" bg-[#0e82fd] py-[9px] px-4 text-white rounded-r-lg">
              Submit
            </button>
          </div>
          <div className="inline-flex mt-5 space-x-3">
            <a
              href=""
              className="bg-[#6b7280] p-1 rounded-full hover:bg-[#0e82fd] duration-700"
            >
              <FaFacebookF className=" text-white " />
            </a>

            <a href="">
              <FaTwitter className="socialIcon" />
            </a>
            <a href="">
              <FaInstagram className="socialIcon" />
            </a>
            <a href="" className="">
              <FaLinkedinIn className="socialIcon" />
            </a>
          </div>
        </div>
      </div>
      <hr className="mT-6 border-gray-200 sm:mx-auto lg:mt-8" />
      <span className="block md:text-lg text-base text-[#7889a0] text-center  my-5">
        Copyright © {years} . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
