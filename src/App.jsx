import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
    return (
        <div>
            <Hero />
            <Features />
            <CTA />
            <Footer />
            <Analytics />
        </div>
    );
}

export default App;
