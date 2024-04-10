import { FaArrowRight } from "react-icons/fa6";
import InfiniteSlide from "../components/infiniteSlide";

import { useEffect, useRef, useState } from "react";

import {
    BiLogoAws,
    BiLogoDocker,
    BiLogoGoogleCloud,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoNodejs,
    BiLogoPostgresql,
    BiLogoPython,
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandCypress } from "react-icons/tb";

const logos = [
    <BiLogoPython />,
    <BiLogoJavascript />,
    <BiLogoReact />,
    <BiLogoTailwindCss />,
    <BiLogoTypescript />,
    <BiLogoPostgresql />,
    <BiLogoMongodb />,
    <TbBrandCypress />,
    <BiLogoDocker />,
    <BiLogoGoogleCloud />,
    <BiLogoAws />,
    <BiLogoNodejs />,
];

export default function Footer({ className = "" }) {
    const [fontSize, setFontSize] = useState(0); // Initial font size
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
            console.log(ref, 123);
            if (ref.current) {
                const availableHeight = ref.current.clientHeight;
                const desiredLineHeight = 1.2; // Adjust line-height as needed
                const newFontSize = availableHeight / desiredLineHeight;
                setFontSize(newFontSize);
            }
        }

        handleResize();
        // Cleanup function to remove event listener on unmount
        return () => handleResize();
    }, []);
    return (
        <footer
            className={`${className} my-2 grid grid-rows-2 gap-2 lg:grid-cols-10 lg:grid-rows-1`}
        >
            <div
                ref={ref}
                style={{ fontSize: `${fontSize}px` }}
                className={`row-span-1 h-full min-w-full overflow-hidden rounded-3xl border 
                border-lime-300 bg-zinc-900 text-center text-lime-300 lg:col-span-7 `}
            >
                <InfiniteSlide>
                    {[...logos, ...logos].map((logo, idx) => (
                        <li key={idx}>{logo}</li>
                    ))}
                </InfiniteSlide>
            </div>
            <button
                className="group row-span-1 flex h-full w-full items-center justify-center rounded-3xl 
                bg-lime-400 p-4 text-3xl lg:col-span-3
                lg:h-full lg:text-6xl"
            >
                <p className="pr-4 font-bold">Connect with me</p>
                <span
                    className="rotate-0 text-3xl transition-all duration-200 
                    ease-in-out group-hover:-rotate-45 lg:text-6xl"
                >
                    <FaArrowRight />
                </span>
            </button>
        </footer>
    );
}
