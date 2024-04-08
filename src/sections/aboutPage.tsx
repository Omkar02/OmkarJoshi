import { MotionValue, motion, useScroll } from "framer-motion";
import AnimatedSentence from "../components/animetedSentence";
import { useRef } from "react";
import { AboutSectionText } from "../text/aboutSection";
interface AboutPageInterface {
    imageXCalc: MotionValue<string>;
}

export default function AboutPage({ imageXCalc }: AboutPageInterface) {
    const banner = useRef(null);
    const { scrollYProgress } = useScroll({
        target: banner,
        offset: ["start start", "center center"],
    });
    return (
        <>
            <section
                ref={banner}
                className="mt-[-200vh] h-[200vh] overflow-clip bg-zinc-900"
            >
                <motion.span
                    style={{ x: imageXCalc }}
                    transition={{ ease: "easeInOut" }}
                    className="sticky top-1/2 mx-auto 
                block aspect-video h-fit 
                w-[1200px] max-w-[90%] rounded-3xl 
                p-5 md:top-1/4 lg:top-[20%]"
                >
                    <h1 className="extra-large-text font-serif text-white">
                        <AnimatedSentence
                            sentence={"My Coding Odyssey"}
                            scrollY={scrollYProgress}
                        />
                    </h1>
                    <div className="medium-text my-2 font-serif text-lime-300 lg:my-5">
                        {AboutSectionText}
                        {/* // TODO Below does not works as it causes the hone website to slow down.... */}
                        {/* <AnimatedSentence
                            sentence={AboutSectionText}
                            scrollY={scrollYProgress}
                        /> */}
                    </div>
                </motion.span>
            </section>
            <div className="space-y-[80px] overflow-clip bg-lime-300 text-7xl md:text-[300px]">
                <p>Some more content</p>
                <p>So there's</p>
                <p>Some room</p>
                <p>To scroll...</p>
            </div>
        </>
    );
}
