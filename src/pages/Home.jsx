import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import MessageSection from '../components/MessageSection'
import TimelineSection from '../components/TimelineSection'
import ProjectSection from '../components/ProjectSection'
import NewsAndReports from '../components/NewsSection'
import SalientFeatures from '../components/SalientFeatures'

export default function Home() {
  return (
    <main>
        <Hero />
        <AboutSection />
        <SalientFeatures />
        <MessageSection />
        <TimelineSection />
        <ProjectSection />
        <NewsAndReports />
        </main>
  )
}
