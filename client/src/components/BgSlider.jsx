import React, { useState } from 'react';
import { assets } from '../assets/assets';

const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    }

    return (
        <section className='py-24 lg:py-32 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                        See the <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>difference</span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        Experience our AI-powered precision with this interactive before and after comparison
                    </p>
                </div>

                {/* Interactive Slider Container */}
                <div className='max-w-4xl mx-auto'>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border-4 border-white bg-gray-100">
                        {/* Background Image (Before) */}
                        <img 
                            src={assets.image_w_bg}
                            alt="Before - with background"
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
                        />

                        {/* Foreground Image (After) */}
                        <img 
                            src={assets.image_wo_bg}
                            alt="After - background removed"
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                        />

                        {/* Slider Line */}
                        <div 
                            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 pointer-events-none"
                            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                        >
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-violet-500 flex items-center justify-center">
                                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Range Slider */}
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={sliderPosition} 
                            onChange={handleSliderChange}
                            className="absolute inset-0 w-full h-full z-30 opacity-0 cursor-pointer"
                        />

                        {/* Labels */}
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Before
                        </div>
                        <div className="absolute bottom-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            After
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className='text-center mt-8'>
                        <p className='text-gray-600'>
                            <span className='inline-flex items-center gap-2'>
                                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
                                </svg>
                                Drag to compare before and after
                            </span>
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className='grid md:grid-cols-3 gap-8 mt-20'>
                    <div className='text-center p-6'>
                        <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                            </svg>
                        </div>
                        <h3 className='text-xl font-bold text-gray-900 mb-2'>Precision Accuracy</h3>
                        <p className='text-gray-600'>Advanced AI detects even the finest details and edges</p>
                    </div>
                    
                    <div className='text-center p-6'>
                        <div className='w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd' />
                            </svg>
                        </div>
                        <h3 className='text-xl font-bold text-gray-900 mb-2'>Lightning Fast</h3>
                        <p className='text-gray-600'>Process any image in under 3 seconds</p>
                    </div>
                    
                    <div className='text-center p-6'>
                        <div className='w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z' clipRule='evenodd' />
                            </svg>
                        </div>
                        <h3 className='text-xl font-bold text-gray-900 mb-2'>High Quality</h3>
                        <p className='text-gray-600'>Maintains original image resolution and quality</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BgSlider;
