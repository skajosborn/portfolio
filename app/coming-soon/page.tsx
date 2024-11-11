import React from 'react'
import Image from 'next/image'

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="relative w-[32rem] h-[32rem] mb-8">
        <Image
          src="/images/staytuned2.png" 
          alt="Under Construction"
          fill
          style={{objectFit: 'contain'}}
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
        Coming Soon
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
        I am currently renovating for perfection. Check back soon!
      </p>
      <a 
        href="/"
        className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Return Home
      </a>
    </div>
  )
}

export default ComingSoon
