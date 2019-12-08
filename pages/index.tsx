import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from "framer-motion"

const Svg = styled(motion.svg)`
  width: 100px;
  height: 100px;
  
  overflow: visible;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
`

const svg: Variants = {
  hidden: {
    rotate: "0deg",
  },
  visible: {
    rotate: "0deg",
    transition: {
      duration: 1,
      delayChildren: 0.25
    }
  }
}

const paths: Variants = {
  hidden: (i: number) => ({
    stroke: "#fff",
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    rotate: "-45deg",
    y: 0 * i
  }),
  visible: (i: number) => ({
    stroke: "#000",
    pathLength: 1,
    fill: "rgba(140, 255, 255, 1)",
    rotate: "0deg",
    y: 15 * i,
    transition: {
      default: { duration: 0.2 },
      y: { delay: 0.5, duration: 0.3 }
    }
  })
}


export default () => <Svg
  variants={svg}
  initial={"hidden"}
  animate={"visible"}>
  <motion.path
    custom={1}
    d="M50 85L15 50L50 15"
    variants={paths}
  />
  <motion.path
    custom={-1}
    d="M50 15L85 50L50 85"
    variants={paths}
  />
</Svg>
