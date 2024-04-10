import { ReactElement } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface InfiniteSlideInterface {
    children: ReactElement[];
}

const DURATION = 25; // Animation duration in seconds

export default function InfiniteSlide({ children }: InfiniteSlideInterface) {
    const [ref, { width }] = useMeasure();

    return (
        <div
            className={`my-auto inline-flex w-screen flex-nowrap overflow-hidden
                  [mask-image:_linear-gradient(to_right,transparent_0,_black_38px,_black_calc(100%-38px),transparent_100%)]
                  lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]`}
        >
            <motion.ul
                ref={ref}
                className="flex items-center justify-center md:justify-start [&_li]:ml-2 [&_li]:rounded-3xl [&_li]:border-2"
                animate={{
                    translateX: [0, -width / 2 - 13], //12 as there are 12 logos and divide by 2 as 2 copies
                    transition: {
                        duration: DURATION,
                        ease: "linear",
                        repeat: Infinity,
                    },
                }}
            >
                {children}
            </motion.ul>
        </div>
    );
}
