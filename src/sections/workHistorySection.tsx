import { useScroll, useTransform, motion } from "framer-motion";
import { ReactElement, useRef } from "react";
import { Accenture, Cisco, Education, Netskope } from "../content/workHistory";

function getWidth() {
    /**
     * This are constant value
     */
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) return ["50%", "-60%"]; // all above md screens
    return ["10%", "-90%"]; // till sm screen
}

export default function WorkHistorySection() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const x = useTransform(scrollYProgress, [0, 1], getWidth());
    return (
        <section ref={targetRef}>
            <div className="cube-grid h-[400vh] space-y-[80px] overflow-clip bg-stone-900">
                <div className="sticky top-2 flex h-screen items-center overflow-hidden lg:top-10">
                    <motion.div
                        style={{ x: x }}
                        className="flex gap-4 lg:gap-10"
                    >
                        {cards.map((card) => {
                            return <Card card={card} key={card.id} />;
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="flex h-[88vh] w-[26rem] items-start justify-start rounded-3xl 
            bg-lime-100 bg-opacity-10 p-6 shadow-inner 
            shadow-green-300 backdrop-blur-sm md:w-[90vw] lg:h-[60rem] lg:w-[44rem]"
        >
            <section
                className="mx-auto h-full  w-full rounded-3xl border border-black
                bg-gradient-to-br from-lime-200 to-lime-500 p-2 text-black lg:p-6 se:p-4"
            >
                <>{card.component}</>
            </section>
        </div>
    );
};

type CardType = {
    component: ReactElement;
    id: number;
};

const cards: CardType[] = [
    {
        component: <Education />,
        id: 1,
    },
    {
        component: <Accenture />,
        id: 2,
    },
    {
        component: <Cisco />,
        id: 3,
    },
    {
        component: <Netskope />,
        id: 4,
    },
];
