import {useState} from 'react'
import React from 'react'
import { motion, useViewportScroll, useMotionValue, useTransform } from 'framer-motion'


export default function Controller() {
    const { scrollY } = useViewportScroll()
    const trans = useTransform(scrollY, [1000,1400],[0, -50])

    return (
        <motion.div style={{ y: trans }} className="controller">
            <p className="how-text">Take a picture.</p>
            <p className="how-text">Grayscale it.</p>
            <p className="how-text">Asciifi.</p>
            <p className="how-text">Try it out.</p>
        </motion.div>
    )
}
