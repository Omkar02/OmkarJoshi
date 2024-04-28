import { ReactElement, useMemo } from "react";

interface InfiniteSlideInterface {
    children: ReactElement[];
}

export default function InfiniteSlide({ children }: InfiniteSlideInterface) {
    const _memoComponent = useMemo(() => {
        return (
            <div
                className={`inline-flex w-full flex-nowrap overflow-hidden 
                [mask-image:_linear-gradient(to_right,transparent_0,_black_38px,_black_calc(100%-38px),transparent_100%)]
                lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]`}
            >
                <ul className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-1 [&_li]:w-max">
                    {children}
                </ul>
                <ul className=" animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-1 [&_li]:w-max">
                    {children}
                </ul>
            </div>
        );
    }, [children]);
    return _memoComponent;
}
