import React from "react";
import { toast } from "react-toastify";
import emptyCart from "../assets/emptyCart.webp";

const Cart = ({ carts, setCarts }) => {
  const totalprice = carts.reduce((sum, item) => sum + item.price, 0);
  const handleRemoveAllItem = () => {
    setCarts([]);
    toast.error("Remove All Item");
  };

  const handleDeleteSingleItem = (item) => {
    const filterArray = carts.filter((c) => c.id !== item.id);
    setCarts(filterArray);
    toast.warning(`${item.name} remove from cart`);
  };
  return (
    <div className="md:p-10 p-5">
      <h2 className="text-2xl font-bold my-10">Your Cart</h2>
      {carts.length === 0 ? (
        <div className="md:w-6/12 mx-auto">
          <img src={emptyCart} alt="" />
        </div>
      ) : (
        <div>
          {carts.map((item) => (
            <div
              className="flex bg-[#f9fafc] items-center justify-between border border-zinc-200 rounded-lg p-5 mt-4"
              key={item.id}
            >
              <div className="flex gep-4 ">
                <div>
                  <img className="flex justify-center" src={item?.icon} alt={item?.name} />
                </div>
                <div className="ml-4 text-[#101727]">
                  <h2 className="font-semibold ">{item?.name}</h2>
                  <p>${item?.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleDeleteSingleItem(item)}
                className="btn bg-transparent text-[#ff3980]"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between bg-[#f9fafc]  rounded-lg text-2xl text-[#101727] p-5 mt-[24px]">
            <div>Total:</div>
            <div className="text-[#101727] font-bold text-[24px]">
              ${totalprice}
            </div>
          </div>

          <button
            onClick={handleRemoveAllItem}
            className="mt-5 w-full bg-[linear-gradient(180deg,#4f39f6_0%,#9514fa_100%)] transition-all px-8 py-4 rounded-2xl font-semibold text-lg  flex items-center gap-3 group text-white "
          >
            <p className="mx-auto items-center">Proceed To Checkout</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
