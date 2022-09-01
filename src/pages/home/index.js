import Navbar from "../../components/Navbar/Navbar";
import "../../assets/styles/Home.style.css"
import Landing from "../../components/Landing/Landing"

const index = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Landing/>
    </div>
  );
};

export default index;
