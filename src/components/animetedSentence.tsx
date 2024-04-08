import { MotionValue, motion, useTransform } from "framer-motion";

interface animatedSentenceInterface {
    sentence: string | string[];
    scrollY: MotionValue;
}

interface WordInterface {
    char: string;
    range: Array<number>;
    progress: MotionValue;
}

export default function AnimatedSentence({
    sentence,
    scrollY,
}: animatedSentenceInterface) {
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
