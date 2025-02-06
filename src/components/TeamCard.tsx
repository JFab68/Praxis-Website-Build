import React from 'react';

interface TeamCardProps {
  member: {
    name: string;
    title: string;
    image: string;
    bio: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img 
        src={member.image} 
        alt={member.name} 
        className="object-cover w-full h-48 mb-4 rounded-md" 
      />
      <h3 className="mb-2 text-xl font-bold text-gray-900">{member.name}</h3>
      <h4 className="mb-2 text-gray-700">{member.title}</h4>
      <p className="text-gray-600">{member.bio}</p>
    </div>
  );
};

export default TeamCard;
