import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image'

const CodingProfile = () => {

  const totalStats = {
    questions: '650+',
    contests: '20+',
  };

  const platformQuestions = [
    { name: 'LeetCode', count: '500+' },
    { name: 'GeeksForGeeks', count: '100+' },
    { name: 'CodeChef', count: '40+' },
    { name: 'CodeForces', count: '10+' },
  ];

  const contestStats = [
    { platform: 'LeetCode', contests: 5, rating: 1512 },
    { platform: 'CodeChef', contests: 17, rating: 1441 },
    { platform: 'CodeForces', contests: 2, rating: 715 },
  ];

  const badges = [
    { name: 'Contest Contender', platform: 'Codechef', image: assets.codechef_bronze },
    { name: '50 Days 2025', platform: 'LeetCode', image: assets.fifty_days_2025 },
    { name: '200 Days 2024', platform: 'LeetCode', image: assets.two_hundred_days_2024 },
    { name: '100 Days 2024', platform: 'LeetCode', image: assets.hundred_days_2024 },
    { name: '50 Days 2024', platform: 'LeetCode', image: assets.fifty_days_2024 },
    { name: 'Cpp Silver Level', platform: 'Hackerrank', image: assets.hackerrank_cpp },
    { name: 'Python Bronze Level', platform: 'Hackerrank', image: assets.hackerrank_python },
  ];

  return (
    <div id='coding' className='w-full px-4 md:px-8 lg:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        What I've learnt!
      </h4>

      <h2 className='text-center text-5xl font-Ovo'>
        Coding Profile
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        "Practice isn't the thing you do once you're good. It's the thing you do that makes you good."
      </p>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-12">
        <div className="bg-gray-100 rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Total Questions Solved</h3>
          <p className="text-5xl font-bold">{totalStats.questions}</p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Total Contests</h3>
          <p className="text-5xl font-bold">{totalStats.contests}</p>
        </div>
      </div>

      {/* Platform-wise Questions */}
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Questions Solved</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {platformQuestions.map((platform) => (
          <div key={platform.name} className="bg-gray-100 rounded-xl p-6 shadow-md">
            <span className="font-medium text-gray-600 block mb-2">{platform.name}</span>
            <p className="text-3xl font-bold text-gray-900">{platform.count}</p>
          </div>
        ))}
      </div>

      {/* Contest Stats */}
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contest Rankings</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {contestStats.map((stat) => (
          <div key={stat.platform} className="bg-gray-100 rounded-xl p-6 shadow-md">
            <span className="font-medium text-gray-600 block mb-2">{stat.platform}</span>
            <p className="text-3xl font-bold text-gray-900">{stat.rating}</p>
            <p className="text-sm text-gray-500 mt-2">Contests: {stat.contests}</p>
          </div>
        ))}
      </div>

      {/* Badges */}
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Achievements & Badges</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {badges.map((badge, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
            <Image 
              src={badge.image}
              alt={badge.name}
              className="w-20 h-20 mx-auto mb-3 object-contain rounded-lg"
            />
            <p className="text-center font-medium text-gray-800">{badge.name}</p>
            <p className="text-center text-sm text-gray-500">{badge.platform}</p>
            </div>
        ))}
      </div>


    </div>
  );
};

export default CodingProfile;
