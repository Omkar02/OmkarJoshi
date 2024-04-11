import { ReactElement, useEffect, useMemo } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

interface InfiniteSlideInterface {
    children: ReactElement[];
}

export default function InfiniteSlide({ children }: InfiniteSlideInterface) {
    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        const duration = 20; // Animation duration in seconds
        const finalPosition = -width / 2 - 12;

        animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });
    }, [xTranslation, width]);

    const _memoComponent = useMemo(() => {
        return (
            <div
                className={`overflow-hidden
              [mask-image:_linear-gradient(to_right,transparent_0,_black_38px,_black_calc(100%-38px),transparent_100%)]
              lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]`}
            >
                <motion.ul
                    ref={ref}
                    className="left-0 flex gap-4"
                    style={{ x: xTranslation }}
                >
                    {children}
                </motion.ul>
            </div>
        );
    }, [children, ref, xTranslation]);
    return _memoComponent;
}
