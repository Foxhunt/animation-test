import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation, useCycle, Variants } from "framer-motion"

import Diamond from "./diamond"
import FloatingCircles from "./floatingCircles"
import Frame from './frame'

const Svg = styled(motion.svg)`
  width: 100px;
  height: 100px;

  display: block;
  
  overflow: visible;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
`

const gAll: Variants = {
  hidden: {
    rotate: -45,
    scale: 1,
  },
  collapsed: {
    rotate: -45,
    scale: 1,
    transition: {
      default: { delay: 0.3, duration: 0.4 },
    }
  },
  expanded: {
    rotate: 0,
    scale: 2,
    x: [0, -5, 7, 0, 5, -8, 9, 0],
    y: [0, -5, 0, 5, -5, -7, 5, 0],
    transition: {
      default: { duration: 0.5 },
      x: { delay: 0.4, duration: 0.4 },
      y: { delay: 0.4, duration: 0.4 },
    }
  }
}

export default () => {
  const animate = useAnimation()
  const [animationState, toggleAnimationState] = useCycle("expanded", "collapsed")

  useEffect(() => {
    animate.start(animationState)
  }, [animationState])

  return <Svg
    onTap={() => {
      toggleAnimationState()
    }}
    initial={"hidden"}
    animate={animate}>
    <motion.g
      variants={gAll}>
      <FloatingCircles />
      <Diamond />
      <Frame />
    </motion.g>
  </Svg>
}
