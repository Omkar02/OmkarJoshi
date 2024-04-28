import { MotionValue } from "framer-motion";
import { AmimatedPara } from "../components/onScrollAnimation";

const E_YANTRA_LINK =
    "https://www.linkedin.com/in/omkarjoshi0207/details/featured/1599915249022/single-media-viewer/?profileId=ACoAACTXY7YBchvr2BdjwsjY0BayzXX1x2gA5bM";
const CLOUDLOCK =
    "https://www.cisco.com/c/en_in/products/security/cloudlock/index.html";
const CSPM = "https://www.netskope.com/products/public-cloud-security";
const SPM =
    "https://www.netskope.com/products/saas-security-posture-management";

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
                    <em className="highlight-red">
                        jQuery/PHP (Never liked jQuery/PHP!)
                    </em>
                    . On the backend,{" "}
                    <em className="highlight-green">
                        Python was & is my Excalibur
                    </em>{" "}
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
                    Then, React.js & Tailwind.css entered the scene, and it was
                    love at first sight (second only to Python, of course).{" "}
                    <em className="highlight-green">
                        React became my new Excalibur.
                    </em>
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
                    My coding prowess wasn't limited to building cool stuff. I
                    even snagged the prestigious title of{" "}
                    <em className="highlight-green">
                        Best Algorithm Designer at IIT Bombay's E-Yantra
                        competition!
                    </em>{" "}
                    <a
                        href={E_YANTRA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        Here
                    </a>{" "}
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
                    Accenture. While Python was my bread and butter, my React
                    crush persisted.{" "}
                    <em className="highlight-green">
                        I channeled this passion into side projects and even
                        managed to snag a few internal React projects, building
                        dashboards for the team.
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
                    , it was strictly backend territory.{" "}
                    <em className="highlight-red">
                        {" "}
                        I missed the interactivity of frontend development.
                    </em>
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
                    Python and no React, I landed my dream role. For eight
                    months,{" "}
                    <em className="highlight-green">
                        I built scalable backend architecture handling a
                        whopping 50 million requests daily for
                    </em>{" "}
                    <a
                        href={CSPM}
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Public Cloud Security.
                    </a>
                    <p>But the best part?</p> A smooth transition to{" "}
                    <em className="highlight-green">
                        full-time React developer
                    </em>
                    , crafting beautiful dashboards for Netskope's hero product,
                    the{" "}
                    <a
                        href={SPM}
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SaaS Security Posture Management
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
                    <em className="highlight-green">
                        Oh, and I'm a total science fiction nerd!
                    </em>
                </>
            </AmimatedPara>
            {/* ------------------------------------------------------------- */}
        </>
    );
}
