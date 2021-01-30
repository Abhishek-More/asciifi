import React from 'react'
import HowItWorks from '../how-it-works/how-it-works'
import WhatsNext from '../whats-next/whatsNext'
import Landing from '../landing_page/Landing'

export default function Home() {
    return (
        <div>
            <Landing />
            <HowItWorks />
            <WhatsNext />
        </div>
    )
}
