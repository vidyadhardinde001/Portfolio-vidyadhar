"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Example data for each artwork
const artworks = [
  
  { title: 'Transport Layer Post', image: '/art/16.png', link: 'https://www.canva.com/design/DAGILSGEWXQ/CEBO0Ta5YouT1J5-0HJhhQ/edit', bgColor: 'bg-white' },
  { title: 'Web Frameworks Post', image: '/art/13.png', link: 'https://www.canva.com/design/DAGMHVQT5vk/i3JZEuexPDEcFOVF0v9ZkQ/edit', bgColor: 'bg-white' },
  { title: 'STL Post', image: '/art/5.png', link: 'https://www.canva.com/design/DAF3azsAHw0/OGYfFMbUfWD5MSIahK6LSg/edit', bgColor: 'bg-white' },
  { title: 'Binary Search Post', image: '/art/10.png', link: 'https://www.canva.com/design/DAGL9Xb0sVI/3UBj107HfDJhG7VGFXXeDg/edit', bgColor: 'bg-white' },
  { title: 'Techfusion 2k24 Poster', image: '/art/6.png', link: 'https://www.canva.com/design/DAGRBjKwy-0/VlBCICGlglBegXnqXf7MzA/edit', bgColor: 'bg-white' },
  { title: 'CPP Bootcamp Poster', image: '/art/7.png', link: 'https://www.canva.com/design/DAGZSJyk65c/nRaH85RRU_wjrU1W9UrHWA/edit', bgColor: 'bg-white' },
  { title: 'WCPC 2K24 Wallpaper', image: '/art/1.png', link: 'https://www.canva.com/design/DAF_GVJlKZM/fuEyzgVyLZEP2A2dHWOtcg/edit', bgColor: 'bg-white' },
  { title: 'WCPC 2K24 Poster', image: '/art/12.png', link: 'https://www.canva.com/design/DAF9iv900Zs/DQdyZ_mbF5Nv5Zwttc2iNA/edit', bgColor: 'bg-white' },
  { title: 'CWC MB Poster', image: '/art/8.png', link: 'https://www.canva.com/design/DAGawnVfSK4/PSemIBJEWbcGvUgS2A33ow/edit', bgColor: 'bg-white' },
  { title: 'CWC AB Poster', image: '/art/9.png', link: 'https://www.canva.com/design/DAFzk7_rDic/3KZuSwZ1Y3EuY4CTSFUwtg/edit', bgColor: 'bg-white' },
  { title: 'SAIT MB Poster', image: '/art/4.png', link: 'https://www.canva.com/design/DAGC3gc3JZw/le3Mbt4MP9KTf6VvjtqUQw/edit', bgColor: 'bg-white' },
  { title: 'WCPC 2K25 Video', image: '/art/11.png', link: 'https://www.canva.com/design/DAGQnlt-WR8/AS85MSfrGoWlVQL0AZtisQ/edit ', bgColor: 'bg-white' },
  { title: 'CWC Winners Poster', image: '/art/3.png', link: 'https://www.canva.com/design/DAGShzKXRJA/UMxWcQt7_k92Rn9beCc5KA/edit', bgColor: 'bg-white' },  
  { title: 'Blog', image: '/art/14.png', link: 'https://www.canva.com/design/DAGPt0mi0I4/w_Bblrl0GPJXdk0jJ1yRnA/edit?ui=eyJEIjp7IlAiOnsiQiI6ZmFsc2V9fX0', bgColor: 'bg-white' },
  { title: 'PPT', image: '/art/15.png', link: 'https://www.canva.com/design/DAGIBKx8uc4/M346wDKwHnK_3zJ-6aHYew/edit', bgColor: 'bg-white' },
  
];

const cardVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const ArtSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState(8); // Number of visible cards
  const defaultVisibleCards = 8; // Default number of cards shown initially

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 4); // Show 4 more cards on each click
  };

  const handleShowLess = () => {
    setVisibleCards(defaultVisibleCards); // Reset to default number of cards
  };

  return (
    <section id="art-section" className="flex flex-col items-center justify-center py-12 bg-gradient-to-b from-purple-500 to-purple-100">
      <h2 className="text-4xl font-bold text-black mb-10">Canva Section</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {artworks.slice(0, visibleCards).map((artwork, index) => (
          <motion.a
            key={index}
            href={artwork.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${artwork.bgColor} rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transform transition-shadow`}
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Artwork Image */}
            <div className="w-48 h-48 mb-4">
              <Image src={artwork.image} alt={artwork.title} width={192} height={192} className="rounded-lg" />
            </div>

            {/* Artwork Title */}
            <h3 className="text-2xl font-semibold mb-2">{artwork.title}</h3>
          </motion.a>
        ))}
      </div>

      <div className="flex space-x-4 mt-8">
        {visibleCards < artworks.length && (
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-purple-600 text-white text-lg font-bold rounded-lg shadow hover:bg-purple-700"
          >
            Show More
          </button>
        )}

        {visibleCards > defaultVisibleCards && (
          <button
            onClick={handleShowLess}
            className="px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-lg shadow hover:bg-red-700"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default ArtSection;
