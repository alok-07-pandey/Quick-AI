import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { dummyPublishedCreationData } from '../assets/assets';
import { Heart } from 'lucide-react';

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h1 className='text-lg font-semibold'>Creations</h1>
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {creations.map((creation, index) => (
          <div key={index} className='relative group'>
            <img
              src={creation.content}
              alt="creation"
              className='w-full h-full object-cover rounded-lg'
            />

            <div className='absolute inset-0 flex flex-col justify-end p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg'>
              <p className='text-sm hidden group-hover:block'>{creation.prompt}</p>
              <div className='flex gap-1 items-center mt-2 self-end'>
                <p>{creation.likes.length}</p>
                <Heart
                  className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                    creation.likes.includes(user?.id)
                      ? 'fill-red-500 text-red-600'
                      : 'text-white'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
