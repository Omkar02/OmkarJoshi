import { useInView, motion } from "framer-motion";
import { ReactElement, useRef } from "react";

export interface PopupAnimationInterface {
    arr: Array<string> | Array<ReactElement>;
}

// function getWidth() {
//     /**
//      * This are constant value
//      */
//     const screenWidth = window.innerWidth;
//     if (screenWidth >= 1024) return "45%";
//     if (screenWidth >= 768) return "40%";
//     return "50%";
// }
export default function PopupAnimation({ arr }: PopupAnimationInterface) {
    const ref = useRef(null);
    const isVisible = useInView(ref);
    const varient = {
        hidden: {
            y: "50%",
            opacity: "0%",
        },
        visible: (i: number) => ({
            y: "0%",
            opacity: "100%",
            transition: {
                ease: "circIn",
                delay: i * 0.1,
            },
        }),
    };
    return (
        <>
            {arr.map((el, idx) => (
                <motion.div
                    ref={ref}
                    variants={varient}
                    initial="hidden"
                    animate={isVisible ? "visible" : ""}
                    custom={idx}
                >
                    {el === " " ? <span className="mx-2"></span> : el}
                </motion.div>
            ))}
        </>
    );
}
