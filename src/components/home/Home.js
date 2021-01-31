import React from 'react'
import '../howwork/How.css'
import HowItWorks from '../how-it-works/how-it-works'
import Landing from '../landing_page/Landing'
import WhatsNext from '../whats-next/WhatsNext'
import How from '../howwork/How'
import AboutUs from '../about_us/AboutUs'
import Description from '../description/Description'


export default function Home() {
    return (
        <div>
            <Landing />
            <How />
            <div className="spacer" />
            <Description />
            <AboutUs />
        </div>
    )
}
