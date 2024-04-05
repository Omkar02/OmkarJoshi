import { FaArrowRight } from "react-icons/fa6";

export default function Header({ className = "" }) {
    return (
        <header className={`${className} flex items-center justify-between`}>
            <h1
                className="font-zenDots text-lg italic 
                text-lime-400 sm:text-2xl lg:text-3xl"
            >
                Omkar J
            </h1>
            <button
                className="group flex min-w-fit items-center justify-center 
                rounded-3xl bg-lime-400 p-2 sm:p-4 sm:text-xl md:p-3 lg:text-2xl"
            >
                <p className="pr-2 font-bold md:pr-4">Connect with me</p>
                <span
                    className="rotate-0 transition-all duration-200 
                    ease-in-out group-hover:-rotate-45"
                >
                    <FaArrowRight />
                </span>
            </button>
        </header>
    );
}
