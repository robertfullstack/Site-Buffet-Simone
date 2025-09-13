import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <HeroSection />
                <MenuSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}