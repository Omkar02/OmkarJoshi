import Footer from "./footer";
import Header from "./header";

function Window({ windowFor = "mobile", classname = "" }) {
    const visiblity = windowFor == "mobile" ? "md:hidden" : "hidden md:block";
    return (
        <div className={`${classname} ${visiblity}`}>
            <div
                className="mx-auto aspect-[5/8] w-[16rem] 
            rounded-full border-4 border-lime-400 shadow-inner md:mx-0 
            md:w-[24rem] lg:mr-3 lg:w-[26rem]"
            ></div>
        </div>
    );
}

function Hero() {
    return (
        <>
            <section
                className="mx-auto flex h-full 
                flex-col-reverse items-center justify-around 
                text-center md:text-left lg:flex-row"
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
                <Window windowFor="desktop" />
            </section>
        </>
    );
}

export default function HeroSection() {
    return (
        <>
            <section className="grid-rows-13 mx-2 grid h-screen md:mx-5 lg:mx-8">
                <Header className="row-span-1" />
                <main className="row-span-7 rounded-3xl bg-zinc-100 md:row-span-9">
                    <Hero />
                </main>
                <Footer className="row-span-6 mb-2 md:row-span-3" />
            </section>
            <Window
                windowFor="mobile"
                classname="h-screen flex justify-center items-center"
            />
        </>
    );
}
