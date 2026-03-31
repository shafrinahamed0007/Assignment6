import "./App.css";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Rating from "./Component/Rating";
import Started from "./Component/Started";
import Pricing from "./Component/Pricing";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rating />
      <Started />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
