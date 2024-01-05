import useFetchingData from "../../../Hooks/useFetcingData/useFetchingData";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Banner from "../../../component/banner/Banner";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import Loading from "../../shared/Loading/Loading";

function Doctors() {
  const { data, loading } = useFetchingData("http://localhost:5000/doctors");

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-full mb-20 bg-[#f3f4f6]  xl:px-20 px-8 py-20 ">
      <Banner
        header={"OUR TEAM"}
        name={"Meet Our Doctors"}
        title={"Our Qualified Professionals"}
      />
      <div className="mt-10 pb-10">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            900: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
        >
          {data?.map((doctor) => (
            <SwiperSlide key={doctor._id}>
              <div className=" bg-white  rounded-3xl mx-3 overflow-hidden">
                <div className="flex justify-center cursor-pointer">
                  <img
                    className=" hover:scale-[1.1] rounded-[40px] transition-all ease-in-out duration-500 p-5 "
                    src={doctor.image}
                    alt=""
                  />
                </div>
                <div className="space-y-2 pb-5 ">
                  <h5 className=" text-2xl font-bold tracking-tight  text-gray-900  text-center hover:text-[#0e82fd] duration-500">
                    {doctor.name}
                  </h5>
                  <p className=" font-normal text-gray-700  px-5 text-center">
                    <LocationOnIcon className="text-[#d1d5db] mr-1 text-xs" />
                    {doctor.location}
                  </p>
                  <p className=" font-normal text-gray-700  px-5 text-center">
                    {doctor.category}
                  </p>
                  <p className="text-center">
                    <Rating name="size-medium" defaultValue={doctor.rating} />
                  </p>
                  <button className="primaryButton px-4 py-2 mx-auto">
                    Consult
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center">
        <button className="secondaryButton px-5 ">See all doctors</button>
      </div>
    </div>
  );
}

export default Doctors;
