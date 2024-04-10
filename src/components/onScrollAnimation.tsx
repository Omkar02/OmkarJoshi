import { MotionValue, motion, useTransform } from "framer-motion";
import { ReactElement } from "react";

interface animatedHeaderInterface {
    sentence: string | string[];
    scrollY: MotionValue;
}

interface WordInterface {
    char: string;
    range: Array<number>;
    progress: MotionValue;
}

interface AmimatedParaInterface {
    children: ReactElement;
    progress: MotionValue;
    totalLen: number;
    curIdx: number;
    className: string;
}

export function AnimatedHeader({ sentence, scrollY }: animatedHeaderInterface) {
    const sentenceArray = Array.isArray(sentence) ? sentence : [sentence];
    return (
        <>
            {sentenceArray.map((word) => {
                return word.split("").map((char, i) => {
                    const start = i / word.length;
                    const end = start + 1 / word.length;
                    return (
                        <Word
                            key={i}
                            char={char}
                            range={[start, end]}
                            progress={scrollY}
                        />
                    );
                });
            })}
        </>
    );
}

function Word({ char, range, progress }: WordInterface) {
    // console.log(range);
    const opacity = useTransform(progress, range, [0.2, 1]);
    return (
        <motion.span
            transition={{ staggerChildren: 0.5 }}
            className=""
            style={{ opacity: opacity, whiteSpace: "pre-wrap" }}
        >
            {char}
        </motion.span>
    );
}

export function AmimatedPara({
    children,
    progress,
    totalLen,
    curIdx,
    className,
}: AmimatedParaInterface) {
    const start = curIdx / totalLen;
    const end = start + 1 / totalLen;
    const opacity = useTransform(progress, [start, end], [0.2, 1]);
    const scale = useTransform(progress, [start, end], [0.98, 1]);
    return (
        <motion.p
            className={className}
            style={{ opacity: opacity, scale: scale }}
            transition={{ when: "beforeChildren" }}
        >
            {children}
        </motion.p>
    );
}
