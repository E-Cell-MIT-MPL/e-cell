import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from "../placeholder.svg";
import bg from "./bg.jpg";
import { Typewriter } from "react-simple-typewriter";

import { initiatives, stats } from "../assets/homeData";

import StatCard from '../components/statCardHome';
import InitiativeCard from '../components/initiativeCardHome';
import InteractiveImage from '../components/interactiveImgHome';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    // Parallax Handling
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const parallaxStyle = { transform: `translateY(${scrollY * 0.5}px)` };

    const initiativeRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            const sections = gsap.utils.toArray('.initiative-card');
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: initiativeRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + initiativeRef.current.offsetWidth
                }
            });
        }, containerRef);

        return () => context.revert();
    }, [])

    return (
        <div className="min-h-screen bg-img src={bg} text-white overflow-hidden">
            <Navbar/>

            <main>
                {/* Hero Section */}
                <section
  className="relative min-h-screen flex items-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${bg})`,
    width: 'auto',
    height: 'auto',
  }}
>
                    {/* Starry Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('')]" style={parallaxStyle}></div>
                    </div>

                    {/* Hero Container */}
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32 relative z-10">
                        <div className="grid md:grid-cols-2 gap-8 items-center text-center">
                            {/* Hero 3d effect Image */}
                            <div className="relative aspect-square w-full max-w-md mx-auto">
                                <InteractiveImage
                                    source={logo}
                                    alt="E-Cell MIT Manipal Logo"
                                    className="w-full h-full object-contain rounded-3xl"
                                />
                            </div>

                            <div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        <span>
          <Typewriter
            words={["WELCOME TO E-CELL MIT...", "EMPOWERING INNOVATION", "BUILDING THE FUTURE"]}
            loop={true} // Set to true for infinite looping
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={200}
            delaySpeed={1000}
          />
        </span>
      </h1>

                                <p className="text-xl text-gray-300 mb-8 font-montserrat">
                                </p>
                                <Link
                                    to="/aboutus"
                                    target="_blank"
                                    className="bg-blue-dark hover:bg-blue-mid text-white px-8 py-4 text-lg rounded-full transition-colors
                                    duration-200 ease-out">
                                    Know More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="py-24 bg-blue-dark">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">Results that matter</h2>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <StatCard key={index} number={stat.number} label={stat.label} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Initiatives Section */}
                <section ref={initiativeRef} className="py-32 bg-blue-dark border-t border-blue-mid/30 overflow-hidden">
                    <div className="container mx-auto px-8 sm:px-10 lg:px-12">
                        <h2 className="text-4xl font-bold mb-12 text-center">OUR INITIATIVES</h2>

                        <div ref={containerRef} className="flex overflow-x-hidden space-x-0">
                            {initiatives.map((initiative, index) => (
                                <div key={index} className="initiative-card flex-shrink-0 w-full px-4">
                                    <InitiativeCard heading={initiative.heading} description={initiative.description} isEnabled={initiative.isEnabled} link={initiative.link} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blogs Section */}
                <section className="py-16 bg-gradient-to-br from-blue-dark via-blue-mid to-blue-light">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-around">
                            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                                <h2 className="text-4xl font-bold mb-4">Discover Our Insights</h2>
                                <p className="text-xl text-gray-300">
                                    Explore Blogs & Stay Updated with E-Cell MIT!
                                </p>
                            </div>
                            <Link
                                to=""
                                className="inline-block bg-blue-dark hover:bg-blue-mid text-white font-bold py-3 px-6 rounded-full transition-colors"
                            >
                                Explore Blogs
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Animated Marquee Section - TODO */}
                {/* <section className="py-16 bg-purple-900 bg-opacity-20 overflow-hidden">
                    <div className="whitespace-nowrap animate-marquee">
                        <span className="text-4xl font-bold mx-4">E-Cell MIT Manipal</span>
                        <span className="text-4xl font-bold mx-4">Innovate • Create • Lead</span>
                        <span className="text-4xl font-bold mx-4">E-Cell MIT Manipal</span>
                        <span className="text-4xl font-bold mx-4">Innovate • Create • Lead</span>
                    </div>
                </section> */}

                {/* To Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 z-50 bg-blue-mid hover:bg-blue-light text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
                    aria-label="Scroll to top"
                >
                    <svg className="w-6 h-6 transform rotate-180" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </button>
            </main>

          <Footer/>
        </div>
    );
}

export default HomePage;