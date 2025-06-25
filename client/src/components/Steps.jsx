import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
    const steps = [
        {
            icon: assets.upload_icon,
            title: "Upload Image",
            description: "Select any image from your device. Supports JPG, PNG, and WebP formats up to 10MB.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: assets.remove_bg_icon,
            title: "AI Processing",
            description: "Our advanced AI algorithms automatically detect and remove the background with precision.",
            color: "from-violet-500 to-purple-500"
        },
        {
            icon: assets.download_icon,
            title: "Download Result",
            description: "Get your image with transparent background instantly. High-quality results guaranteed.",
            color: "from-fuchsia-500 to-pink-500"
        }
    ];

    return (
        <section className='relative py-24 lg:py-32 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center mb-20'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                        How it <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>works</span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        Three simple steps to get professional results in seconds
                    </p>
                </div>

                {/* Steps Grid */}
                <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
                    {steps.map((step, index) => (
                        <div key={index} className='relative group'>
                            {/* Step Number */}
                            <div className='flex items-center mb-8'>
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                    {index + 1}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className='hidden md:block flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent ml-4'></div>
                                )}
                            </div>

                            {/* Card */}
                            <div className='bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100'>
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <img src={step.icon} alt={step.title} className='w-full h-full object-contain filter brightness-0 invert' />
                                </div>

                                {/* Content */}
                                <h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-violet-600 transition-colors duration-300'>
                                    {step.title}
                                </h3>
                                <p className='text-gray-600 leading-relaxed'>
                                    {step.description}
                                </p>

                                {/* Hover Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                            </div>

                            {/* Connecting Line for Mobile */}
                            {index < steps.length - 1 && (
                                <div className='md:hidden flex justify-center my-8'>
                                    <div className='w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent'></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className='text-center mt-20'>
                    <div className='inline-flex items-center gap-2 bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-medium'>
                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                        </svg>
                        Fast, accurate, and completely free
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps