import { FaArrowRight } from "react-icons/fa6";

export default function Footer({ className = "" }) {
    return (
        <footer
            className={`${className} my-2 flex flex-col justify-between sm:my-5 lg:flex-row`}
        >
            <div className="h-full w-full rounded-3xl border border-lime-300 "></div>
            <button
                className="group mt-2 flex h-36 min-w-full items-center justify-center 
                rounded-3xl bg-lime-400 p-4 text-3xl
                lg:ml-5 lg:mt-0 lg:h-full lg:min-w-fit lg:text-6xl"
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
