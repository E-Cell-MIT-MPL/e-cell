import { useRef, useEffect, useState } from "react";

// Custom hook - moved outside component
const useLazySpeakers = (sectionName) => {
  const [speakers, setSpeakers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          try {
            const data = await import("../assets/mesData");
            setSpeakers(data[`${sectionName}Speakers`] || []);
            setIsLoaded(true);
            observer.disconnect();
          } catch (error) {
            console.error(`Failed to load ${sectionName} speakers:`, error);
          }
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionName, isLoaded]);

  return { speakers, sectionRef, isLoaded };
};

// Speaker Card Component
function SpeakerCard({ speaker, aspectRatio = "aspect-[3/4]" }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative group overflow-hidden rounded-lg bg-gradient-to-b from-[#1a2333] to-[#0a1929]">
      <div className={`${aspectRatio} relative`}>
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        )}

        {/* Main Image */}
        <img
          src={speaker.image || "/placeholder.svg"}
          alt={speaker.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient Overlay */}
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

// Speaker Grid Component
const SpeakerGrid = ({ speakers, columns = 2, maxWidth = "max-w-4xl" }) => (
  <div className={`grid md:grid-cols-${columns} gap-6 ${maxWidth} mx-auto`}>
    {speakers.map((speaker, index) => (
      <div className="w-full mx-auto max-w-xs" key={index}>
        <SpeakerCard speaker={speaker} />
      </div>
    ))}
  </div>
);

// Loading Skeleton Component
const LoadingSkeleton = ({ count = 2 }) => (
  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="w-full mx-auto max-w-xs">
        <div className="aspect-[3/4] bg-gray-700 rounded-lg animate-pulse" />
      </div>
    ))}
  </div>
);

// Main Speakers Component
export function Speakers() {
  // Load different speaker sections with intersection observer
  const {
    speakers: keynoteSpeakers,
    sectionRef: keynoteRef,
    isLoaded: keynoteLoaded,
  } = useLazySpeakers("keynote");
  const {
    speakers: influencerSpeakers,
    sectionRef: influencerRef,
    isLoaded: influencerLoaded,
  } = useLazySpeakers("influencer");
  const {
    speakers: firesideSpeakers,
    sectionRef: firesideRef,
    isLoaded: firesideLoaded,
  } = useLazySpeakers("fireside");
  const {
    speakers: deeptechSpeakers,
    sectionRef: deeptechRef,
    isLoaded: deeptechLoaded,
  } = useLazySpeakers("deeptech");
  const {
    speakers: infotechSpeakers,
    sectionRef: infotechRef,
    isLoaded: infotechLoaded,
  } = useLazySpeakers("infotech");
  const {
    speakers: familyBusinessSpeakers,
    sectionRef: familyBusinessRef,
    isLoaded: familyBusinessLoaded,
  } = useLazySpeakers("familyBusiness");

  return (
    <div className="bg-[#0a1929] min-h-screen">
      {/* Keynote Speakers Section */}
      <section ref={keynoteRef} className="my-8 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4fd1c5] mb-16">
            Keynote Speakers and Influencers' Conclave
          </h2>

          {/* Keynote Speakers */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#4fd1c5] mb-6 text-center">
              Keynote Speakers
            </h3>
            {keynoteLoaded ? (
              <SpeakerGrid speakers={keynoteSpeakers} />
            ) : (
              <LoadingSkeleton />
            )}
          </div>

          {/* Influencers Section */}
          <div ref={influencerRef} className="mb-12">
            <h3 className="text-2xl font-semibold text-[#4fd1c5] mb-6 text-center">
              Influencers' Conclave
            </h3>
            {influencerLoaded ? (
              <SpeakerGrid speakers={influencerSpeakers} />
            ) : (
              <LoadingSkeleton />
            )}
          </div>

          {/* Fireside Chat */}
          <div ref={firesideRef}>
            <h3 className="text-2xl font-semibold text-[#4fd1c5] mb-6 text-center">
              Fireside Chat
            </h3>
            {firesideLoaded ? (
              <div className="max-w-sm mx-auto">
                <SpeakerGrid
                  speakers={firesideSpeakers}
                  columns={1}
                  maxWidth="max-w-sm"
                />
              </div>
            ) : (
              <div className="max-w-sm mx-auto">
                <LoadingSkeleton count={1} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Deeptech Speakers */}
      <section ref={deeptechRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4fd1c5] mb-16">
            Deeptech Speakers
          </h2>
          {deeptechLoaded ? (
            <>
              <SpeakerGrid speakers={deeptechSpeakers.slice(0, 2)} />
              <div className="mt-8">
                <SpeakerGrid speakers={deeptechSpeakers.slice(2, 4)} />
              </div>
            </>
          ) : (
            <LoadingSkeleton count={4} />
          )}
        </div>
      </section>

      {/* Infotech Speakers */}
      <section ref={infotechRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4fd1c5] mb-16">
            Infotech Speakers
          </h2>
          {infotechLoaded ? (
            <>
              <SpeakerGrid
                speakers={infotechSpeakers.slice(0, 3)}
                columns={3}
                maxWidth="max-w-5xl"
              />
              <div className="mt-8">
                <SpeakerGrid
                  speakers={infotechSpeakers.slice(3, 6)}
                  columns={3}
                  maxWidth="max-w-5xl"
                />
              </div>
            </>
          ) : (
            <LoadingSkeleton count={6} />
          )}
        </div>
      </section>

      {/* Family Business Speakers */}
      <section ref={familyBusinessRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4fd1c5] mb-16">
            Family Business Speakers
          </h2>
          {familyBusinessLoaded ? (
            <SpeakerGrid
              speakers={familyBusinessSpeakers}
              columns={3}
              maxWidth="max-w-6xl"
            />
          ) : (
            <LoadingSkeleton count={6} />
          )}
        </div>
      </section>
    </div>
  );
}

export default Speakers;
