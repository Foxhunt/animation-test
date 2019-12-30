import { motion, Variants } from "framer-motion"

const circles: Variants = {
    hidden: {
        fill: "#000",
        originX: "50%",
        originY: "50%",
        r: 0,
    },
    collapsed: {
        r: 1,
        rotate: 90,
        y: 0,
        transition: {
            default: { duration: 0.2 },
            rotate: { duration: 0 },
        }
    },
    expanded: (i: number) => ({
        fill: "#000",
        r: 2,
        rotate: 0,
        y: [1 * i, 2 * i],
        transition: {
            default: { delay: 0.7, duration: 0.1 },
            rotate: { delay: 0.2, duration: 0 },
            y: {
                from: 0,
                delay: 0.7,
                duration: 4,
                easings: "anticipate",
                yoyo: Infinity
            }
        }
    })
}

const behindCircles = [7, 3]

export default function FloatingCircles() {
    return <>
        {behindCircles.map(i =>
            <motion.circle
                key={"bot" + i}
                custom={i}
                cx={50}
                cy={85}
                variants={circles} />)}
        {behindCircles.map(i =>
            <motion.circle
                key={"top" + i}
                custom={-i}
                cx={50}
                cy={15}
                variants={circles} />)}
    </>
}