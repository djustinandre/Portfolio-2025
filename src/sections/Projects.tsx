'use client'; // This makes the component a Client Component

import careerPathNavigator from "@/assets/images/CareerPathNavigator.png";
import workInProgress from "@/assets/images/work-in-progress.png";
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

const portfolioProjects = [
  {
    company: "Mapúa University",
    year: "2025",
    title: "Career Path Navigator for Students",
    results: [
      { title: "Built an AI-powered tool using Retrieval-Augmented Generation (RAG)" },
      { title: "Helps students explore career paths based on real job data and academic offerings" },
      { title: "Incorporated feedback loop using reinforcement learning for personalized suggestions" }
    ],
    link: "https://github.com/djustinandre/Career-Path-Navigator",
    image: careerPathNavigator,
  },
  // {
  //   company: "Personal Project",
  //   year: "2025",
  //   title: "Real Estate Price Prediction",
  //   results: [
  //     { title: "Building a regression model to estimate housing prices using Python" },
  //     { title: "Exploring feature engineering and model evaluation using scikit-learn" },
  //     { title: "Aiming to understand practical applications of machine learning in real estate" }
  //   ],
  //   link: "",
  //   image: workInProgress,
  // },
  {
    company: "Personal Project",
    year: "2025",
    title: "Image Classification using ML",
    results: [
      { title: "Training a basic neural network on image datasets (e.g. MNIST/CIFAR-10)" },
      { title: "Learning image preprocessing and model tuning in TensorFlow/Keras" },
      { title: "Hands-on practice in building computer vision solutions" }
    ],
    link: "",
    image: workInProgress,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          A collection of academic and personal projects where I explored real-world problems through technology.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 after:-z-10 overflow-hidden after:content-['] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pt-8 px-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}>
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`,
              }}></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:text-white">
                      <span>View Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};