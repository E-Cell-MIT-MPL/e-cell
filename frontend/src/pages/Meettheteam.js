import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/meta';

const teamMembers = [
  {
    name: "Ashutosh Swain",
    role: "Chairperson",
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQFhXMuGyXGwqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708528663186?e=1740009600&v=beta&t=ATI85z_xhg1dSN08rB-k6zE3oo_j6doMAlrTktzBu8w",
    message: "Ideas are easy, execution is everything.",
    linkedin: "https://linkedin.com/in/ashutosh-swain-ecell",
    instagram: " https://www.instagram.com/itzswain/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Durgesh Hegde",
    role: "Deputy Chairperson",
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQHxgBDJWVyCSQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708283162218?e=1740009600&v=beta&t=52PJGdxYPSIgckbOeLZ6eq2UePtZf1rARRYZac2DkBY",
    message: "It always seems impossible until its done.",
    linkedin: "linkedin.com/in/durgesh-hegde-82291925a",
    instagram: "https://www.instagram.com/durgeshhegde/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Abhimanyu Singh",
    role: "Deputy Chairperson",
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQEBZNZChkerLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726084727731?e=1740009600&v=beta&t=INmE6R0CmrJTmrJp-7rlFvyg0uCpKvWibkx9M6GLNXw",
    message: "Mindset is what seperates the best from the rest.",
    linkedin: "linkedin.com/in/abhimanyu-singh-chouhan-375b10251",
    instagram: "https://www.instagram.com/_abhimanyu0103_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Mudit Gupta",
    role: "Startup Guidance and Development Head",
    photo: "https://i.ibb.co/SV8wTpG/jps.jpg",
    message: "The best way to predict future is to create it.",
    linkedin: "linkedin.com/in/mudit-gupta-92a8891b3",
    instagram: "https://i.ibb.co/SV8wTpG/jps.jpg",
  },
  {
    name: "Aaryav Jain",
    role: "Startup Guidance and Development Head",
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQG8G1ojOQNPaw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687979559932?e=1740009600&v=beta&t=gfNSJD9P9S8kpZkTemyuLkYL_JMyx5Z2doMiH_TIBQA",
    message: "If oppurtunities dosen't come knocking,build a door.",
    linkedin: "linkedin.com/in/aaryav-jain-400107235",
    instagram: " https://www.instagram.com/j.aaryav/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Ayushi Wadhwa",
    role: "Technical Head",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQFlWYUNDSSopg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729778141178?e=1740009600&v=beta&t=IhDrFAy_u8Z490Jun_wBhfO9Gfqk-FZSR1r8L5ASM0U",
    message: "Keep learning keep growing.",
    linkedin: "linkedin.com/in/ayushi-wadhwa-",
    instagram: "https://www.instagram.com/ayushiw18/?utm_source=ig_web_button_share_sheet ",
  },
  {
    name: "Rishita Garg",
    role: "Technical Head",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQEHb0kvCDU4kQ/profile-displayphoto-shrink_400_400/B56ZPDSihLHIAg-/0/1734148238051?e=1740009600&v=beta&t=N8Xh4CdBPD5TixnjK6ufeOeS6L_2DlC5LBi1qdiIR98",
    message: "Growth and comfort doesn't coexist.",
    linkedin: "linkedin.com/in/rishita-g",
    instagram: "https://www.instagram.com/rishitagarg19?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== ",
  },
  {
    name: "Saksham Goel",
    role: "Events and PR Head",
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQH7okr5tmtGVQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696229988425?e=1740009600&v=beta&t=nqzI_urjiZXLN2NAI93PM2J2ucA_bipIRlsKKZDy7rA",
    message: "Take the risk or loose the chance.",
    linkedin: "linkedin.com/in/saksham-goel-254165270",
    instagram: "https://www.instagram.com/sakshamgoel2708/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Mahima Sharma",
    role: "Events and PR Head",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQFCTWg4TKdVRg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718241256453?e=1740009600&v=beta&t=eYOHTwYpJDL3HYPOFMKDQD8lLijHNknutaIPJXTyBis",
    message: "Sometimes you gotta risk it to make it.",
    linkedin: "linkedin.com/in/mahima-sharma-71611a29a",
    instagram: "https://www.instagram.com/__mahimasharma_/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Shaurya Mittal",
    role: "Internal Relations& Resource Management Head",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQHGJbGS-AAuUw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700605436291?e=1740009600&v=beta&t=IghVjE7dWA5ug-PeV_8J_Ni4oTiJKkjbGBGUce-M5is",
    message: "I may not know the problem, but I always have a solution.",
    linkedin: "linkedin.com/in/shauryamittal06",
    instagram: "https://www.instagram.com/shauryamittal_06/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Arnav Sawant",
    role: "Social Media and Graphics Design Head",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQFZejWvVQVHtw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712861458744?e=1740009600&v=beta&t=Ckkqq658nL335rrzzgsod4i3bvDtMmBaEvH68_Bzhvc",
    message: "Those who give up will never know how close they were to success.",
    linkedin: "linkedin.com/in/arnav-sawant-63a173249",
    instagram: "https://www.instagram.com/arnavsawant.19/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Sakshath Shetty",
    role: "Social Media and Graphics Design Head",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQE5bXetpiBLsw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726853577523?e=1740009600&v=beta&t=_WmR1TCtAvOJCfAyqrKZ8jZmReASWoxS8vQMkYoFzVU",
    message: "It is difficult but it is possible.",
    linkedin: " linkedin.com/in/sakshath-shetty-212a25252",
    instagram: " https://www.instagram.com/sakshath_shetty__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "Kritika Sinha",
    role: "Corporate and Alumni Relations Head",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQGCoWvX1oSYcg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730400765348?e=1740009600&v=beta&t=dM7ygkdiKTJEEuba8Hd0lgBwapVB2CSC1Ro6oP7mPVQ",
    message: "Trusting the process fueled by hardwork.",
    linkedin: "linkedin.com/in/kritika-sinha-14219824b ",
    instagram: " https://www.instagram.com/kkrityy_/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "Aditya Nair",
    role: "Corporate and Alumni Relations Head",
    photo: "https://media.licdn.com/dms/image/v2/D5603AQGf2gx2vnhErA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725806196618?e=1740009600&v=beta&t=eLTm2QVw-5TFCLOT5kVbanvDybm2cdPN4-cnfwz2w8k",
    message: "Believe you can and you are halfway there.",
    linkedin: " linkedin.com/in/aditya-nair-bba57b270",
    instagram: " https://www.instagram.com/adityanair1904/?utm_source=ig_web_button_share_sheet",
  },
];

function MeetTheTeam() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-dark via-blue-mid font-serif to-blue-light">
      <Meta
        title='Team | E-Cell MIT Manipal'
        description="Meet the passionate team behind E-Cell MIT Manipal, driving innovation and entrepreneurship among students and startups."
      />

      <header className="bg-blue-dark shadow-md">
        <Navbar />
      </header>
      <Meta title='Meet The Team | E-Cell | MIT Manipal' />
      <br></br>
      {/* Main Content */}
      <main className="flex-grow">
        <h1 className="text-4xl font-bold text-center text-white mb-10">Meet the Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-blue-dark rounded-lg border-4 border-gold-400 shadow-2xl overflow-hidden group transform transition duration-500 hover:scale-105 hover:shadow-3xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mt-4 transition duration-300"
                />
              </div>
              <div className="relative bottom-0 w-full p-4 bg-opacity-80 bg-blue-dark text-center transition-colors duration-300 z-10 group-hover:bg-opacity-90">
                <h2 className="text-white text-xl font-semibold">{member.name}</h2>
                <p className="text-sm text-gray-300">{member.role}</p>
                <p className="text-sm font-serif text-gray-300">{member.message}</p>
              </div>
              <div className="absolute bottom-4 w-full p-2 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-blue-500"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:text-blue-500"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
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