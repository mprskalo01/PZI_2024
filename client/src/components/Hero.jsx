import React from 'react'

const Hero = ({ img, pageName }) => {
  return (
    <div
      className="hero h-60"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <h1 className="mb-5 text-5xl font-bold">{pageName}</h1>
    </div>
  )
}

export default Hero
