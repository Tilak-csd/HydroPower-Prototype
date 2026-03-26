import React from 'react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import MessageSection from '../components/MessageSection'
import TimelineSection from '../components/TimelineSection'

export default function Home() {
  return (
    <main>
        <Hero />
        <AboutSection />
        <MessageSection />
        <TimelineSection />
        </main>
  )
}
