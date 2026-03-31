import "./App.css";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Rating from "./Component/Rating";
import Started from "./Component/Started";
import Pricing from "./Component/Pricing";
import Workflow from "./Component/Workflow";
import Models from "./Component/Models";
import Cart from "./Component/Cart";
import { useState } from "react";

const getData = async () => {
  const res = await fetch("./data.json");
  return res.json();
};

const dataPromise = getData();
// console.log(dataPromise);

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);
  return (
    <div>
      <Navbar cartCount={carts.length} />
      <Banner />
      <Rating />
      {/* name of each tab group should be unique */}
      <div className="mb-[40px] mt-4 tabs w-11/12 md:w-4/12 bg-transparent mx-auto tabs-box justify-center rounded-full ">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full bg-linear-to-br w-40 ${activeTab == "product" ? "from-violet-900 to-fuchsia-500 text-white" : ""}`}
          aria-label="Products"
          onClick={() => setActiveTab("product")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full bg-linear-to-br w-40 ${activeTab == "cart" ? "from-violet-900 to-fuchsia-500 text-white" : ""}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
      {activeTab === "product" && (
        <Models dataPromise={dataPromise} carts={carts} setCarts={setCarts} />
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}

      <Started />
      <Pricing />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
