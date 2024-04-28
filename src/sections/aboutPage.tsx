import { MotionValue, motion, useScroll } from "framer-motion";
import { AnimatedHeader } from "../components/onScrollAnimation";
import { useRef } from "react";
import AboutSectionText from "../content/aboutSection";
interface AboutPageInterface {
    imageXCalc: MotionValue<string>;
}

const getOffset = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 640) return "start start";
    return "-30% -30%";
};

export default function AboutPage({ imageXCalc }: AboutPageInterface) {
    const banner = useRef(null);
    const { scrollYProgress } = useScroll({
        target: banner,
        offset: [getOffset(), "center center"],
    });
    return (
        <section
            ref={banner}
            className="cube-grid mt-[-200vh] h-fit overflow-clip bg-zinc-900 md:h-[200vh]"
        >
            <motion.span
                style={{ x: imageXCalc }}
                className="sticky mx-auto mt-[50vh] block w-full
                    rounded-3xl p-5 md:top-1/4 md:mt-[50vh]
                    lg:top-[20%] lg:mt-[0vh] lg:max-w-6xl"
            >
                <h1 className="extra-large-text font-black uppercase text-white">
                    <AnimatedHeader
                        sentence={"My Coding Odyssey"}
                        scrollY={scrollYProgress}
                    />
                </h1>
                <div className="body-text my-2 font-mono text-zinc-100 lg:my-5">
                    <AboutSectionText scrollYProgress={scrollYProgress} />
                </div>
            </motion.span>
        </section>
    );
}
