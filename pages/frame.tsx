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

const innerFrameGroup: Variants = {
    expanded: {
        transition: {
            delayChildren: 5,
            staggerChildren: 1
        }
    }
}

const outerFrameGroup: Variants = {
    expanded: {
        transition: {
            delayChildren: 5 + 4,
            staggerChildren: 1
        }
    }
}

const finalFrameGroup: Variants = {
    expanded: {
        transition: {
            delayChildren: 5 + 4 + 5
        }
    }
}

const frameLine: Variants = {
    hidden: {
        stroke: "#fff",
        fill: "#fff",
        pathLength: 0,
        opacity: 0
    },
    collapsed: {
        stroke: "#fff",
        pathLength: 0,
        opacity: 0,
        transition: {
            default: {
                duration: 0.1
            }
        }
    },
    expanded: () => ({
        stroke: "#000",
        pathLength: 1,
        opacity: 1,
        transition: {
            default: {
                duration: 0
            },
            pathLength: {
                duration: 1,
                ease: "linear"
            }
        }
    })
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
                duration: 1,
                ease: "linear"
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
            variants={innerFrameGroup}>
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
            <motion.g
                variants={outerFrameGroup}>
                <motion.circle
                    variants={frameDots}
                    cx={-7}
                    cy={50}
                    custom={{
                        x: 0,
                        y: -14
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M -7 36L -7 22" />
                <motion.circle
                    variants={frameDots}
                    cx={-7}
                    cy={22}
                    custom={{
                        x: 0,
                        y: -14
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M -7 8L -7 -7" />
            </motion.g>
            <motion.g
                variants={outerFrameGroup}>
                <motion.circle
                    variants={frameDots}
                    cx={50}
                    cy={-7}
                    custom={{
                        x: -14,
                        y: 0
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 36 -7L 22 -7" />
                <motion.circle
                    variants={frameDots}
                    cx={22}
                    cy={-7}
                    custom={{
                        x: -14,
                        y: 0
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 8 -7L -7 -7" />
                <motion.circle
                    variants={frameDots}
                    cx={-7}
                    cy={-7}
                    custom={{
                        x: 14,
                        y: 14
                    }} />
            </motion.g>
            {/* inner arrow */}
            <motion.g
                variants={finalFrameGroup}>
                <motion.path
                    variants={frameLine}
                    d="M 7 7L 21 7" />
                <motion.path
                    variants={frameLine}
                    d="M 7 7L 7 21" />
            </motion.g>
        </motion.g>

        {/* top right */}
        <motion.g
            variants={innerFrameGroup}>
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
            {/* left to right */}
            <motion.g
                variants={outerFrameGroup}>
                <motion.circle
                    variants={frameDots}
                    cx={50}
                    cy={-7}
                    custom={{
                        x: 14,
                        y: 0
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 64 -7L 78 -7" />
                <motion.circle
                    variants={frameDots}
                    cx={78}
                    cy={-7}
                    custom={{
                        x: 14,
                        y: 0
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 92 -7L 107 -7" />
            </motion.g>
            {/* bottom to top */}
            <motion.g
                variants={outerFrameGroup}>
                <motion.circle
                    variants={frameDots}
                    cx={107}
                    cy={50}
                    custom={{
                        x: 0,
                        y: -14
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 107 36L 107 22" />
                <motion.circle
                    variants={frameDots}
                    cx={107}
                    cy={22}
                    custom={{
                        x: 0,
                        y: -14
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 107 8L 107 -7" />
                <motion.circle
                    variants={frameDots}
                    cx={107}
                    cy={-7}
                    custom={{
                        x: -14,
                        y: 14
                    }} />
            </motion.g>
            {/* inner arrow */}
            <motion.g
                variants={finalFrameGroup}>
                <motion.path
                    variants={frameLine}
                    d="M 93 7L 79 7" />
                <motion.path
                    variants={frameLine}
                    d="M 93 7L 93 21" />
            </motion.g>
        </motion.g>

        {/* bottom left */}
        <motion.g
            variants={innerFrameGroup}>
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
            {/* top to bottom */}
            <motion.g
                variants={outerFrameGroup}>
                <motion.circle
                    variants={frameDots}
                    cx={-7}
                    cy={50}
                    custom={{
                        x: 0,
                        y: 14
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M -7 64L -7 78" />
                <motion.circle
                    variants={frameDots}
                    cx={-7}
                    cy={78}
                    custom={{
                        x: 0,
                        y: 14
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M -7 92L -7 107" />
            </motion.g>
            {/* right to left */}
            <motion.g
                variants={outerFrameGroup}>
                <motion.circle
                    variants={frameDots}
                    cx={50}
                    cy={107}
                    custom={{
                        x: -14,
                        y: 0
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 36 107L 22 107" />
                <motion.circle
                    variants={frameDots}
                    cx={22}
                    cy={107}
                    custom={{
                        x: -14,
                        y: 0
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 8 107L -7 107" />
                <motion.circle
                    variants={frameDots}
                    cx={-7}
                    cy={107}
                    custom={{
                        x: 14,
                        y: -14
                    }} />
            </motion.g>
            {/* inner arrow */}
            <motion.g
                variants={finalFrameGroup}>
                <motion.path
                    variants={frameLine}
                    d="M 7 93L 7 79" />
                <motion.path
                    variants={frameLine}
                    d="M 7 93L 21 93" />
            </motion.g>
        </motion.g>

        {/* bottom right*/}
        <motion.g
            variants={innerFrameGroup}>
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
            {/* top to bottom */}
            <motion.g
                variants={outerFrameGroup}>
                <motion.circle
                    variants={frameDots}
                    cx={107}
                    cy={50}
                    custom={{
                        x: 0,
                        y: 14
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 107 64L 107 78" />
                <motion.circle
                    variants={frameDots}
                    cx={107}
                    cy={78}
                    custom={{
                        x: 0,
                        y: 14
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 107 92L 107 107" />
            </motion.g>
            {/* left to right */}
            <motion.g
                variants={outerFrameGroup}>
                <motion.circle
                    variants={frameDots}
                    cx={50}
                    cy={107}
                    custom={{
                        x: 14,
                        y: 0
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 64 107L 78 107" />
                <motion.circle
                    variants={frameDots}
                    cx={78}
                    cy={107}
                    custom={{
                        x: 14,
                        y: 0
                    }} />
                <motion.path
                    variants={frameLine}
                    d="M 92 107L 107 107" />
                <motion.circle
                    variants={frameDots}
                    cx={107}
                    cy={107}
                    custom={{
                        x: -14,
                        y: -14
                    }} />
            </motion.g>
            <motion.g
                variants={finalFrameGroup}>
                <motion.path
                    variants={frameLine}
                    d="M 93 93L 93 79" />
                <motion.path
                    variants={frameLine}
                    d="M 93 93L 79 93" />
            </motion.g>
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
