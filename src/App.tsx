import HeroSection from "./sections/heroSection";
import SkillsSection from "./sections/skillsSection";
import WorkHistorySection from "./sections/workHistorySection";

export default function App() {
    return (
        <main className="bg-zinc-900">
            <HeroSection />
            <WorkHistorySection />
            <SkillsSection />
            <section className="flex h-[100vh] items-center justify-center bg-zinc-900 font-serif text-[8rem] text-zinc-500">
                Some More Scroll
            </section>
        </main>
    );
}
