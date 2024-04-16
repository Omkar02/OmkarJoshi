import { useMemo, useRef, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import {
    motion,
    useMotionTemplate,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import AboutPage from "./aboutPage";

// interface windowInterface {
//     ref: React.MutableRefObject<null>;
// }
// interface heroInterface {
//     ref: React.MutableRefObject<null>;
// }

function Window() {
    return (
        <div className="">
            <div
                className="mx-auto aspect-[8/5] w-[15rem] 
                md:w-[24rem] lg:mr-3 lg:aspect-[5/8] lg:w-[26rem]"
            ></div>
        </div>
    );
}

function Hero() {
    return (
        <>
            <section
                className="mx-auto my-2 flex h-full
                flex-col items-center justify-center text-center 
                lg:flex-row lg:justify-around lg:text-left"
            >
                <div className="mx-5 grid sm:gap-2 lg:max-w-4xl">
                    <p className="medium-text text-zinc-400">
                        Full Stack Developer
                    </p>
                    <h1 className="two-extra-large-text">
                        Crafting Exceptional Web Experiences With React, Python
                        & Node.Js
                    </h1>
                    <p className="large-text mt-1 font-mono">
                        I Design, Develop, & Deploy Web Applications.
                        Specializing In User-Friendly Interfaces & Robust
                        Back-End Solutions.
                    </p>
                </div>
                <Window />
            </section>
        </>
    );
}

function getWidth() {
    /**
     * This are constant value
     */
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) return "45%";
    if (screenWidth >= 768) return "40%";
    return "50%";
}

export default function HeroSection() {
    const ref = useRef(null);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "center center"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 12]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const imageX = useTransform(scrollYProgress, [0, 1], [getWidth(), 0]);
    const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 300px)))`;

    useMotionValueEvent(opacity, "change", (latest) => {
        /**
         * * This used for tracking opacity and update isHidden
         * * so to make mouse avaliable on bottom page also
         */
        latest === 0 ? setIsHidden(true) : setIsHidden(false);
    });
    const _memoHeroSection = useMemo(() => {
        return (
            <>
                <div
                    ref={ref}
                    className={`relative z-10 h-[200vh] overflow-clip ${isHidden ? "pointer-events-none" : ""}`}
                >
                    <motion.div
                        style={{ scale, opacity: opacity }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 40,
                            bounce: 200,
                        }}
                        className="left-0 top-0 h-dvh
                        origin-[50%_50%] lg:origin-[90%_40%]"
                    >
                        <div className="window-mask absolute -z-20 h-dvh w-full bg-zinc-900"></div>
                        <div className="window-mask">
                            <section className="mx-2 grid h-dvh grid-rows-13 md:mx-5 lg:mx-8">
                                <Header className="row-span-1" />
                                <main
                                    className="row-span-8 rounded-3xl bg-zinc-100 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]
                                shadow-inner lg:row-span-9"
                                >
                                    <Hero />
                                </main>
                                <Footer className="row-span-4 lg:row-span-3" />
                            </section>
                        </div>
                    </motion.div>
                </div>

                <AboutPage imageXCalc={imageXCalc} />
            </>
        );
    }, [imageXCalc, isHidden, opacity, scale]);
    return _memoHeroSection;
}
