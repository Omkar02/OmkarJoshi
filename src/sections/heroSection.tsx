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

interface windowInterface {
    windowFor: "mobile" | "desktop";
    classname: string;
    ref: React.MutableRefObject<null>;
}
interface heroInterface {
    ref: React.MutableRefObject<null>;
}

function Window({
    windowFor = "mobile",
    classname = "",
    ref,
}: windowInterface) {
    const visiblity = windowFor == "mobile" ? "lg:hidden" : "hidden lg:block";
    return (
        <div className={`${classname} ${visiblity}`} ref={ref}>
            <div
                className="mx-auto aspect-[5/8] w-[16rem] 
                md:w-[24rem] lg:mr-3 lg:w-[26rem]"
            ></div>
        </div>
    );
}

function Hero({ ref }: heroInterface) {
    return (
        <>
            <section
                className="mx-auto flex h-full 
                flex-col-reverse items-center justify-around 
                text-center lg:flex-row lg:text-left"
            >
                <div className="mx-5 grid gap-2 lg:max-w-4xl">
                    <p className="text-md text-zinc-400 sm:text-xl lg:text-2xl">
                        Full Stack Developer
                    </p>
                    <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl xl:text-8xl">
                        Crafting Exceptional Web Experiences With React, Python
                        & Node.Js
                    </h1>
                    <p className="mt-1 font-mono text-base md:mt-5 md:text-xl lg:text-2xl">
                        I Design, Develop, & Deploy Web Applications.
                        Specializing In User-Friendly Interfaces & Robust
                        Back-End Solutions.
                    </p>
                </div>
                <Window windowFor="desktop" classname="" ref={ref} />
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
    const imageXCalc = useMotionTemplate`max(0, calc(${imageX}% + calc(${imageX}vw - 300px)))`;

    return (
        <>
            <div className="relative z-10 h-[200vh] overflow-clip">
                <motion.div
                    style={{ scale }}
                    className="hero-background sticky left-0 top-0 h-screen 
                    origin-[50%_50%] md:origin-[90%_40%]"
                >
                    <div className="window-mask">
                        <section className="grid-rows-13 mx-2 grid h-screen md:mx-5 lg:mx-8">
                            <Header className="row-span-1" />
                            <main className="row-span-7 rounded-3xl bg-zinc-100 shadow-inner lg:row-span-9">
                                <Hero ref={ref} />
                            </main>
                            <Footer className="row-span-6 mb-2 lg:row-span-3" />
                        </section>
                        {/* <Window
                            windowFor="mobile"
                            classname="h-screen"
                            ref={ref}
                        /> */}
                    </div>
                </motion.div>
            </div>

            <AboutPage imageXCalc={imageXCalc} />
        </>
    );
}
