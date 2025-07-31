import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// Contact data for better maintainability
const contactInfo = [
  {
    name: "Ashutosh Swain",
    phone: "+91-88306 91247",
    id: "contact-ashutosh",
  },
  {
    name: "Mahima Sharma",
    phone: "+91-88519 48246",
    id: "contact-mahima",
  },
  {
    name: "Saksham Goel",
    phone: "+91-99285 48797",
    id: "contact-saksham",
  },
];

// Social media links for better maintainability
const socialLinks = [
  {
    href: "https://www.instagram.com/ecell.mit/",
    icon: faInstagram,
    label: "Follow us on Instagram",
    platform: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/ecellmit",
    icon: faLinkedinIn,
    label: "Connect with us on LinkedIn",
    platform: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@e-cellmit",
    icon: faYoutube,
    label: "Subscribe to our YouTube channel",
    platform: "YouTube",
  },
  {
    href: "https://x.com/ecellmit/",
    icon: faTwitter,
    label: "Follow us on X (Twitter)",
    platform: "X",
  },
];

// Location data
const locationInfo = {
  name: "E-Cell MIT Manipal",
  building: "Innovation Centre",
  street: "MIT Rd, Eshwar Nagar",
  city: "Manipal, Karnataka 576104",
  mapsUrl:
    "https://www.google.com/maps/search/e+cell+mit+manipal/@13.3515236,74.7904158,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
};

// Memoized contact item component
const ContactItem = memo(({ contact }) => (
  <li key={contact.id}>
    <address className="text-base md:text-lg not-italic">
      {contact.name}
      <br />
      <a
        href={`tel:${contact.phone.replace(/\s+/g, "")}`}
        className="text-blue-pale text-sm md:text-base block hover:text-blue-mid transition-colors duration-200"
        aria-label={`Call ${contact.name} at ${contact.phone}`}
      >
        {contact.phone}
      </a>
    </address>
  </li>
));

ContactItem.displayName = "ContactItem";

// Memoized social link component
const SocialLink = memo(({ link }) => (
  <a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-pale hover:text-blue-mid transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-mid focus:ring-offset-2 focus:ring-offset-blue-dark rounded"
    aria-label={link.label}
  >
    <FontAwesomeIcon icon={link.icon} size="2x" aria-hidden="true" />
    <span className="sr-only">{link.platform}</span>
  </a>
));

SocialLink.displayName = "SocialLink";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-blue-dark text-blue-light py-12 font-serif"
      role="contentinfo"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Know More Section - Placeholder for future content */}
          <div aria-hidden="true">
            <ul className="space-y-2"></ul>
          </div>

          {/* Contact Us Section */}
          <section className="hidden sm:block w-full px-4 py-6 sm:px-6 md:px-8 lg:px-10 text-center">
            <h4 className="font-bold text-xl md:text-2xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
              ))}
            </ul>
          </section>

          {/* Location Section */}
          <section>
            <h4 className="font-bold text-lg mb-4">Location</h4>
            <div className="mb-4">
              <a
                href={locationInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-mid focus:ring-offset-2 focus:ring-offset-blue-dark rounded"
                aria-label="View E-Cell MIT Manipal location on Google Maps"
              >
                E-Cell MIT Location
              </a>
            </div>
            <address className="text-blue-pale not-italic">
              <p className="font-semibold">{locationInfo.name}</p>
              <p>{locationInfo.building}</p>
              <p>{locationInfo.street}</p>
              <p>{locationInfo.city}</p>
            </address>
          </section>
        </div>

        {/* Divider Line */}
        <hr className="my-6 border-blue-mid" />

        {/* Social Media Section */}
        <section className="text-center">
          <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
          <nav aria-label="Social media links">
            <ul className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <li key={`${link.platform}-${index}`}>
                  <SocialLink link={link} />
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Copyright Section */}
        <div className="text-center text-sm text-blue-light mt-8">
          <p>
            <small>
              &copy; {currentYear} E-Cell MIT Manipal. All rights reserved.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
