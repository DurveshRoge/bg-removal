import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Result = () => {
  const navigate = useNavigate()
  const { resultImage, image } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true)
  const [showComparison, setShowComparison] = useState(false)

  useEffect(() => {
    if (resultImage) {
      setIsLoading(false)
      setTimeout(() => setShowComparison(true), 500)
    }
  }, [resultImage])

  const downloadImage = () => {
    if (resultImage) {
      const link = document.createElement('a')
      link.href = resultImage
      link.download = 'background-removed-image.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className='min-h-screen py-8 px-4 lg:px-12 xl:px-24'>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className='font-display font-bold text-3xl lg:text-4xl text-gray-900 mb-4'>
            Your Image is 
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'> Ready!</span>
          </h1>
          <p className="text-lg text-gray-600">
            {isLoading ? 'Our AI is working its magic...' : 'Background removed successfully with AI precision'}
          </p>
        </div>

        {/* Main Content */}
        <div className='bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden'>
          
          {/* Progress Bar */}
          {isLoading && (
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Processing...</span>
                <span className="text-sm text-gray-500">AI Analysis</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
              </div>
            </div>
          )}

          {/* Images Container */}
          <div className={`grid ${showComparison ? 'lg:grid-cols-2' : 'grid-cols-1'} transition-all duration-700`}>
            
            {/* Original Image */}
            <div className={`p-8 ${showComparison ? 'border-r border-gray-200' : ''}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className='font-display font-semibold text-xl text-gray-900'>Original Image</h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Before</span>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl"></div>
                <img 
                  className='relative w-full h-auto max-h-96 object-contain rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300' 
                  src={image ? URL.createObjectURL(image) : ''} 
                  alt='Original' 
                />
              </div>
            </div>

            {/* Processed Image */}
            <div className='p-8'>
              <div className="flex items-center justify-between mb-6">
                <h3 className='font-display font-semibold text-xl text-gray-900'>Background Removed</h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-700">
                    {isLoading ? 'Processing' : 'Complete'}
                  </span>
                </div>
              </div>
              
              <div className='relative group'>
                <div className='bg-layer rounded-2xl min-h-96 flex items-center justify-center relative overflow-hidden'>
                  
                  {resultImage ? (
                    <img 
                      src={resultImage} 
                      alt='Background Removed' 
                      className="w-full h-auto max-h-96 object-contain rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 animate-fade-in"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-6 p-12">
                      {/* Loading Animation */}
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                      </div>
                      
                      <div className="text-center space-y-2">
                        <h4 className="font-semibold text-gray-900">AI Processing</h4>
                        <p className="text-sm text-gray-600">Analyzing image and removing background...</p>
                      </div>
                      
                      {/* Progress Steps */}
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {resultImage && (
            <div className='p-8 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200'>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <button 
                  onClick={() => navigate('/')} 
                  className='group flex items-center gap-2 px-8 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105'
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Try Another Image
                </button>
                
                <button 
                  onClick={downloadImage}
                  className='group flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                >
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download HD Image
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">PNG</span>
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>High-resolution transparent background</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Result