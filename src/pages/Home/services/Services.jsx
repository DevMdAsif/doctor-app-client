function Services({ icon, name, header }) {
  return (
    <div>
      <div className=" bg-white py-10 hover:bg-[#334155] duration-500 rounded-3xl mx-3 ">
        <div className="flex justify-center ">
          <img className="bg-[#0e82fd] p-6 rounded-xl" src={icon} alt="" />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 hover:text-white text-center">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 px-5 text-center">
            {header}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;
