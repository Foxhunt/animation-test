import { motion, Variants } from "framer-motion"

const circleTB: Variants = {
    hidden: {
        fill: "#000",
        originX: "50%",
        originY: "50%",
        r: 0,
    },
    collapsed: {
        r: 1,
        y: 0,
        transition: {
            default: { duration: 0.2 },
        }
    },
    expanded: (i: number) => ({
        r: [2, 1],
        y: [1 * i, 2 * i],
        transition: {
            default: {
                from: 0,
                delay: 0.7,
                duration: 4,
                easings: "anticipate",
            }
        }
    })
}

const frameLine: Variants = {
    hidden: {
        stroke: "#fff",
        pathLength: 0,
    },
    collapsed: {
        stroke: "#fff",
        pathLength: 0
    },
    expanded: {
        stroke: "#000",
        pathLength: 1,
        transition: {
            stroke: {
                duration: 0
            },
            pathLength: {
                duration: 2.5
            }
        }
    }
}

const frameGroup: Variants = {
    expanded: {
        transition: {
            delayChildren: 4.7,
            staggerChildren: 2.5
        }
    }
}

export default function Frame() {
    return <>
        {/* top left */}
        <motion.g
            variants={frameGroup}>
            <motion.path
                variants={frameLine}
                d="M 50 -7L 29 14" />
            <motion.path
                variants={frameLine}
                d="M 14 29L -7 50" />
        </motion.g>

        {/* top right */}
        <motion.g
            variants={frameGroup}>
            <motion.path
                variants={frameLine}
                d="M 50 -7L 71 14" />
            <motion.path
                variants={frameLine}
                d="M 86 29L 107 50" />
        </motion.g>

        {/* bottom legt */}
        <motion.g
            variants={frameGroup}>
            <motion.path
                variants={frameLine}
                d="M 50 107L 29 86" />
            <motion.path
                variants={frameLine}
                d="M 14 71L -7 50" />
        </motion.g>

        {/* bottom right*/}
        <motion.g
            variants={frameGroup}>
            <motion.path
                variants={frameLine}
                d="M 50 107L 71 86" />
            <motion.path
                variants={frameLine}
                d="M 86 71L 107 50" />
        </motion.g>

        <motion.circle
            custom={-11}
            cx={50}
            cy={15}
            variants={circleTB} />

        <motion.circle
            custom={11}
            cx={50}
            cy={85}
            variants={circleTB} />
    </>
}
