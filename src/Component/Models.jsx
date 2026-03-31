import React, { use } from "react";

const Models = ({ dataPromise }) => {
  const datas = use(dataPromise);
  console.log(datas);
  return (
    <div>
      {/* text content */}
      <div></div>
      {/* main content */}
      <div className="grid md:w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {datas.map((data) => (
          <div className="card md:w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">{data.tag}</span>
              <div className="flex justify-between">
                <img
                  className="w-[30px] h-[30px]"
                  src={data.icon}
                  alt={data.name}
                />
                <h2 className="text-3xl font-bold">{data.name}</h2>
                <span className="text-xl">
                  ${data.price}/{data.period}
                </span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {data.features.map((feature, index) => {
                  return (
                    
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-500">✔</span>
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <button className="w-full sm:w-auto bg-linear-to-br from-violet-900 to-fuchsia-500 transition-all px-8 py-4 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-3 group text-white active:scale-95">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
