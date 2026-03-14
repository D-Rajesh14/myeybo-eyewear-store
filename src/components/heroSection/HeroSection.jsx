import React from 'react'

function HeroSection() {
  return (
    <div className="relative w-full h-[300px] md:h-[450px] bg-gray-900 overflow-hidden">
        {/* Background Eyewear Image */}
        <img 
          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop" 
          alt="MyEybo Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
        />
        
        {/* Text Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight drop-shadow-lg">
                Upgrade Your Vision
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mt-4 max-w-lg drop-shadow-md">
                Discover the finest collection of premium frames and blue-light glasses at MyEybo.
            </p>
          
        </div>
    </div>
  )
}

export default HeroSection