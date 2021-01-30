import React from 'react'
import HowItWorks from '../how-it-works/how-it-works'
import Landing from '../landing_page/Landing'
import WhatsNext from '../whats-next/WhatsNext'

export default function Home() {
    return (
        <div>
            <Landing />
            <HowItWorks />
            <WhatsNext />
        </div>
    )
}
