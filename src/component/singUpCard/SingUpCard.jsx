function SingUpCard({ img, icon, header, title }) {
  return (
    <div className="group">
      <div className=" bg-[#f5f5f5] pl-5 pr-3 py-3 inline-flex rounded-xl  group-hover:border-[#0e82fd] border duration-300 ">
        <img src={img} alt="" />
        <div className="ml-4">
          <h2 className="mt-1 text-2xl font-medium">{header}</h2>
          <p className="w-56 text-sm my-1 text-[#79757a]">{title}</p>
        </div>
        <i className="my-auto mr-5 duration-300  bg-white group-hover:bg-[#0e82fd]  group-hover:text-white p-3 rounded-full">
          {icon}
        </i>
      </div>
    </div>
  );
}

export default SingUpCard;
