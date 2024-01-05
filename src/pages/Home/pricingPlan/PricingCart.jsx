function PricingCart({ header, suggestion, price, services }) {
  return (
    <div>
      <div>
        <div
          className={`flex flex-col  ${
            suggestion ? "bg-slate-800 text-white" : " bg-white"
          } p-6 mx-auto max-w-lg h-[520px] hover:bg-[#1e293b] duration-500 text-center text-gray-900 rounded-[40px] border group relative`}
        >
          <h3 className="mb-4 text-2xl font-semibold group-hover:text-white">
            {header}
          </h3>
          {suggestion && <p className="text-[#0f7ff7]">{suggestion}</p>}
          <div className="flex justify-center items-baseline my-8 ">
            <span
              className={`mr-2 text-5xl font-extrabold  group-hover:text-white ${
                suggestion ? " text-white" : "text-[#1682fd]"
              }`}
            >
              ${price}
            </span>
            <span
              className={`group-hover:text-white ${
                suggestion ? " text-white" : "text-slate-700"
              }`}
            >
              /Visit
            </span>
          </div>
          <ul
            role="list"
            className={`mb-8 space-y-4 text-left text-[#707280] #6b7280 group-hover:text-white ${
              suggestion ? " text-white" : "text-slate-700"
            }`}
          >
            {services.map((service, index) => (
              <li key={index} className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center h-screen">
            <a
              href="#"
              className="text-white bg-[#0e82fd] hover:bg-white hover:text-[#0e82fd] font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCart;
