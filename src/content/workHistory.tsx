import { MdArrowOutward } from "react-icons/md";

export function Education() {
    return (
        <div className="flex h-full flex-col justify-between">
            <div>
                <section className="">
                    <h1 className="extra-large-text font-black uppercase">
                        Education
                    </h1>
                    <p className="medium-text font-black uppercase text-teal-800">
                        Fr. Conceicao Rodrigues College of Eng.
                    </p>
                </section>
                <ul className="body-text font-mono [&_li]:mt-2 [&_li]:md:mt-5 [&_p]:indent-10">
                    <li>
                        During my time at Fr.Conceicao Rodrigues College of
                        Engineering, I embraced opportunities that defined my
                        journey.
                    </li>
                    <li>
                        I proudly contributed to TedX as a Student Tutor, where
                        I had the privilege of <em>teaching physics</em> to
                        orphanage kids. Proud of that!
                    </li>
                    <li>
                        Additionally, I led the <em>Magazine design</em> for
                        IEEE at my college, created some great stuff.{" "}
                        <a
                            className="link inline-flex items-center uppercase !text-sky-800"
                            href="https://drive.google.com/file/d/1b0HBM13QMZGITHFwrh_vC3C9_dJWuOxD/view?usp=sharing"
                        >
                            sample <MdArrowOutward />
                        </a>
                    </li>
                    <li>
                        To top it off, I earned the prestigious{" "}
                        <span className="font-black">
                            "Best Algorithm Design"
                        </span>{" "}
                        award from IIT-Bombay, a testament to my dedication and
                        excellence in my field.
                    </li>
                </ul>
            </div>

            <p className="large-text rounded-3xl bg-white bg-opacity-50 p-1 text-center font-mono font-black shadow-inner shadow-teal-500">
                2016 To 2019
            </p>
        </div>
    );
}

export function Accenture() {
    return (
        <div className="flex h-full flex-col justify-between">
            <div>
                <section className="">
                    <h1 className="extra-large-text font-black uppercase">
                        SDE I <span className="body-text">Backend</span>
                    </h1>
                    <p className="medium-text font-black uppercase text-teal-800">
                        Accenture, plc.
                    </p>
                </section>
                <ul className="body-text font-mono [&_li]:mt-2 [&_li]:md:mt-5 [&_p]:indent-10">
                    <li>
                        <em>Streamlined Field Worker Data Delivery:</em>{" "}
                        Designed robust Flask REST API for real-time client
                        access to critical information.
                    </li>
                    <li>
                        <em>Automated Data Processing (24x Faster):</em> Built
                        Python & Apache Airflow (GCP) ETL pipelines, reducing
                        processing time from 8 hours to 20 minutes via parallel
                        processing.
                    </li>
                    <li>
                        <em>Enhanced Internal Visibility (React):</em> Developed
                        React dashboard for job status analysis & log parsing to
                        pinpoint failures, aiding current & new team members.
                    </li>
                </ul>
            </div>

            <p className="large-text rounded-3xl bg-white bg-opacity-50 p-1 text-center font-mono font-black shadow-inner shadow-teal-500">
                Oct, 2019 To June, 2021
            </p>
        </div>
    );
}

export function Cisco() {
    return (
        <div className="flex h-full flex-col justify-between">
            <div>
                <section className="">
                    <h1 className="extra-large-text font-black uppercase">
                        SDE II <span className="body-text">Backend</span>
                    </h1>
                    <p className="medium-text font-black uppercase text-teal-800">
                        Cisco Systems, Inc.
                    </p>
                </section>
                <ul className="body-text font-mono [&_li]:mt-2 [&_li]:md:mt-5 [&_p]:indent-10">
                    <li>
                        Designed & led development of scalable microservices
                        architecture with fairness for high-volume customer
                        requests. Leveraged AWS SQS & custom distributor for
                        optimal performance & multi-tenancy,{" "}
                        <em>driving ~18% revenue increase via improved TTD.</em>
                    </li>
                    <li>
                        <em>
                            Developed and automated the core logic for
                            remediation flow
                        </em>{" "}
                        for a non-complaint event, having a Self Heal feature
                        for customer.
                    </li>
                    <li>
                        <em>Enriched system metrics</em> by integrating the
                        services with telemetry; facilitated in-depth logs by
                        correlating events.
                    </li>

                    <li>
                        <em>
                            Engineering owner of the E2E experience of the
                            CloudLock CASB platform
                        </em>
                        , listing evaluating and rendering compliance reports.
                    </li>
                </ul>
            </div>
            <p className="large-text rounded-3xl bg-white bg-opacity-50 p-1 text-center font-mono font-black shadow-inner shadow-teal-500">
                July, 2021 To June, 2022
            </p>
        </div>
    );
}

export function Netskope() {
    const SPM =
        "https://www.netskope.com/products/saas-security-posture-management";
    return (
        <div className="flex h-full flex-col justify-between">
            <div>
                <section className="">
                    <h1 className="extra-large-text font-black uppercase">
                        MTS 2 <span className="body-text">FullStack</span>
                    </h1>
                    <p className="medium-text font-black uppercase text-teal-800">
                        Netskope, Inc.
                    </p>
                </section>
                <ul className="body-text font-mono [&_li]:mt-2 [&_li]:md:mt-5 [&_p]:indent-10">
                    <li>
                        <em>Led development team of 3 persons</em> to create
                        React, Typescript multipage Dashboard, which allows all
                        new and existing customers have a vantage view for all
                        the anomalies in their system{" "}
                        <a
                            href={SPM}
                            className="link inline-flex items-center uppercase !text-sky-800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SaaS Security Posture Mgt. <MdArrowOutward />
                        </a>
                    </li>
                    <li>
                        Collaborated seamlessly with PM, UX, and backend teams
                        to ensure a cohesive product vision and execution.
                    </li>
                    <li>
                        <em>Created documentation</em> for React on best
                        practices, linting, and testing, reducing teammate
                        conflicts and{" "}
                        <em>expediting code approval by 3 days.</em>
                    </li>
                    <li>
                        <em>Overhauled consumer queue & scheduler</em>, boosting
                        throughput 99.9% & doubling traffic capacity to handle
                        10M daily events,{" "}
                        <em>
                            with an average time to anomaly detection of ~5
                            minutes.
                        </em>
                    </li>
                </ul>
            </div>
            <p className="large-text rounded-3xl bg-white bg-opacity-50 p-1 text-center font-mono font-black shadow-inner shadow-teal-500">
                July, 2022 To Present
            </p>
        </div>
    );
}
