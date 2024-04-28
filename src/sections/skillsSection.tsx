import PopupAnimation from "../components/popupAnimation";

interface CardsInterface {
    title: string;
    expYears: number;
    usedWhere: Array<"Cisco" | "Accenture" | "NetSkope">;
}
function Chip({ text }: { text: "Cisco" | "Accenture" | "NetSkope" }) {
    let color;
    switch (true) {
        case text == "Cisco":
            color = "border-blue-600 text-blue-600 shadow-blue-800";
            break;
        case text == "NetSkope":
            color = "border-orange-700 text-orange-700 shadow-orange-800";
            break;
        case text == "Accenture":
            color = "border-purple-600 text-purple-600 shadow-purple-800";
            break;

        default:
            break;
    }
    return (
        <>
            <div
                className={`${color} w-fit rounded border px-1 text-[0.6rem]  opacity-80 shadow-[4px_4px_0px_black] md:text-sm`}
            >
                {text}
            </div>
        </>
    );
}

function Cards({ title, expYears, usedWhere }: CardsInterface) {
    return (
        <div
            className="m-1 w-fit overflow-hidden rounded-lg 
            border border-slate-950 bg-lime-50 p-1 text-center
            shadow-[4px_4px_0px_black] shadow-lime-500 md:p-4 md:text-left"
        >
            <div className="">
                <h1 className="large-text rounded-lg font-black text-lime-900 ">
                    {title}
                </h1>
            </div>
            <div className="font-mono">
                <span className="two-extra-large-text">{expYears}</span>
                <span>.years</span>
            </div>
            <div className="flex flex-wrap p-1 [&_div]:mr-1 md:[&_div]:mr-2">
                {usedWhere.map((el) => (
                    <Chip text={el} />
                ))}
            </div>
        </div>
    );
}
export default function SkillsSection() {
    const skill = [
        <Cards
            title="Python"
            expYears={5}
            usedWhere={["Accenture", "Cisco", "NetSkope"]}
        />,
        <Cards
            title="Flask"
            expYears={5}
            usedWhere={["Accenture", "Cisco", "NetSkope"]}
        />,
        <Cards
            title="FastAPI"
            expYears={5}
            usedWhere={["Accenture", "Cisco", "NetSkope"]}
        />,
        <Cards
            title="Node.Js"
            expYears={5}
            usedWhere={["Accenture", "NetSkope"]}
        />,
        <Cards
            title="Javascript"
            expYears={5}
            usedWhere={["Accenture", "NetSkope"]}
        />,
        <Cards
            title="React"
            expYears={3}
            usedWhere={["Accenture", "NetSkope"]}
        />,
        <Cards title="Typescript" expYears={2} usedWhere={["NetSkope"]} />,
        <Cards
            title="Tailwind"
            expYears={5}
            usedWhere={["Accenture", "NetSkope"]}
        />,
    ];
    return (
        <section className="cube-grid h-fit bg-zinc-200">
            <div className="h-full py-[1%] ">
                <div className="opacity-80">
                    <p
                        className="large-text highlight-green mx-auto flex w-fit justify-center overflow-hidden border border-black  
                        px-10 font-black uppercase shadow-inner shadow-white"
                    >
                        <PopupAnimation arr={Array.from("TLDR!")} />
                    </p>
                    <h1 className="two-extra-large-text flex w-full justify-center overflow-hidden pb-2 font-black">
                        <PopupAnimation arr={Array.from("My Excalibur's")} />
                    </h1>
                </div>
                <div className="flex flex-wrap items-center justify-center overflow-hidden">
                    <PopupAnimation arr={skill} />
                </div>
            </div>
            <p className="large-text flex justify-center pb-2 font-mono font-black uppercase opacity-60">
                <PopupAnimation arr={Array.from("{ Skills }")} />
            </p>
        </section>
    );
}
