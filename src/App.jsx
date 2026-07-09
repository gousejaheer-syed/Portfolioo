import React, { useLayoutEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Reveal from "./components/Reveal.jsx";
import BackToTop from "./components/BackToTop.jsx";

function App() {
    // Ensures the page always starts from the top on refresh
    useLayoutEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />

            <main>
                {/* Hero Section */}
                <section id="home" className="bg-premium-black">
                    <Reveal>
                        <Hero />
                    </Reveal>
                </section>

                {/* About Section */}
                <section id="about" className="bg-premium-grey">
                    <Reveal delay={0.2}>
                        <About />
                    </Reveal>
                </section>

                {/* Skills Section */}
                <section id="skills" className="bg-premium-black">
                    <Reveal delay={0.2}>
                        <Skills />
                    </Reveal>
                </section>

                {/* Projects Section */}
                <section id="projects" className="bg-premium-grey">
                    <Reveal delay={0.2}>
                        <Projects />
                    </Reveal>
                </section>

                {/* Experience Section */}
                <section id="experience" className="bg-premium-black">
                    <Reveal delay={0.2}>
                        <Experience />
                    </Reveal>
                </section>

                {/* Contact Section */}
                <section id="contact" className="bg-premium-grey">
                    <Reveal delay={0.2}>
                        <Contact />
                    </Reveal>
                </section>
            </main>

            {/* Floating button for smooth navigation back to top */}
            <BackToTop />
        </>
    );
}

export default App;