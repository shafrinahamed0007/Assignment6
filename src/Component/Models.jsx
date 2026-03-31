import React, { use } from "react";
import CartModels from "./CartModels";

const Models = ({ dataPromise, carts, setCarts }) => {
  const datas = use(dataPromise);
  console.log(datas);
  return (
    <div>
      {/* text content */}
      <div></div>
      {/* main content */}
      <div className="grid md:w-10/12 mx-auto gap-[30px] md:grid-cols-2 lg:grid-cols-3  ">
        {datas.map((data) => (
         <CartModels key={data.id} data={data} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Models;
