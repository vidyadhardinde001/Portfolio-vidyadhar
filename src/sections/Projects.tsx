"use client";
import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    title: 'Project 1 : RoomRadar',
    status: 'In Progress',
    videoUrl: 'https://link-to-your-video-1.com',
    pdfUrl: '/assets/roomradar.pdf', // Add the PDF URL here
    githubUrl: 'https://github.com/vidyadhardinde001/CNmain', // Add the GitHub URL here
    metrics: [
      { label: 'Completion', value: 'Not Deployed', status: 'success' },
      { label: 'Description', value: 'An Android App For Finding PG Accommodations near Walchand College of Engineering.' },
      { label: 'Tech Stack', value: 'Android Studio  |  Java  |  Firebase' },
      { label: 'Duration', value: '3 months' },
    ],
  },
  {
    title: 'Project 2: Siddhivinayak Engineers Website',
    status: 'Completed',
    videoUrl: 'https://link-to-your-video-2.com',
    pdfUrl: '/assets/SE.pdf', // Add the PDF URL here
    githubUrl: 'https://github.com/vidyadhardinde001/SDoffficial', // Add the GitHub URL here
    metrics: [
      { label: 'Completion', value: 'Deployed', status: 'progress' },
      { label: 'Description', value: 'A SEO Optimized for Siddhivinayak Engineers integrating modern techniques of Web Developement' },
      { label: 'Tech Stack', value: 'ReactJS | TailwindCSS | TypeScript | MongoDB | NextJS | NodeJS' },
      { label: 'Duration', value: '2 months' },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id= "projects" className="px-4 py-12 bg-gradient-to-b from-blue-200 to-blue-100 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600 mb-4">Status: {project.status}</p>
            <div className="grid grid-cols-1 gap-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold">{metric.label}</p>
                  <p
                    className={`text-lg font-bold ${
                      metric.status === 'success' ? 'text-green-500' : 'text-gray-700'
                    }`}
                  >
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
            <motion.div
              className="mt-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <video
                src={project.videoUrl}
                controls
                className="w-full rounded-lg"
              />
            </motion.div>

            {/* PDF Link */}
            <motion.div
              className="mt-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 text-white text-center p-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                View Project Details (PDF)
              </a>
            </motion.div>

            {/* GitHub Link */}
            <motion.div
              className="mt-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 text-white text-center p-3 rounded-lg shadow hover:bg-gray-700 transition duration-300"
              >
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
