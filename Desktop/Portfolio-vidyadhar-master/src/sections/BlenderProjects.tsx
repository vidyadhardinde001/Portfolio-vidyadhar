"use client";
import React, { useState } from 'react';

const projects = [
  {
    title: 'Blender Project 1',
    videoUrl: '/blender/blend.mkv', // Replace with real video URLs
  },
  {
    title: '2D Web Element',
    videoUrl: '/blender/blend-2.webm',
  },
  {
    title: 'Nintendo Switch',
    videoUrl: '/blender/blend-3.mp4',
  },
  {
    title: 'Twin Bombers',
    videoUrl: '/blender/blend-4.mp4',
  },
  {
    title: 'Blender Project 5',
    videoUrl: '/blender/blend-5.mp4',
  },
  {
    title: 'Basic Robot Walkcycle',
    videoUrl: '/blender/blend-6.mp4',
  },
  {
    title: 'Blender Project 7',
    videoUrl: '/blender/blend-7.mp4',
  },
  {
    title: 'Blender Project 8',
    videoUrl: '/blender/blend-8.mp4',
  },
  {
    title: 'Blender Project 9',
    videoUrl: '/blender/blend-9.mp4',
  },
  {
    title: 'Blender Project 10',
    videoUrl: '/blender/blend-10.mp4',
  },
  {
    title: 'Blender Project 11',
    videoUrl: '/blender/blend-11.mp4',
  },
  {
    title: 'Blender Project 12',
    videoUrl: '/blender/blend-12.mp4',
  },
];

const BlenderProjects: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div id ="blender-projects" className="flex flex-col items-center w-full">
      <h1 className="text-4xl font-bold mt-20 mb-16">My Blender Projects</h1>

      {/* Grid of Video Cards */}
      <div className="max-w-[90vw] w-full px-4">
        {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {projects.slice(rowIndex * 3, rowIndex * 3 + 3).map((project, index) => (
              <div key={index} className="relative w-full h-52 bg-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105 group cursor-pointer" onClick={() => handleVideoClick(project.videoUrl)}>
                {/* Overlay that disappears on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-0" />
                <video
                  src={project.videoUrl}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  autoPlay
                />
                <div className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-70 p-1 rounded">
                  {project.title}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal for Video Playback */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <video
            src={selectedVideo}
            className="w-[80%] h-[80%] object-contain"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the video
          />
        </div>
      )}
    </div>
  );
};

export default BlenderProjects;
