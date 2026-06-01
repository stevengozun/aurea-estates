import { useState } from 'react'

/** Image with a light gradient placeholder + graceful fallback on error. */
export default function SmartImage({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-raised ${className}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-br from-raised to-line transition-opacity duration-700 ${
          loaded && !failed ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-all duration-[1200ms] ease-expo-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}
