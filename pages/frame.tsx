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
            default: { duration: 0 },
        }
    },
    expanded: (i: number) => ({
        r: [2, 0],
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

const frameGroup: Variants = {
    expanded: {
        transition: {
            delayChildren: 5,
            staggerChildren: .4
        }
    }
}

const frameLine: Variants = {
    hidden: {
        stroke: "#fff",
        pathLength: 0,
        opacity: 0
    },
    collapsed: {
        stroke: "#fff",
        pathLength: 0,
        opacity: 0
    },
    expanded: {
        stroke: "#000",
        pathLength: 1,
        opacity: 1,
        transition: {
            default: {
                duration: 0
            },
            pathLength: {
                duration: .5
            }
        }
    }
}

const frameDots: Variants = {
    hidden: {
        fill: "#000",
        originX: "50%",
        originY: "50%",
        r: 0,
    },
    collapsed: {
        r: 0,
        y: 0,
        x: 0,
        transition: {
            default: { duration: 0 },
        }
    },
    expanded: ({ x, y }: { x: number, y: number }) => ({
        r: 1,
        x,
        y,
        transition: {
            default: {
                duration: .5
            },
            r: {
                duration: 0
            }
        }
    })
}

export default function Frame() {
    return <>
        {/* top left */}
        <motion.g
            variants={frameGroup}>
            <motion.path
                variants={frameLine}
                d="M 50 -7L 29 14" />
            <motion.circle
                variants={frameDots}
                cx={29}
                cy={14}
                custom={{
                    x: 50 - 57 / 2 - 29,
                    y: 50 - 57 / 2 - 14
                }} />
            <motion.circle
                variants={frameDots}
                cx={50 - 57 / 2}
                cy={50 - 57 / 2}
                custom={{
                    x: 14 - (50 - 57 / 2),
                    y: 29 - (50 - 57 / 2)
                }} />
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
            <motion.circle
                variants={frameDots}
                cx={71}
                cy={14}
                custom={{
                    x: 50 + 57 / 2 - 71,
                    y: 50 - 57 / 2 - 14
                }} />
            <motion.circle
                variants={frameDots}
                cx={50 + 57 / 2}
                cy={50 - 57 / 2}
                custom={{
                    x: 86 - (50 + 57 / 2),
                    y: 29 - (50 - 57 / 2)
                }} />
            <motion.path
                variants={frameLine}
                d="M 86 29L 107 50" />
        </motion.g>

        {/* bottom left */}
        <motion.g
            variants={frameGroup}>
            <motion.path
                variants={frameLine}
                d="M 50 107L 29 86" />
            <motion.circle
                variants={frameDots}
                cx={29}
                cy={86}
                custom={{
                    x: 50 - 57 / 2 - 29,
                    y: 50 + 57 / 2 - 86
                }} />
            <motion.circle
                variants={frameDots}
                cx={50 - 57 / 2}
                cy={50 + 57 / 2}
                custom={{
                    x: 14 - (50 - 57 / 2),
                    y: 71 - (50 + 57 / 2)
                }} />
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
            <motion.circle
                variants={frameDots}
                cx={71}
                cy={86}
                custom={{
                    x: 50 + 57 / 2 - 71,
                    y: 50 + 57 / 2 - 86
                }} />
            <motion.circle
                variants={frameDots}
                cx={50 + 57 / 2}
                cy={50 + 57 / 2}
                custom={{
                    x: 86 - (50 + 57 / 2),
                    y: 71 - (50 + 57 / 2)
                }} />
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
