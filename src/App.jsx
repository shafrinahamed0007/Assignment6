import "./App.css";
import Banner from "./Component/Banner";
import Navbar from "./Component/Navbar";
import Rating from "./Component/Rating";
import Started from "./Component/Started";
import Pricing from "./Pricing";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rating />
      <Started />
      <Pricing />
    </div>
  );
}

export default App;
