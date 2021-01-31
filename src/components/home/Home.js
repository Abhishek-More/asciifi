import React from 'react'
import '../howwork/How.css'
import HowItWorks from '../how-it-works/how-it-works'
import Landing from '../landing_page/Landing'
import WhatsNext from '../whats-next/WhatsNext'
import How from '../howwork/How'

export default function Home() {
    return (
        <div>
            <Landing />
            <How />
            <div className="spacer" />
            <WhatsNext />
        </div>
    )
}
