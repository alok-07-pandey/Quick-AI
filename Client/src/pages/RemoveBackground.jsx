import { Eraser, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

const RemoveBackground = () => {
  const [input, setInput] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Uploaded file:", input);
    // Background removal logic here
    // Example: setProcessedImage(URL.createObjectURL(input));
  };

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>

      {/* Left column */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#111a1b]' />
          <h1 className='text-xl font-semibold'>Background Removal</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type='file'
          accept='image/*'
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600'
          required
        />
        <p className='text-xs text-gray-500 font-light mt-1'>
          Support JPG, PNG, and other image formats
        </p>

        <button
          type='submit'
          className='w-full flex justify-center items-center gap-2 
            bg-gradient-to-r from-[#1bbf9e] to-[#73c218] text-white px-4 py-2 mt-6
            text-sm rounded-lg cursor-pointer'
        >
          <Eraser className='w-5' />
          Remove Background
        </button>
      </form>

      {/* Right column */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Eraser className='w-5 h-5 text-[#530e4f]' />
          <h1 className='text-xl font-semibold'>Processed Image</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          {processedImage ? (
            <img src={processedImage} alt="Processed" className="max-w-full rounded-md" />
          ) : (
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <Eraser className='w-9 h-9' />
              <p>Upload an image and click "Remove Background" to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
