'use client';

import computer from '@/assets/images/computer2.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import { Typewriter } from 'react-simple-typewriter';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return (
    <section id="home" className="py-24 sm:py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Background grain */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* Animated orbits */}
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      {/* Main content */}
      <div className="Container">
        <div className="flex flex-col items-center">
          <Image
            src={computer}
            className="w-[150px] h-[150px]"
            alt="Rocket Laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
              <div className="bg-green-500 w-2.5 h-2.5 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Blast Off into New Projects</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <header className="animate-fadeUp">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center mt-8 tracking-wide">
              Hi! I'm Justin,
            </h1>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center mt-2 tracking-wide tracking-wide bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent animate-fadeUp [animation-delay:0.2s]">
              <Typewriter
                words={['an Engineering Student', 'a Web Developer', 'an AI Enthusiast']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
          </header>

          <p className="mt-4 text-center text-white/60 md:text-lg animate-fadeUp [animation-delay:0.4s]">
            I design user-focused websites and explore the world of AI — learning and building one project at a time.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 animate-fadeUp [animation-delay:0.6s]">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            <span className="font-semibold">View Projects</span>
            <span aria-hidden="true">
              <ArrowDown className="size-4" />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            <span role="img" aria-label="Waving hand">👋</span>
            <span className="font-semibold">Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
};
