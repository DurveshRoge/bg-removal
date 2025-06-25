import React from 'react'
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
    return (
        <section className='py-24 lg:py-32 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='text-center mb-20'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                        What our <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>customers</span> say
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        Join thousands of satisfied users who trust our AI-powered background removal
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((item, index) => (
                        <div key={index} className='group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100'>
                            {/* Quote Icon */}
                            <div className='absolute -top-4 left-8'>
                                <div className='w-8 h-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center'>
                                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z' clipRule='evenodd' />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='pt-4 space-y-6'>
                                {/* Text */}
                                <p className='text-gray-600 leading-relaxed text-sm'>
                                    "{item.text}"
                                </p>

                                {/* Rating */}
                                <div className='flex items-center gap-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className='w-4 h-4 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                        </svg>
                                    ))}
                                </div>

                                {/* Author */}
                                <div className='flex items-center gap-4 pt-4 border-t border-gray-100'>
                                    <img 
                                        className='w-12 h-12 rounded-full object-cover border-2 border-violet-100' 
                                        src={item.image} 
                                        alt={item.author} 
                                    />
                                    <div>
                                        <p className='font-semibold text-gray-900'>{item.author}</p>
                                        <p className='text-sm text-violet-600'>{item.jobTitle}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className='absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className='text-center mt-16'>
                    <div className='inline-flex items-center gap-2 bg-violet-100 text-violet-800 px-6 py-3 rounded-full text-sm font-medium'>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd' />
                        </svg>
                        Trusted by 100,000+ users worldwide
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials