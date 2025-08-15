import React, { useState } from 'react';
import { Sparkles, Scissors } from 'lucide-react';

const RemoveObject = () => {
  const [input, setInput] = useState('');
  const [object, setObject] = useState('');
  const [processedImage, setProcessedImage] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Uploaded file:", input);
    console.log("Object to remove:", object);

    // Example: Call your backend or AI API here to process the image
    // After processing, update the processedImage state with the returned image URL
    // setProcessedImage('processed-image-url');
  };

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* Left column */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#0e4c53]' />
          <h1 className='text-xl font-semibold'>Object Removal</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type='file'
          accept='image/*'
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600'
          required
        />

        <p className='mt-6 text-sm font-medium'>Describe Your Image</p>
        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object}
          rows={4}
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300'
          placeholder='e.g., watch or spoon, Only single object name'
          required
        />

        <button
          type='submit'
          className='w-full flex justify-center items-center gap-2 
                    bg-gradient-to-r from-[#0b358e] to-[#0d9dc4] text-white px-4 py-2 mt-6
                    text-sm rounded-lg cursor-pointer'
        >
          <Scissors className='w-5' />
          Remove Object
        </button>
      </form>

      {/* Right column */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Scissors className='w-5 h-5 text-[#c176bd]' />
          <h1 className='text-xl font-semibold'>Processed Image</h1>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          {processedImage ? (
            <img src={processedImage} alt="Processed" className="max-w-full rounded-md" />
          ) : (
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Scissors className='w-9 h-9' />
              <p>Upload an image and click "Remove Object" to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveObject;
