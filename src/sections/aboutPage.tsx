import { MotionValue, motion } from "framer-motion";

interface AboutPageInterface {
    imageXCalc: MotionValue<string>;
}

export default function AboutPage({ imageXCalc }: AboutPageInterface) {
    return (
        <section>
            <div className="mt-[-200vh] h-[200vh] overflow-clip bg-zinc-900 pb-20">
                <motion.span
                    style={{ x: imageXCalc }}
                    className="sticky top-[50%] mx-auto block aspect-video 
                    w-[1200px] max-w-[90%] rounded-[60px] 
                    border-4 border-white bg-lime-300 md:top-1/4"
                />
            </div>
            <div className="space-y-[80px] bg-lime-300 md:text-[300px]">
                <p>Some more content</p>
                <p>So there's</p>
                <p>Some room</p>
                <p>To scroll...</p>
            </div>
        </section>
    );
}
