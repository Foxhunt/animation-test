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

const frameGroup: Variants = {
    expanded: {
        transition: {
            delayChildren: 5,
            staggerChildren: .9
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
                duration: 0.5
            }
        }
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
                duration: 1,
                ease: "easeOut"
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
                duration: 1,
                ease: "easeOut"
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
                d="M -7 8L -7 -7L 8 -7" />
            <motion.circle
                variants={frameDots}
                cx={8}
                cy={-7}
                custom={{
                    x: 14,
                    y: 0
                }} />
            <motion.path
                variants={frameLine}
                d="M 22 -7L 36 -7" />
            <motion.circle
                variants={frameDots}
                cx={36}
                cy={-7}
                custom={{
                    x: -14,
                    y: 14
                }} />
            <motion.path
                variants={frameLine}
                d="M 22 7l -14 0l 0 14" />
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
                d="M 92 -7L 107 -7L 107 8" />
            <motion.circle
                variants={frameDots}
                cx={107}
                cy={8}
                custom={{
                    x: 0,
                    y: 14
                }} />
            <motion.path
                variants={frameLine}
                d="M 107 22L 107 36" />
            <motion.circle
                variants={frameDots}
                cx={107}
                cy={36}
                custom={{
                    x: -14,
                    y: -14
                }} />
            <motion.path
                variants={frameLine}
                d="M 93 22l 0 -14l -14 0" />
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
                d="M 8 107L -7 107L -7 92" />
            <motion.circle
                variants={frameDots}
                cx={-7}
                cy={92}
                custom={{
                    x: 0,
                    y: -14
                }} />
            <motion.path
                variants={frameLine}
                d="M -7 78L -7 64" />
            <motion.circle
                variants={frameDots}
                cx={-7}
                cy={64}
                custom={{
                    x: 14,
                    y: 14
                }} />
            <motion.path
                variants={frameLine}
                d="M 7 78l 0 14l 14 0" />
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
                d="M 107 92L 107 107L 92 107" />
            <motion.circle
                variants={frameDots}
                cx={92}
                cy={107}
                custom={{
                    x: -14,
                    y: 0
                }} />
            <motion.path
                variants={frameLine}
                d="M 78 107L 64 107" />
            <motion.circle
                variants={frameDots}
                cx={64}
                cy={107}
                custom={{
                    x: 14,
                    y: -14
                }} />
            <motion.path
                variants={frameLine}
                d="M 78 93l 14 0l 0 -14" />
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
