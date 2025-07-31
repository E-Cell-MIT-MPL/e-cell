import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Meta from "../components/meta";
import { teamMembers } from "../assets/teamMembers";
import TeamMemberCard from "../components/TeamMemberCard";

function MeetTheTeam() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-dark via-blue-mid font-serif to-blue-light">
      <Meta
        title="Meet the Team | E-Cell MIT Manipal"
        description="Meet the passionate team behind E-Cell MIT Manipal, driving innovation and entrepreneurship among students and startups."
      />

      <header className="bg-blue-dark shadow-md">
        <Navbar />
      </header>
      <br />
      {/* Main Content */}
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Meet the Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard member={member} key={index} />
          ))}
        </div>
      </main>
      <br></br>

      {/* Footer */}
      <footer className="bg-blue-dark py-4 text-center text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default MeetTheTeam;
