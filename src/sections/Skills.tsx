import React from 'react';

const skillsData = [
  { title: 'Blender', description: '3D Modeling', icon: '🖌️', color: 'bg-blue-400' },
  { title: 'Adobe After Effects', description: 'Motion Graphics', icon: '🖌️', color: 'bg-blue-400' },
  { title: 'C++', description: 'Programming Language', icon: '💻', color: 'bg-blue-300' },
  { title: 'Java', description: 'Programming Language', icon: '☕', color: 'bg-blue-500' },
  { title: 'Docker', description: 'Containerization', icon: '🐋', color: 'bg-blue-400' },
  { title: 'React', description: 'JavaScript Library', icon: '⚛️', color: 'bg-blue-600' },
  { title: 'Adobe Illustrator/ Canva', description: 'Designing', icon: '🌐', color: 'bg-blue-500' },
  { title: 'Git', description: 'Version Control', icon: '🔗', color: 'bg-blue-500' },
  { title: 'MySQL', description: 'Database', icon: '🗄️', color: 'bg-blue-700' }
];

const Skills: React.FC = () => {
  return (
    <div id= "skills" className="flex flex-col items-center p-8 bg-blue-200">
      {/* Heading */}
      <h2 className="text-5xl font-bold mt-8 mb-12 text-center">My Skills</h2>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className={`${skill.color} p-6 rounded-xl text-white flex flex-col items-center text-center shadow-lg transform hover:scale-105 transition-transform`}
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.title}</h3>
            <p className="text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
