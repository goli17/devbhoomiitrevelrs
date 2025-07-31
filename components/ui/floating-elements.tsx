"use client"

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200/20 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-200/20 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-green-200/20 rounded-full animate-float-slow"></div>

      {/* Floating icons */}
      <div className="absolute top-60 left-1/4 text-orange-300/30 animate-float-medium">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        </svg>
      </div>
      <div className="absolute top-32 right-1/3 text-blue-300/30 animate-float-fast">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        </svg>
      </div>
    </div>
  )
}
