import React from 'react';
import Img1 from '../assets/1.png';
import Img2 from '../assets/2.png';
import Img3 from '../assets/3.png';


const projects = [
  {
    id: 1,
    title: 'Social Media Dashboard',
    price: '$100',
    description: 'Custom coding site using HTML and Bootstrap',
    image: Img1,
    link: 'https://coding.infonavigators.com/',
  },
  {
    id: 2,
    title: 'Digital Marketing Company',
    price: '$100',
    description: 'Modren landing page built using HTML and BootStrap CSS.',
    image: Img2,
    link: 'https://madcuts.infonavigators.com/',
  },
  {
    id: 3,
    title: 'Digital Agency',
    price: '$100',
    description: 'Digital Agency site built using the React Or Tailwind CSS',
    image: Img3,
    link: 'https://intellyse.netlify.app/',
  },
];

export default function ProjectSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-orange-500 font-semibold">My Projects</h2>
        <h1 className="text-4xl font-bold mt-2">Explore My Work</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden relative"
          >
            {/* Pricing Badge */}
            <div className="absolute top-[18px] -left-[0px] bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full z-10">
              Start at {project.price}
            </div>

            {/* Image */}
            <div className="w-full h-56 flex items-center justify-center bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">✅ Completed</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 text-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}