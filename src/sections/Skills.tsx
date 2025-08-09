'use client'; // This makes the component a Client Component

import Image from 'next/image';

// Web Development
import HTML from '@/assets/html.png';
import CSS from '@/assets/css.png';
import JavaScript from '@/assets/javascript.png';
import Tailwind from '@/assets/tailwind.png';
import Node from '@/assets/node.png';
import ReactImg from '@/assets/react.png';

// Python & Libraries
import Python from '@/assets/python.png';
import Pandas from '@/assets/pandas.png';
import Matplotlib from '@/assets/matplotlib.png';
import ScikitLearn from '@/assets/scikit-learn.png';
import TensorFlow from '@/assets/tensorflow.png';

// Databases
import SQLite from '@/assets/sqlite.png';

// Programming & Math
import Cpp from '@/assets/c++.png';
import LinearAlgebra from '@/assets/linear algebra.png';
import Calculus from '@/assets/calculus.png';

const skills = [
  // Web Development
  { name: 'HTML', image: HTML },
  { name: 'CSS', image: CSS },
  { name: 'JavaScript', image: JavaScript },
  { name: 'Tailwind CSS', image: Tailwind },
  { name: 'Node.js', image: Node },
  { name: 'React', image: ReactImg },

  // Python & Libraries
  { name: 'Python', image: Python },
  { name: 'Pandas', image: Pandas },
  { name: 'Matplotlib', image: Matplotlib },
  { name: 'Scikit-learn', image: ScikitLearn },
  { name: 'TensorFlow', image: TensorFlow },

  // Databases
  { name: 'SQLite', image: SQLite },

  // Programming & Math
  { name: 'C++', image: Cpp },
  { name: 'Linear Algebra', image: LinearAlgebra },
  { name: 'Calculus', image: Calculus },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 sm:py-28 md:py-32 z-0">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
            Technologies I&apos;ve Used
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Skills & Tools
        </h2>
        <p className="text-center text-white/60 md:text-lg mt-4 max-w-xl mx-auto">
          These are the technologies I frequently work with across web development, backend, AI/ML, and mathematics.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-12 md:mt-20">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-gray-800 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:border-white/20"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
              <p className="mt-4 font-medium text-sm text-white/80 tracking-wide">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
