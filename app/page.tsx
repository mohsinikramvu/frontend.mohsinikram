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

  return <>{isLoading ? <SplashScreen /> : <Resume />}</>
}
