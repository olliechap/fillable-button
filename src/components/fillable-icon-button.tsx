'use client'

import React, { useState } from 'react'
import { Heart } from 'lucide-react'

interface FillableButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  background?: string
  fillBackground?: string
  maxClicks?: number
}

export function FillableButton({
  size = 'lg',
  background = 'bg-gray-200',
  fillBackground = 'bg-blue-500',
  maxClicks = 8
}: FillableButtonProps = {}) {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    if (clicks < maxClicks) {
      setClicks(clicks + 1)
    }
  }

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  }

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 40,
    xl: 48
  }

  const fillPercentage = (clicks / maxClicks) * 100

  return (
    <button
      className={`relative ${sizeClasses[size]} ${background} rounded-full overflow-hidden transition-all duration-300 ease-in-out ${
        clicks === maxClicks ? 'cursor-not-allowed opacity-70' : 'hover:opacity-80'
      }`}
      onClick={handleClick}
      disabled={clicks === maxClicks}
      aria-label="Fillable Icon Button"
    >
      <div
        className={`absolute bottom-0 left-0 right-0 ${fillBackground} transition-all duration-300 ease-in-out`}
        style={{ height: `${fillPercentage}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Heart size={iconSizes[size]} className="text-white" />
      </div>
    </button>
  )
}