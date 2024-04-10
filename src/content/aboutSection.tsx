import { MotionValue } from "framer-motion";
import { AmimatedPara } from "../components/onScrollAnimation";

const E_YANTRA_LINK =
    "https://www.linkedin.com/in/omkarjoshi0207/details/featured/1599915249022/single-media-viewer/?profileId=ACoAACTXY7YBchvr2BdjwsjY0BayzXX1x2gA5bM";
const CLOUDLOCK =
    "https://www.cisco.com/c/en_in/products/security/cloudlock/index.html";
const CSPM = "https://www.netskope.com/products/public-cloud-security";
const SPM = "https://www.netskope.com/products/next-gen-swg";

interface AboutSectionTextInterface {
    scrollYProgress: MotionValue;
}

export default function AboutSectionText({
    scrollYProgress,
}: AboutSectionTextInterface) {
    //? this is a hard coded val based on no. of animatedPara
    const totalLen = 8;

    return (
        <>
            <AmimatedPara
                progress={scrollYProgress}
                totalLen={totalLen}
                curIdx={0}
                className="mt-5 md:mt-8 lg:mt-10"
            >
                <>
                    2019 marked my college graduation, and let's just say there
                    wasn't a single month I wasn't hacking away at some project
                    or another. Back then, my frontend toolkit was a trusty
                    trio: HTML, CSS, and{" "}
                    <em className="!text-rose-200">jQuery (Never liked it!)</em>
                    .{" "}
                    <em>
                        On the backend, Python was my Excalibur - powerful and
                        versatile (though with a steeper learning curve!).
                    </em>
                </>
            </AmimatedPara>
            {/* ------------------------------------------------------------- */}
            <AmimatedPara
                progress={scrollYProgress}
                totalLen={totalLen}
                curIdx={1}
                className="mt-5 md:mt-8 lg:mt-10"
            >
                <>
                    <em>
                        Then, React.js & Tailwind.css entered the scene, and it
                        was love at first sight (second only to Python, of
                        course)
                    </em>
                    . React became my frontend equivalent of Python - a
                    problem-solving powerhouse.
                </>
            </AmimatedPara>
            {/* ------------------------------------------------------------- */}
            <AmimatedPara
                progress={scrollYProgress}
                totalLen={totalLen}
                curIdx={2}
                className="mt-5 md:mt-8 lg:mt-10"
            >
                <>
                    My coding prowess wasn't limited to building cool stuff.{" "}
                    <em>
                        I even snagged the prestigious title of{" "}
                        <a
                            href={E_YANTRA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            Best Algorithm Designer at IIT Bombay's E-Yantra
                        </a>{" "}
                        competition!
                    </em>
                </>
            </AmimatedPara>
            {/* ------------------------------------------------------------- */}
            <AmimatedPara
                progress={scrollYProgress}
                totalLen={totalLen}
                curIdx={3}
                className="mt-5 md:mt-8 lg:mt-10"
            >
                <>
                    Forward to my first job - a Python backend engineer role at
                    Accenture.{" "}
                    <em>
                        While Python was my bread and butter, my React crush
                        persisted. I channeled it into side projects and even
                        managed to snag a few internal React projects, building
                        dashboards for both the company and clients.
                    </em>
                </>
            </AmimatedPara>
            {/* ------------------------------------------------------------- */}
            <AmimatedPara
                progress={scrollYProgress}
                totalLen={totalLen}
                curIdx={4}
                className="mt-5 md:mt-8 lg:mt-10"
            >
                <>
                    Cisco was next, and while I continued building impressive,
                    large-scale, scalable Python applications for{" "}
                    <a
                        href={CLOUDLOCK}
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Cisco Cloudlock
                    </a>
                    , it was strictly backend territory. I missed the
                    interactivity of frontend development.
                </>
            </AmimatedPara>
            {/* ------------------------------------------------------------- */}
            <AmimatedPara
                progress={scrollYProgress}
                totalLen={totalLen}
                curIdx={5}
                className="mt-5 md:mt-8 lg:mt-10"
            >
                <>
                    Then came Netskope - the turning point! After a year of
                    Python and no React, I landed my dream role.{" "}
                    <em>
                        For eight months, I built scalable backend architecture
                        handling a whopping 50 million requests daily for{" "}
                        <a
                            href={CSPM}
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Public Cloud Security
                        </a>{" "}
                    </em>
                    . But the best part?{" "}
                    <em className="!text-orange-300">
                        A smooth transition to full-time React developer,
                        crafting beautiful dashboards for Netskope's hero
                        product, the{" "}
                        <a
                            href={SPM}
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Next Generation Secure Web Gateway
                        </a>{" "}
                        and{" "}
                        <a
                            href={CSPM}
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Public Cloud Security
                        </a>
                        .
                    </em>
                </>
            </AmimatedPara>
            {/* ------------------------------------------------------------- */}
            <AmimatedPara
                progress={scrollYProgress}
                totalLen={totalLen}
                curIdx={6}
                className="mt-5 md:mt-8 lg:mt-10"
            >
                <>
                    And when I'm not coding? Well, I fuel my creativity with
                    delicious meals and epic video game adventures.{" "}
                    <em>Oh, and I'm a total science fiction nerd!</em>
                </>
            </AmimatedPara>
            {/* ------------------------------------------------------------- */}
            <AmimatedPara
                progress={scrollYProgress}
                totalLen={totalLen}
                curIdx={7}
                className="mt-5 md:mt-8 lg:mt-10"
            >
                <>
                    This is just a glimpse into my coding journey. It's been a
                    whirlwind of learning, challenges, and triumphs. Here's to
                    many more lines of code and exciting projects ahead!
                </>
            </AmimatedPara>
        </>
    );
}
