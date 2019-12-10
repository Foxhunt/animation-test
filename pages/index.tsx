import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation, Variants } from "framer-motion"

const Svg = styled(motion.svg)`
  width: 100px;
  height: 100px;

  display: block;
  
  overflow: visible;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
`

const g: Variants = {
  hidden: {
    rotate: -45,
    scale: 1,
  },
  visible: {
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
      x: { delay: 0.4, duration: 0.3 },
      y: { delay: 0.4, duration: 0.3 },
    }
  }
}

const paths: Variants = {
  hidden: {
    stroke: "#fff",
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    x: 0,
    transition: {
      default: { delay: 0.3, duration: 0.4 },
      x: { duration: 0.3 },
    }
  },
  expanded: (i: number) => ({
    stroke: "#000",
    pathLength: 1,
    fill: "rgba(140, 255, 255, .8)",
    x: 3 * i,
    transition: {
      default: { duration: 0.4 },
      x: {
        delay: 0.7,
        type: "spring",
        damping: 40,
        mass: 1,
        stiffness: 2000
      }
    }
  })
}

const circles: Variants = {
  hidden: {
    fill: "#000",
    r: 0,
  },
  visible: {
    r: 0,
    y: 0,
    transition: {
      default: { delay: 0.3, duration: 0.4 },
      y: { duration: 0.3 },
    }
  },
  expanded: (i: number) => ({
    fill: "#000",
    r: 2,
    y: 4 * i,
    transition: {
      default: {
        delay: 0.7,
        type: "spring",
        damping: 40,
        mass: 1,
        stiffness: 2000
      }
    }
  })

}

const behinds = [4, 2]

export default () => {
  const animate = useAnimation()
  const [animationState, setAnimationState] = useState("expanded")

  useEffect(() => {
    animate.start(animationState)
  }, [animationState])

  return <Svg
    onTap={() => {
      setAnimationState(animationState === "expanded" ? "visible" : "expanded")
    }}
    initial={"hidden"}
    animate={animate}>
    <motion.g
      variants={g}>
      {behinds.map(i =>
        <motion.circle
          key={"top" + i}
          custom={-i}
          cx={50}
          cy={15}
          variants={circles} />)}
      {behinds.map(i =>
        <motion.circle
          key={"bot" + i}
          custom={i}
          cx={50}
          cy={85}
          variants={circles} />)}
      {behinds.map(i =>
        <motion.path
          key={"left" + i}
          custom={-i}
          d="M50 85L15 50L50 15"
          variants={paths}
        />)}
      {behinds.map(i =>
        <motion.path
          key={"right" + i}
          custom={i}
          d="M50 15L85 50L50 85"
          variants={paths}
        />)}
      <motion.path
        custom={0}
        d="M50 85L15 50L50 15"
        variants={paths}
      />
      <motion.path
        custom={0}
        d="M50 15L85 50L50 85"
        variants={paths}
      />
    </motion.g>
  </Svg>
}
