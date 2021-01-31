import {useEffect} from 'react'
import { React, Link } from 'react'

import { motion, useViewportScroll, useMotionValue, useTransform } from 'framer-motion'


export default function Controller() {

    let size = 1000;

    const { scrollY } = useViewportScroll()
    const trans = useTransform(scrollY, [size,1400],[0, -50])
    const op1 = useTransform(scrollY, [0, size + 666], [0.2, 1])
    const op2= useTransform(scrollY, [size + 666, size + 666 * 2],[0.2, 1])
    const op3 = useTransform(scrollY, [size + 666 * 2, size + 666 * 3],[0.2, 1])
    const op4 = useTransform(scrollY, [size + 666 * 3, size + 666 * 4],[0.2, 1])
    return (
        <motion.div style={{ y: trans }} className="controller">
            <motion.p style={{ opacity: op1 }} className="how-text">Take a picture.</motion.p>
            <motion.p style={{ opacity: op2 }}className="how-text">Grayscale it.</motion.p>
            <motion.p style={{ opacity: op3 }}className="how-text">Asciifi.</motion.p>
            <motion.p style={{ opacity: op4 }}className="how-text">Try it out.</motion.p>
        </motion.div>
    )
}
