import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MTApp from "../components/MTApp";
import Meta from "../components/meta";

const AboutUs = () => {
  return (
    <div>
      <Meta
        title="About E-Cell | Official Entrepreneurship club of MIT Manipal"
        description="Learn about E-Cell MIT Manipal, our mission to foster entrepreneurship, and our efforts to create an innovative startup ecosystem."
      />
      <Navbar />
      {/* Here comes the Meet the Team component */}
      <MTApp />
      {/* Here comes the footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
