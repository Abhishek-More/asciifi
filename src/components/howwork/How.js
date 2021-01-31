import {React, useEffect} from 'react'
import './How.css'
import Controller from './Controller'
import { motion, useViewportScroll, useMotionValue, useTransform } from 'framer-motion'

export default function How() {

    var size = window.innerHeight - 75;

    const { scrollY } = useViewportScroll()
    const trans = useTransform(scrollY, [size, 3500],[0, 3500-size])
    const op1 = useTransform(scrollY, [0, size + 666], [0, 1])
    const op2= useTransform(scrollY, [size + 666, size + 666 * 2],[0, 1])
    const op3 = useTransform(scrollY, [size + 666 * 2, size + 666 * 3],[0, 1])
    return (
        <motion.div style={{y: trans}} className="main">
            <h1 className='HowText'>How it works</h1>
            <div className="how-content">
                <div className="image">
                    <motion.img style={{opacity: op1}} className="img-one" src="canvas.png" ></motion.img>
                    <motion.img style={{opacity: op2}} className="img-two" src="grayscale.png" ></motion.img>
                    <motion.img style={{opacity: op3}} className="img-two" src="converted.png" ></motion.img>
                </div>
                <div className="ctrl">
                    <Controller />
                </div>
            </div>
        </motion.div>
    )
}
