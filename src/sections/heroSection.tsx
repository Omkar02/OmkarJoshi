import { useRef } from "react";
import Footer from "./footer";
import AboutPage from "./aboutPage";
import Header from "./header";
import {
    motion,
    MotionValue,
    useMotionTemplate,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";

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
                className="mx-auto flex h-full 
                flex-col items-center justify-center text-center 
                lg:flex-row lg:justify-around lg:text-left"
            >
                <div className="mx-5 grid sm:gap-2 lg:max-w-4xl">
                    <p className="text-sm text-zinc-400 sm:text-xl lg:text-2xl">
                        Full Stack Developer
                    </p>
                    <h1 className="text-xl font-bold sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl">
                        Crafting Exceptional Web Experiences With React, Python
                        & Node.Js
                    </h1>
                    <p className="mt-1 font-mono text-sm sm:text-base md:mt-5 md:text-xl lg:text-2xl">
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

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "center center"],
    });
    const scrollYprocessSpring = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 40,
    }) as MotionValue<number>;

    const scale = useTransform(scrollYprocessSpring, [0, 1], [1, 12]);
    const imageX = useTransform(scrollYprocessSpring, [0, 1], [50, 0]);
    const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 300px)))`;

    return (
        <>
            <div ref={ref} className="relative z-10 h-[200vh]  overflow-clip">
                <motion.div
                    style={{ scale }}
                    className="left-0 top-0 h-dvh 
                    origin-[50%_50%] md:origin-[90%_40%] "
                >
                    <div className="window-mask absolute -z-20 h-dvh w-full bg-zinc-900"></div>
                    <div className="window-mask">
                        <section className="grid-rows-13 mx-2 grid h-dvh md:mx-5 lg:mx-8">
                            <Header className="row-span-1" />
                            <main className="row-span-8 rounded-3xl bg-zinc-100 shadow-inner lg:row-span-9">
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
}
