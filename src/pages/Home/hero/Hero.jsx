import dog from "../../../assets/images/heroImg/dog.png";
import cat from "../../../assets/images/heroImg/cat.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Hero() {
  return (
    <div className="h-full md:grid lg:grid-cols-2 lg:mt-28 lg:pb-20">
      <div className="lg:inline-flex ml-24 hidden">
        <img className="h-[525px] w-72" src={dog} alt="" />
        <img className="h-80 ml-5" src={cat} alt="" />
      </div>
      <div className="text-center lg:text-start mt-10 space-y-5">
        <h2 className="font-semibold sm:text-4xl lg:text-6xl text-[30px] text-[#0e82fd] lg:pr-36 xl:pr-52">
          We take care <span className="text-black mt-3">of Your Pets</span>
        </h2>
        <p className="text-[#6b7280] md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="inline-flex mt-5">
          <button className="text-white bg-[#0e82fd] duration-500 rounded-lg hover:bg-white hover:text-[#1976d2] border-2 border-[#1976d2] sm:block px-5 py-3 mr-2 md:px-9 tracking-tight md:py-4">
            Start a Consult
          </button>
          <button className="hover:text-white hover:bg-[#0e82fd] duration-500 rounded-lg bg-white text-[#1976d2] border-2 border-[#1976d2] sm:block px-5 py-3 md:px-9 md:py-4 tracking-tight md:letter">
            Schedule a Call
          </button>
        </div>
        <div className="bg-[#e4f5ef] mx-2 text-start mt-10 py-7 px-3 rounded-xl">
          <p className="text-[#6b7280] mb-2">
            Date <span className="text-black">Thu, Mar 24, 2023</span>
          </p>
          <div className="inline-grid space-y-2">
            <p className="text-[#6b7280]">
              Location <LocationOnIcon className="text-[#0e82fd]" />
            </p>
            <p>San Diego Branch</p>
          </div>
          <button className="text-white rounded-lg duration-500 mt-2 hover:bg-[#03274e] bg-[#0e82fd] w-full py-3 font-bold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
