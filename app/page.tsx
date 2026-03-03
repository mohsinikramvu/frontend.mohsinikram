"use client"

import { useState, useEffect } from "react"
import SplashScreen from "@/components/splash-screen"
import Resume from "@/components/resume"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)


    return () => clearTimeout(timer)
  }, [])

  return <div className="relative">
    {isLoading ? <SplashScreen /> : <div className="p-2 md:p-3 lg:p-5"><Resume /></div>}
  </div>
}
