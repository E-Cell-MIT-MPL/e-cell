import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Meta from "../components/meta";

import pictureE10Summit from "../assets/images/picture_e10_summit.jpg";
import logoBusinessClinic from "../assets/images/logo_business_clinic.png";

const InitiativeCard = ({ image, title, description }) => {
  return (
    <div className="bg-blue-dark rounded-lg shadow-lg overflow-hidden w-80 border-4 border-transparent transform transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1 hover:rotate-1 hover:shadow-white hover:border-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center text-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-white-600 text-sm mb-4 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

const Initiatives = () => {
  const initiatives = [
    {
      image: pictureE10Summit,
      title: "E-10 Summit",
      description: `The inaugural E10 Entrepreneurship Summit, held on January 16, 2024, brought together the entrepreneurial communities of MAHE colleges. Organized by E-Cell, MIT Manipal, the event tackled challenges like securing sponsorships, boosting student interest, and improving networking. Insightful discussions set the stage for a stronger entrepreneurial ecosystem in Manipal, inspiring future collaborations and innovation.`,
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQHkJQEjTr3knw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723120932662?e=1740614400&v=beta&t=2mCjuIp_BiBCk6oIU9qI0U7H_ef_lFq5bHjAQLIwVbM",
      title: "Startup Scoop",
      description: `Startup Scoop is a bi-monthly newsletter where the latest news and updates from the 
dynamic world of business and entrepreneurship are delivered. Trending topics, and inspiring success stories are highlighted to keep readers 
informed. Startups from MAHE are given a spotlight in each edition, with their journeys and 
achievements showcased.`,
    },
    {
      image: logoBusinessClinic,
      title: "Business Clinic",
      description: `Business Clinic is a structured approach to helping startups refine ideas, validate 
feasibility, and identify target markets. It emphasizes solving key problems, understanding 
customer needs, and analyzing competition. Startups test core functionality, gather user 
feedback, and launch simplified products, with progress guided by key performance 
metrics to ensure market readiness.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col ">
      <Meta title="Initiatives | E-Cell | MIT Manipal" />
      <Navbar />

      <main className="flex justify-center items-center gap-8 flex-wrap flex-grow bg-gradient-to-br from-blue-dark via-blue-mid to-blue-light p-10">
        {initiatives.map((initiative, index) => (
          <InitiativeCard
            key={index}
            image={initiative.image}
            title={initiative.title}
            description={initiative.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Initiatives;
