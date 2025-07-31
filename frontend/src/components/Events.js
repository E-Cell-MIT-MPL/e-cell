import { flagshipEvents, panIndiaEvents, maheEvents } from "../assets/mesData";
import sp3 from "../assets/mes/MTL Logo.png";

const EventCard = ({ event }) => (
  <div className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
    <div className="relative h-48 w-full">
      <img
        src={event.image}
        alt={event.title}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-[#22d3ee]">{event.title}</h3>
      <p className="text-gray-300 mb-4">{event.description}</p>
      {event.postURL && (
        <a
          href={event.postURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
        >
          Register Now
        </a>
      )}
    </div>
  </div>
);

const Events = () => {
  return (
    <section className="pt-6 px-4" id="events">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-12">
          Events
        </h2>

        <div className="mb-10">
          <h3 className="text-3xl  pb-8 font-bold text-[#22d3ee]  text-center">
            Flagship
          </h3>
          <div className="flex items-center justify-center max-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-1 justify-center gap-8 max-w-xl mx-auto">
              {flagshipEvents.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#22d3ee]  text-center">
            Pan India Events{" "}
          </h3>
          <div className="max-h screen ">
            <div className="text-white flex items-center justify-center ">
              Powered by
              <img
                className="w-24 md:h-16 font-bold"
                align-middle
                src={sp3}
                alt="Manipal Technologies"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {panIndiaEvents.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-[#22d3ee] mb-8 text-center">
            MAHE Events
          </h3>

          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {maheEvents.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
