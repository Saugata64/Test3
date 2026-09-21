'use client'

import { useState, useEffect } from 'react'
import { Clock, Users, ChevronRight, ArrowUpRight } from 'lucide-react'

function QueueCard() {
  const [endTime] = useState(() => Date.now() + 15 * 60 * 1000)
  const [seconds, setSeconds] = useState(15 * 60)

  useEffect(() => {
    const updateSeconds = () => {
      setSeconds(Math.max(0, Math.ceil((endTime - Date.now()) / 1000)))
    }

    const refreshWhenActive = () => {
      if (document.visibilityState === 'visible') {
        updateSeconds()
      }
    }

    updateSeconds()
    const interval = setInterval(updateSeconds, 1000)
    document.addEventListener('visibilitychange', refreshWhenActive)
    window.addEventListener('focus', refreshWhenActive)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', refreshWhenActive)
      window.removeEventListener('focus', refreshWhenActive)
    }
  }, [endTime])

  const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0')
    const secs = String(totalSeconds % 60).padStart(2, '0')
    return `${hrs}:${mins}:${secs}`
  }

  return (
    <div className="bg-[#17483d] rounded-[26px] p-6 text-white shadow-[0_18px_40px_rgba(23,72,61,0.18)] relative overflow-hidden">
      <div className="absolute -right-14 -top-16 w-44 h-44 border-[22px] border-[#5f9c82]/20 rounded-full" />
      <div className="absolute right-10 -bottom-20 w-44 h-44 border-[18px] border-[#b7d8a9]/10 rounded-full" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#b7d8a9] shadow-[0_0_0_5px_rgba(183,216,169,0.12)]" />
            <span className="font-bold text-[11px] uppercase tracking-[0.16em] text-[#c7e1c0]">
              Live queue
            </span>
          </div>
          <button className="flex items-center gap-1.5 bg-[#f7f8f3] text-[#17483d] rounded-full px-3.5 py-2 text-[11px] font-bold hover:bg-white transition-colors">
            Details <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-[#a9cf9c]" />
              <p className="text-[#a9cf9c] text-[11px] font-bold uppercase tracking-wider">Your position</p>
            </div>
            <p className="text-5xl font-extrabold tracking-[-0.06em] text-white">
              #04
            </p>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end gap-1.5 text-[#a9cf9c] text-[11px] font-bold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Estimated wait</span>
            </div>
            <p className="text-[25px] font-extrabold font-mono tracking-[-0.05em] animate-pulse-soft text-[#f7f8f3]">
              {formatTime(seconds)}
            </p>
            <p className="text-[10px] text-[#a9cf9c] mt-1">Updates every minute</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QueueCard
