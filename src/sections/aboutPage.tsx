import { MotionValue, motion } from "framer-motion";

interface AboutPageInterface {
    imageXCalc: MotionValue<string>;
}

export default function AboutPage({ imageXCalc }: AboutPageInterface) {
    return (
        <section>
            <div className="mt-[-200vh] h-[200vh] overflow-clip bg-blue-300 pb-20">
                <motion.span
                    style={{ x: imageXCalc }}
                    className="sticky top-1/2 mx-auto block aspect-video w-[1600px] max-w-[90%] rounded-[60px] bg-gray-300 shadow-2xl md:top-1/4"
                />
            </div>
            <div className="space-y-[80px] bg-blue-100 md:text-[300px]">
                <p>Some more content</p>
                <p>So there's</p>
                <p>Some room</p>
                <p>To scroll...</p>
            </div>
        </section>
    );
}
