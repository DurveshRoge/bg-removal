import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Upload = () => {
    const { removeBG } = useContext(AppContext)

    return (
        <section className='py-24 lg:py-32 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 relative overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0'>
                <div className='absolute top-20 left-10 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse'></div>
                <div className='absolute bottom-20 right-10 w-64 h-64 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000'></div>
            </div>
            
            <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                {/* Header */}
                <div className='mb-12'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                        Ready to try? <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Start now</span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                        Join millions of users who trust our AI-powered background removal tool
                    </p>
                </div>

                {/* Upload Section */}
                <div className='bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-2xl mx-auto'>
                    <div className='space-y-8'>
                        {/* Upload Icon */}
                        <div className='w-20 h-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto'>
                            <svg className='w-10 h-10 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z' clipRule='evenodd' />
                            </svg>
                        </div>
                        
                        {/* Upload Button */}
                        <div>
                            <input onChange={e => removeBG(e.target.files[0])} type="file" id="upload2" accept='image/*' hidden />
                            <label htmlFor='upload2' className='group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white text-lg font-semibold rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg'>
                                <img width={24} src={assets.upload_btn_icon} alt="" className='group-hover:scale-110 transition-transform duration-300' />
                                Choose your image
                                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                                </svg>
                            </label>
                        </div>
                        
                        {/* Info */}
                        <div className='space-y-2'>
                            <p className='text-gray-600'>
                                Drag and drop or click to select • JPG, PNG, WebP • Max 10MB
                            </p>
                            <div className='flex items-center justify-center gap-6 text-sm text-gray-500'>
                                <span className='flex items-center gap-1'>
                                    <svg className='w-4 h-4 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                    </svg>
                                    Free forever
                                </span>
                                <span className='flex items-center gap-1'>
                                    <svg className='w-4 h-4 text-blue-500' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
                                    </svg>
                                    Secure & private
                                </span>
                                <span className='flex items-center gap-1'>
                                    <svg className='w-4 h-4 text-purple-500' fill='currentColor' viewBox='0 0 20 20'>
                                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd' />
                                    </svg>
                                    Instant results
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upload