import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Header = () => {

    const { removeBG } = useContext(AppContext)

    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50'>
            {/* Background Elements */}
            <div className='absolute inset-0'>
                <div className='absolute top-10 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse'></div>
                <div className='absolute top-20 right-10 w-72 h-72 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000'></div>
                <div className='absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000'></div>
            </div>
            
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                    {/* Left Side - Content */}
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <div className='inline-flex items-center px-4 py-2 bg-violet-100 text-violet-800 text-sm font-medium rounded-full border border-violet-200'>
                                ✨ AI-Powered Background Removal
                            </div>
                            <h1 className='text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight'>
                                Remove 
                                <span className='block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent'>
                                    backgrounds
                                </span>
                                instantly
                            </h1>
                            <p className='text-xl text-gray-600 leading-relaxed max-w-lg'>
                                Professional-grade AI technology that removes backgrounds from any image in seconds. Perfect for e-commerce, marketing, and creative projects.
                            </p>
                        </div>
                        
                        {/* Upload Section */}
                        <div className='space-y-4'>
                            <input onChange={e => removeBG(e.target.files[0])} type="file" id="upload1" accept='image/*' hidden />
                            <label htmlFor='upload1' className='group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white text-lg font-semibold rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg'>
                                <img width={24} src={assets.upload_btn_icon} alt="" className='group-hover:scale-110 transition-transform duration-300' />
                                Upload your image
                                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='currentColor' viewBox='0 0 20 20'>
                                    <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                                </svg>
                            </label>
                            <p className='text-sm text-gray-500'>
                                Supports JPG, PNG, WebP • Max 10MB • Free forever
                            </p>
                        </div>
                        
                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-8 pt-8 border-t border-gray-200'>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-gray-900'>1M+</div>
                                <div className='text-sm text-gray-600'>Images processed</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-gray-900'>2.5s</div>
                                <div className='text-sm text-gray-600'>Avg processing time</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-gray-900'>99.7%</div>
                                <div className='text-sm text-gray-600'>Accuracy rate</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Side - Visual */}
                    <div className='relative'>
                        <div className='relative'>
                            <img src={assets.header_img} alt="Background removal example" className='w-full h-auto rounded-3xl shadow-2xl' />
                            <div className='absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-200'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                                    <span className='text-sm font-medium text-gray-700'>Processing...</span>
                                </div>
                            </div>
                            <div className='absolute -bottom-4 -left-4 bg-violet-600 text-white rounded-2xl p-4 shadow-xl'>
                                <div className='text-2xl font-bold'>AI</div>
                                <div className='text-xs opacity-90'>Powered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header