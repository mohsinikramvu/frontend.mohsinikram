"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { motion, Variants } from "framer-motion"
import { useState, useRef, useEffect, useCallback } from "react"
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';
import { MinusIcon, PlusIcon } from "lucide-react";

interface TimelineItem {
  id: string
  title: string
  company: string
  period: string
  description: string
  location: string
  color?: string
}

const timelineData: TimelineItem[] = [
  {
    id: "orangetreesystems",
    title: "Senior Software Engineer",
    company: "OrangeTree Systems",
    period: "Feb 2025 - Present",
    description:
      "Part of Core team working on AI-powered Media & Data Intelligence Solutions. Designed and built microservices for distributed systems, engineered data pipelines on Google Cloud, and wrote full-stack code for front/back/cloud.",
    location: "Industrial States, Lahore, Pakistan",
    color: "bg-accent",
  },
  {
    id: "m2logics",
    title: "Senior Software Engineer",
    company: "M2Logics",
    period: "Oct 2024 - April 2025",
    description:
      "Part of Core team leading tech decisions. Led AppriseMobile CRM for Toyota and Microsoft IOT marketing project deployed across USA, Canada, and Australia.",
    location: "Eden Center, Lahore, Pakistan",
    color: "bg-pink-400",
  },
  {
    id: "technologybrainz",
    title: "Software Engineer",
    company: "Technology Brainz",
    period: "Nov 2023 - Sep 2024",
    description:
      "Developed robust backend systems and APIs. Contributed to open-source projects and mentored junior developers in best practices.",
    location: "Kareem Block, Lahore, Pakistan",
    color: "bg-yellow",
  },
  {
    id: "brandjaws",
    title: "Software Engineer",
    company: "BrandJaws",
    period: "July 2019 - Nov 2023",
    description:
      "Developed robust backend systems and APIs. Contributed to open-source projects and mentored junior developers in best practices.",
    location: "Model Town, Lahore, Pakistan",
    color: "bg-yellow",
  },
]

// Real coordinates for Lahore locations
const locations = [
  { name: "OrangeTree Systems", lat: 31.454783377951124, lng: 74.32477955536159 },
  { name: "M2Logics", lat: 31.545444537770777, lng: 74.33204490784424 },
  { name: "Technology Brainz", lat: 31.50752705775871, lng: 74.27925320384578 },
  { name: "BrandJaws", lat: 31.479671126842348, lng: 74.3249800325814 },
];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem'
};

const center = {
  lat: 31.485,
  lng: 74.300
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: false,
  styles: [
    {
      "elementType": "geometry",
      "stylers": [{ "color": "#fdf7e3" }] // Light warm background
    },
    {
      "elementType": "labels.icon",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#616161" }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#f5f5f5" }]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#bdbdbd" }]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{ "color": "#eeeeee" }]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#757575" }]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{ "color": "#e5e5e5" }]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#9e9e9e" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{ "color": "#ffffff" }]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#757575" }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{ "color": "#dadada" }]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#616161" }]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#9e9e9e" }]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{ "color": "#e5e5e5" }]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{ "color": "#eeeeee" }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#c9c9c9" }]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#9e9e9e" }]
    }
  ]
};

export default function JourneySection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mapZoom, setMapZoom] = useState(12)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile();
  const [map, setMap] = useState<google.maps.Map | null>(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  })

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, [])

  useEffect(() => {
    if (map) {
      map.setZoom(mapZoom)
    }
  }, [mapZoom, map])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const element = sectionRef.current
      const elementTop = element.getBoundingClientRect().top
      const elementHeight = element.clientHeight
      const windowHeight = window.innerHeight

      const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      ref={sectionRef}
      className="pt-12 pb-20 px-6 md:px-12"
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="">
        <motion.div
          style={{ boxShadow: isMobile ? "4px 4px 0px rgba(0, 0, 0, 1)" : "4px 4px 0px rgba(0, 0, 0, 1)" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.8 }}
          className="mb-12 md:mb-16 bg-white p-4 md:p-6 border-3 border-black"
        >
          <h2 className="text-xl md:text-4xl font-black text-black text-center">My Journey</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.0 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8 relative pl-12">
              {/* Vertical yellow line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-2 bg-yellow border-2 border-black"
                style={{ height: `${Math.max(scrollProgress * 100, 0)}%` }}
                transition={{ duration: 0.3 }}
              />

              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative"
                  style={{
                    opacity: scrollProgress > index * 0.25 ? 1 : 0.5,
                  }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute -left-7 top-0 w-5 h-5 bg-black border-3 border-white rounded-full"
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content card */}
                  <motion.div
                    style={{ boxShadow: "5px 5px 0px rgba(0, 0, 0, 1)" }}
                    className="border-3 border-black p-5 bg-white transition-all duration-200 cursor-pointer"
                    whileHover={{ scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 1)" }}
                  >
                    <h3 className="text-base md:text-lg font-black text-black mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm font-bold text-cyan-600 mb-2">@ {item.company}</p>
                    <p className="text-xs text-gray-600 mb-3 font-bold">{item.period}</p>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-3">{item.description}</p>
                    <p className="text-xs font-bold text-gray-500 flex items-center gap-1">📍 {item.location}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 h-1/2 lg:sticky lg:top-40 lg:self-start hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative border-4 border-black bg-white overflow-hidden rounded-lg h-[600px] w-full">
              {/* Google Map */}
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={mapZoom}
                  options={mapOptions}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  {/* Custom Markers using OverlayView to maintain original design */}
                  {locations.map((loc, idx) => (
                    <OverlayView
                      key={loc.name}
                      position={{ lat: loc.lat, lng: loc.lng }}
                      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                      <motion.div
                        className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + idx * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.2, zIndex: 50 }}
                      >
                        {/* Marker circle */}
                        <motion.div
                          className="w-6 h-6 bg-yellow border-3 border-black rounded-full mb-2 shadow-lg"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                        {/* Label */}
                        <motion.div className="bg-yellow border-2 border-black px-2 py-1 text-xs font-black text-black whitespace-nowrap shadow-md">
                          {loc.name}
                        </motion.div>
                      </motion.div>
                    </OverlayView>
                  ))}
                </GoogleMap>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <p className="font-bold text-lg">Loading Map...</p>
                </div>
              )}

              {/* Zoom controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                <motion.button
                  className="w-10 h-10 bg-accent border-3 inline-flex justify-center items-center border-black font-bold text-lg hover:bg-cyan transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMapZoom((z) => Math.min(z + 1, 18))}
                >
                  <PlusIcon />
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-accent border-3 inline-flex justify-center items-center border-black font-bold text-lg hover:bg-cyan transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMapZoom((z) => Math.max(z - 1, 10))}
                >
                  <MinusIcon />
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-black border-3 border-black font-bold text-lg text-white hover:bg-gray-800 transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setMapZoom(12);
                    map?.panTo(center);
                  }}
                >
                  🏠
                </motion.button>
              </div>

              {/* Pirate character placeholder */}
              <motion.div
                className="absolute bottom-4 left-4 text-5xl z-10 pointer-events-none"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                🏴‍☠️
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

