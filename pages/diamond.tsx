import { motion, Variants } from "framer-motion"

const paths: Variants = {
    hidden: {
        stroke: "#fff",
        pathLength: 0,
        x: 0,
        fill: "rgba(255, 255, 255, 0)"
    },
    collapsed: {
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
        fill: "rgba(165, 255, 255, 1)",
        x: [2 * i, 4 * i],
        transition: {
            default: { duration: 0.4 },
            fill: {
                delay: 0.7,
                duration: 0.1
            },
            x: {
                delay: 0.7,
                duration: 4,
                easings: "anticipate",
                yoyo: Infinity
            }
        }
    })
}

const behinds = [4, 2]

export default function Diamond() {
    return <>
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
    </>
}