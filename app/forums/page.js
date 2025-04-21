import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CodeIcon, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button"

const topics = [
  {
    title: "Python",
    img: "https://img.icons8.com/color/512/python.png",
    description: "Let's Discuss Everything Related to Python",
    slug: "python-discuss"
  },
  {
    title: "JavaScript",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_9D--oM24TfLTNy_h-UBlLVk2zkC9Aimlw&s",
    description: "Talk about everything from ES6 to Node.js",
    slug: "js-discuss"
  },
  {
    title: "Blockchain",
    img: "https://cdn-icons-png.freepik.com/512/8757/8757976.png",
    description: "Explore decentralized tech, cryptocurrencies, and smart contracts.",
    slug: "blockchain-discuss"
  },
  {
    title: "Machine Learning",
    img: "https://cdn-icons-png.flaticon.com/512/8618/8618881.png",
    description: "Discuss algorithms, models, and data science.",
    slug: "ml-discuss"
  },
  {
    title: "DevOps",
    img: "https://cdn-icons-png.flaticon.com/512/5266/5266429.png",
    description: "CI/CD, Docker, Kubernetes and more.",
    slug: "devops-discuss"
  }
];

const Forums = () => {
  return (
    <div className='container mx-auto px-4 my-28'>
      <h1 className='text-4xl text-center font-bold mb-12'>Discussion Forums</h1>
      <div className='flex flex-wrap justify-center gap-6'>
        {topics.map((topic) => (
          <div
            key={topic.title}
            className='w-full sm:w-[45%] lg:w-[30%] h-[300px] bg-slate-100 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300'
          >
            <div className="w-[60px] h-[60px] relative mb-4">
              <Image src={topic.img} alt={topic.title} fill className='object-contain' />
            </div>
            <h2 className='text-2xl font-semibold capitalize mb-2'>{topic.title}</h2>
            <p className='text-gray-600 mb-4 text-sm px-2'>{topic.description}</p>
            <CodeIcon className="w-5 h-5 text-green-600 my-2" />
            <div className="mt-auto">
            <Link href={`/forum/${topic.slug}`}>
              <Button className="mt-4 px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all">
                <MessageSquare size={16} className="inline mr-2" />
                Discuss Now
              </Button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
