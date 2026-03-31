import "./App.css";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Rating from "./Component/Rating";
import Started from "./Component/Started";
import Pricing from "./Component/Pricing";
import Workflow from "./Component/Workflow";
import Models from "./Component/Models";

const getData = async () => {
  const res = await fetch("./data.json");
  return res.json();
};

const dataPromise = getData();
// console.log(dataPromise);

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rating />
      <Models dataPromise={dataPromise} />

      <Started />
      <Pricing />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
