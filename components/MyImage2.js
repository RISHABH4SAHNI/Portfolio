import Image from 'next/image'
import { useState } from 'react'

// Toggle between placeholder and real photo
const USE_PLACEHOLDER = false; // Set to false when you add your real photo
const PLACEHOLDER_IMAGE = '/images/profile-placeholder.svg';
const PROFILE_IMAGE = '/images/profile-photo.jpg';
const IMAGE_SRC = USE_PLACEHOLDER ? PLACEHOLDER_IMAGE : PROFILE_IMAGE;

const MyImage2 = () => {
  const [imgSrc, setImgSrc] = useState(IMAGE_SRC);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    console.log('Image failed to load, falling back to placeholder');
    setHasError(true);
    setImgSrc(PLACEHOLDER_IMAGE);
  };

  return (
    <div className="relative">
      {/* Glowing background effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>

      {/* Glass morphism container */}
      <div className="relative glass-card p-8 rounded-full">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
          <Image
            src={imgSrc}
            alt="Rishabh Sahni"
            fill
            sizes="(max-width: 768px) 256px, 320px"
            className="object-cover hover:scale-110 transition-transform duration-500"
            onError={handleError}
            priority
          />

          {/* Debug info - remove after testing */}
          {process.env.NODE_ENV === 'development' && (
            <div className="absolute top-0 left-0 bg-black/50 text-white text-xs p-1 rounded">
              {hasError ? 'Using fallback' : 'Loading image'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyImage2