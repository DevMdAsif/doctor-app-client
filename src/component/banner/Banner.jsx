function Banner({ header, name, title }) {
  return (
    <div className="text-center space-y-3">
      <p className="bg-[#e3f2f9] w-52 mx-auto py-3 rounded-full  text-[#0e82fd]">
        {header}
      </p>

      <h2 className=" text-5xl font-bold text-[#1f2937]">{name}</h2>
      <p className="text-[#757b88] text-lg">{title}</p>
    </div>
  );
}

export default Banner;
