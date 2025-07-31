"use client";

import velumaniImage from "../assets/mes/velumani.png";
import ashneerImage from "../assets/mes/ashneer.png";
import rajShamaniImage from "../assets/mes/raj shamani.png";
import iqlipseNovaImage from "../assets/mes/iqlipse nova.png";
import dineshPaiImage from "../assets/mes/dinesh pai.png";
import deepTech1Image from "../assets/mes/deep tech 1.png";
import deepTech2Image from "../assets/mes/deep tech 2.png";
import deepTech3Image from "../assets/mes/deep tech 3.png";
import deepTech4Image from "../assets/mes/deep tech 4.png";
import infoTech1Image from "../assets/mes/info tech 1.png";
import infoTech2Image from "../assets/mes/info tech 2.png";
import infoTech3Image from "../assets/mes/info tech 3.png";
import infoTech4Image from "../assets/mes/info tech 4.png";
import infoTech5Image from "../assets/mes/info tech 5.png";
import infoTech6Image from "../assets/mes/info tech 6.png";
import famBiz1 from "../assets/mes/famBiz_1.png";
import famBiz2 from "../assets/mes/famBiz_2.png";
import famBiz3 from "../assets/mes/famBiz_3.png";
import famBiz4 from "../assets/mes/famBiz_4.png";
import famBiz5 from "../assets/mes/famBiz_5.png";
import famBiz6 from "../assets/mes/famBiz_6.png";

const keynoteSpeakers = [
  {
    name: "Dr. Arokiaswamy Velumani",
    role: "Founder, Thyrocare",
    type: "Keynote Speaker",
    image: velumaniImage,
  },
  {
    name: "Ashneer Grover",
    role: " Co-Founder of BharatPe,Third Unicorn",
    type: "Distinguished Speaker",
    image: ashneerImage,
  },
];

const influencerSpeakers = [
  {
    name: "Raj Shamani",
    role: " Spotify's #1 Podcast",
    subtitle: "Founder, House of X",
    type: "Influencer",
    image: rajShamaniImage,
  },
  {
    name: "Iqlipse Nova",
    role: "Co-founder - BigBrainco, Singer",
    type: "Influencer",
    image: iqlipseNovaImage,
  },
];

const firesideSpeakers = [
  {
    name: "Dinesh Pai",
    role: "VicePresident, Zerodha",
    type: "Fireside Chat",
    image: dineshPaiImage,
  },
];

const deeptechSpeakers = [
  {
    name: "Tushar Bhatnagar",
    role: "Founder, vidBoard.Ai",
    subtitle: "AI Powered Futures",
    image: deepTech1Image,
  },
  {
    name: "Silky Singh",
    role: "Founder, Finominal",
    image: deepTech3Image,
  },
  {
    name: "Manoj Sankar",
    role: "Founder, Nemo.Care",
    image: deepTech2Image,
  },
  {
    name: "Amit Das",
    role: "Founder, Think360.ai",
    image: deepTech4Image,
  },
];

const infotechSpeakers = [
  {
    name: "Ishan Sukul",
    role: "Co-Founder, Kreo",
    subtitle: "From Hostel Rooms to Board Rooms",
    image: infoTech1Image,
  },
  {
    name: "Shroat Mehta",
    role: "Founder's Office, Kreo",
    image: infoTech5Image,
  },
  {
    name: "Surya Kant",
    role: "Program Director,MeitY",
    image: infoTech6Image,
  },

  {
    name: "Dhwanit Shah",
    role: "Founder, E-Cell MIT",
    image: infoTech4Image,
  },
  {
    name: "Rima Naware",
    role: "Co-Founder, ZigMe",
    image: infoTech3Image,
  },
  {
    name: "Ekta Sharma",
    role: "Founder, E-Value Advisors",
    image: infoTech2Image,
  },
];

const familyBusinessSpeakers = [
  {
    name: "Dr. Sampath Dorairajan",
    role: "Business Coach",
    subtitle: "Family-Owned Organizations",
    image: famBiz1,
  },
  {
    name: "Mr. S S Gopala Rathnam",
    role: "Chairman-SSG",
    subtitle: "Insurance Brokers",
    image: famBiz2,
  },
  {
    name: "Ms. Vathika Pai",
    role: "Proprietor",
    subtitle: "Vathika International Travels",
    image: famBiz3,
  },
  {
    name: "Mr. Vineeth Vij",
    role: "Head - Sales and Marketing",
    subtitle: "Suvikar Enterprises and Vinkap Marketing",
    image: famBiz4,
  },
  {
    name: "Ms. Dhara Bhasin",
    role: "Founder",
    subtitle: "Baylink",
    image: famBiz5,
  },
  {
    name: "Mr. Ahmed Mudassar",
    role: "Partner",
    subtitle: "P.B Abdul Hameed & Sons",
    image: famBiz6,
  },
];

function SpeakerCard({ speaker, aspectRatio = "aspect-[3/4]" }) {
  return (
    <div className="relative group overflow-hidden rounded-lg bg-gradient-to-b from-[#1a2333] to-[#0a1929]">
      <div className={`${aspectRatio} relative`}>
        {/* Main Image */}
        <img
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay - Always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-[#0a1929]/60 to-transparent opacity-90" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-500">
          {/* Default State Content */}
          <div className="transform transition-all duration-500 translate-y-0 group-hover:translate-y-[-8px] group-hover:opacity-0">
            <h3 className="text-white text-lg font-semibold mb-1">
              {speaker.name}
            </h3>
            <p className="text-[#4fd1c5] text-sm">{speaker.role}</p>
          </div>

          {/* Hover State Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0a1929] to-[#0a1929]/80 backdrop-blur-sm transform transition-all duration-500 translate-y-full group-hover:translate-y-0">
            <h3 className="text-white text-lg font-semibold mb-2">
              {speaker.name}
            </h3>
            <p className="text-[#4fd1c5] text-sm mb-2 line-clamp-2">
              {speaker.role}
            </p>
            {speaker.subtitle && (
              <p className="text-[#4fd1c5]/80 text-xs mb-3">
                {speaker.subtitle}
              </p>
            )}
            {speaker.type && (
              <span className="inline-block text-[#90cdf4] text-xs px-3 py-1 rounded-full border border-[#90cdf4] bg-[#0a1929]/50 backdrop-blur-sm">
                {speaker.type}
              </span>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjAuNSIgY3k9IjAuNSIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-25" />
      </div>
    </div>
  );
}

export function Speakers() {
  return (
    <div className="bg-[#0a1929] min-h-screen">
      {/* Keynote Speakers Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4fd1c5] mb-16">
            Keynote Speakers and Influencers' Conclave
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#4fd1c5] mb-6 text-center">
              Keynote Speakers
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {keynoteSpeakers.map((speaker, index) => (
                <div className="w-full mx-auto max-w-xs" key={index}>
                  <SpeakerCard speaker={speaker} />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#4fd1c5] mb-6 text-center">
              Influencers' Conclave
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {influencerSpeakers.map((speaker, index) => (
                <div className="w-full mx-auto max-w-xs" key={index}>
                  <SpeakerCard speaker={speaker} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#4fd1c5] mb-6 text-center">
              Fireside Chat
            </h3>
            <div className="max-w-sm mx-auto">
              {firesideSpeakers.map((speaker, index) => (
                <div className="w-full mx-auto max-w-xs" key={index}>
                  <SpeakerCard speaker={speaker} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deeptech Speakers */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4fd1c5] mb-16">
            Deeptech Speakers
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deeptechSpeakers.slice(0, 2).map((speaker, index) => (
              <div className="max-w-xs w-full mx-auto">
                <SpeakerCard key={index} speaker={speaker} />
              </div>
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deeptechSpeakers.slice(2, 4).map((speaker, index) => (
              <div className="max-w-xs w-full mx-auto">
                <SpeakerCard key={index} speaker={speaker} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infotech Speakers */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4fd1c5] mb-16">
            Infotech Speakers
          </h2>

          {/* First row of 3 cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {infotechSpeakers.slice(0, 3).map((speaker, index) => (
              <div className="max-w-5xl w-full mx-auto">
                <SpeakerCard key={index} speaker={speaker} />
              </div>
            ))}
          </div>

          {/* Second row of 3 cards */}
          <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {infotechSpeakers.slice(3, 6).map((speaker, index) => (
              <div className="max-w-4xl w-full mx-auto">
                <SpeakerCard key={index} speaker={speaker} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Business Speakers */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4fd1c5] mb-16">
            Family Business Speakers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyBusinessSpeakers.map((speaker, index) => (
              <div className="max-w-xs w-full mx-auto">
                <SpeakerCard key={index} speaker={speaker} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Speakers;
