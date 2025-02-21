import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogList } from "../components/blogCard";
import Meta from '../components/meta';

// Import your local image
import blogScreenshot from '../assets/images/blogScreenshot.png';
import blogScreenshot1 from '../assets/images/blogScreenshot1.png';
import blogScreenshot2 from '../assets/images/blogScreenshot2.png';
import blogScreenshot3 from '../assets/images/blogScreenshot3.png';
import blogScreenshot4 from '../assets/images/blogScreenshot4.png';
import blogScreenshot5 from '../assets/images/blogScreenshot5.png';


const sampleBlogData = [
  {
    image: blogScreenshot,
    title: "Startup Scoop - Edition 16",
    description: "Thapy makes therapy accessible, Jagriti Yatra fosters startup dreams, loss leader pricing draws customers, and tech firms overhire from FOMO and market growth.",
    postURL: "https://www.linkedin.com/pulse/startup-scoop-edition-16-ecellmit-dni7f/?trackingId=qEBPn%2F58SLqObIxdTvrNiw%3D%3D"
  },
  {
    image: blogScreenshot1,
    title: "Startup Scoop - Edition 15",
    description: "Blackfrog Technologies boosts healthcare logistics in Fiji, AI revolutionizes finance, Ola Electric faces revenue decline, and drones improve medical supply access.",
    postURL: "https://www.linkedin.com/pulse/startup-scoop-edition-15-ecellmit-sew8f/"
  },
  {
    image: blogScreenshot2,
    title: "Startup Scoop - Edition 14",
    description: "Instrumus expands rapid prototyping services, Acko disrupts insurance with a digital model, RBI sees a 52% increase in reserves income, and major IPOs like Swiggy and Navi are shaping India's economy.",
    postURL: "https://www.linkedin.com/pulse/startup-scoop-edition-14-ecellmit-fbycf/?trackingId=pEiC%2BLhqSpCUc077wVSALw%3D%3D"
  },
  {
    image: blogScreenshot3,
    title: "Startup Scoop - Edition 13",
    description: "FightHer offers free self-defense classes for women; InvisaWear provides smart jewelry for safety; Parul Gulati thrives in the hair industry; Canva’s creative journey continues, and Lijjat Papad, started with 80 Rs by seven women, is now worth 1600 Cr.",
    postURL: "https://www.linkedin.com/pulse/startup-scoop-edition-13-ecellmit-evqof/?trackingId=ea2RiOGfS0CrVs%2F4ialzMQ%3D%3D"
  },
  {
    image: blogScreenshot4,
    title: "Startup Scoop - Edition 12",
    description: "Budget 2024-25 sparks mixed reactions, while WazirX faces a $230M hack, Soothe Healthcare expands, Google targets growth with HubSpot, Zomato’s CEO becomes a billionaire, and Musk shifts HQs to Texas over California’s law.",
    postURL: "https://www.linkedin.com/pulse/startup-scoop-edition-12-ecellmit-ewm4f/?trackingId=fLFOi8X7Rz2JUNV6BNT%2Bdw%3D%3D"
  },
  {
    image: blogScreenshot5,
    title: "Startup Scoop - Edition 11",
    description: "SWARM Robotics wins at Regatta 2.0, Unikon.ai raises $2M, OneCoin’s $15B scam exposed, Elon Musk innovates with SpaceX, Flipkart launches Super.money UPI app, and BluSmart drives India’s EV revolution",
    postURL: "https://www.linkedin.com/pulse/startup-scoop-edition-11-ecellmit-jkh3f/?trackingId=1Gmk0%2Fq6TNi9w29r9Ybzug%3D%3D"
  }


];


const BlogPage = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Meta
        title="Blogs | E-Cell | MIT Manipal"
        description={`Get comprehensive startup support with E-Cell MIT Manipal, including mentorship, funding opportunities, and incubation services.
        Access resources, blog posts, and articles from E-Cell MIT Manipal to learn more about entrepreneurship, startups, and business tips.
        `}
      />
      <Navbar />

      <main>
        <section className="py-12 bg-gradient-to-br from-blue-dark via-blue-mid to-blue-light">
          <div className="container mx-auto px-4 md:px-10 lg:px-16">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-blue-pale">Latest Startup Scoops</h1>
            </header>

            <BlogList posts={sampleBlogData} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;