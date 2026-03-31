import "./App.css";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Rating from "./Component/Rating";
import Started from "./Component/Started";
import Pricing from "./Component/Pricing";
import Workflow from "./Component/Workflow";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rating />
      <Started />
      <Pricing />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
