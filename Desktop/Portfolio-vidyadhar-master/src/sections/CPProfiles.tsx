"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Example data for each platform
const profiles = [
  {
    title: 'LeetCode',
    rating: '1800',
    questionsSolved: '450',
    logo: '/assets/leetcode.svg', // Replace with your LeetCode logo path
    profileLink: 'https://leetcode.com/u/vidyadhardinde001/',
    bgColor: 'bg-white',
  },
  {
    title: 'CodeChef',
    rating: '2200',
    questionsSolved: '600',
    logo: '/assets/codechef.png', // Replace with your CodeChef logo path
    profileLink: 'https://www.codechef.com/users/vidyadhar_2',
    bgColor: 'bg-white',
  },
  {
    title: 'HackerRank',
    rating: '1500',
    questionsSolved: '300',
    logo: '/assets/hackerrank.svg', // Replace with your HackerRank logo path
    profileLink: 'https://www.hackerrank.com/profile/vidyadhardinde01',
    bgColor: 'bg-white',
  },
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

const CPProfiles: React.FC = () => {
  return (
    <section id = "cpprofiles" className="flex flex-col items-center justify-center py-12 bg-gradient-to-b from-blue-500 to-blue-100 ">
      <h2 className="text-4xl font-bold text-black mb-10">Competitive Programming Profiles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${profile.bgColor} rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transform transition-shadow`}
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Platform Logo */}
            <div className="w-24 h-24 mb-4">
              <Image src={profile.logo} alt={`${profile.title} logo`} width={96} height={96} />
            </div>

            {/* Platform Title */}
            <h3 className="text-2xl font-semibold mb-2">{profile.title}</h3>

            {/* Profile Details */}
            <p className="text-lg font-medium text-gray-800 mb-1">Rating: {profile.rating}</p>
            <p className="text-lg font-medium text-gray-800">Questions Solved: {profile.questionsSolved}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CPProfiles;
