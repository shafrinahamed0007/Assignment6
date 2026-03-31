import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartModels = ({ data, carts, setCarts }) => {
  const [buyNow, setBuyNow] = useState(false);

  useEffect(() => {
    const isFound = carts.find((item) => item.id === data.id);
    if (isFound) {
      setBuyNow(true);
    } else {
      setBuyNow(false);
    }
  }, [carts, data.id]);

  const handleBuyNow = () => {
    const isFound = carts.find((item) => item.id === data.id);

    if (isFound) {
      toast.warning(`${data?.name} already in cart`);
      return;
    }

    setCarts([...carts, data]);
    setBuyNow(true);
    toast.success(`${data?.name} added successfully!`);
  };
  return (
    
    <div>
      
      <div className="card md:w-96 bg-base-100 shadow-sm p-5 rounded-[30px]  ">
        <div className="card-body">
          <div className="flex justify-between">
            <img
              className="w-[30px] h-[30px]"
              src={data?.icon}
              alt={data?.name}
            />
            <span
              className={`
  badge badge-xs badge-warning p-3 rounded-lg
  ${data?.tagType === "best-seller" && "text-[#bb4d00] bg-[#fef3c6] "}: ${data.tagType === "new" && "text-green-700 bg-green-300"}
`}
            >
              {data?.tag}
            </span>
          </div>
          <h2 className="text-[24px] font-bold">{data?.name}</h2>
          <p>{data?.description}</p>
          <span className="text-xl">
            ${data?.price}/{data?.period}
          </span>

          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {data?.features.map((feature, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              );
            })}
          </ul>
          <button
            onClick={handleBuyNow}
            className={`w-full sm:w-auto bg-linear-to-br mt-4 ${buyNow ? "from-violet-400 to-fuchsia-500 " : "from-violet-900 to-fuchsia-500"} transition-all px-8 py-4 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-3 group text-white active:scale-95`}
          >
            {buyNow ? "Already Buy" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModels;
