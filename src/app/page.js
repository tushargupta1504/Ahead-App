import NavBar from "@components/NavBar";
import Hero from "@components/Hero";
import Emotions from "@components/Emotions";
import Manifesto from "@components/Manifesto";
import Vacancies from "@components/Vacancies";
import Footer from "@components/Footer";
import WorkWithUs from "@components/WorkWithUs";
import RateMe from "@components/RateMe";
import AwarenessTest from "@components/AwarenessTest";
import SelfImpr from "../components/SelfImpr";

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Emotions />
            <Manifesto />
            <SelfImpr />
            <RateMe />
            <AwarenessTest />
            <WorkWithUs />
            <Vacancies />
            <Footer />
        </>
    );
}
