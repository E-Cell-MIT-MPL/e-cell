import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const TeamMemberCard = React.memo(({ member }) => {
  const linkedinUrl = member.linkedin;
  const instagramUrl = member.instagram;

  return (
    <div className="group relative bg-blue-dark rounded-2xl shadow-2xl hover:shadow-blue-mid/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-blue-mid/30">
      <div className="relative overflow-hidden">
        <img
          src={member.photo}
          alt={`${member.name} - ${member.role}`}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/60 via-transparent to-transparent"></div>

        {/* Always Visible Social Links */}
        <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-mid/80 backdrop-blur-sm p-2 rounded-full text-blue-pale hover:bg-blue-light hover:text-blue-dark transition-all duration-200 transform hover:scale-110 shadow-lg"
              aria-label={`${member.name} LinkedIn Profile`}
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-mid/80 backdrop-blur-sm p-2 rounded-full text-blue-pale hover:bg-blue-light hover:text-blue-dark transition-all duration-200 transform hover:scale-110 shadow-lg"
              aria-label={`${member.name} Instagram Profile`}
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-gradient-to-br from-blue-dark to-blue-dark/90">
        <h3 className="text-xl font-bold text-blue-pale mb-2 group-hover:text-blue-light transition-colors duration-200">
          {member.name}
        </h3>
        <p className="text-blue-light group-hover:text-blue-mid font-medium text-sm uppercase tracking-wide mb-4 border-b border-blue-mid/40 pb-2">
          {member.role}
        </p>

        {member.message && (
          <div className="mt-4 relative">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="absolute -top-2 -left-1 text-blue-mid text-lg opacity-70"
            />
            <blockquote className="text-blue-pale/80 text-sm leading-relaxed italic pl-6 border-l-3 border-blue-mid">
              {member.message}
            </blockquote>
          </div>
        )}
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-light/5 via-transparent to-blue-mid/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

export default TeamMemberCard;
