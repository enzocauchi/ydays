import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Program } from "./components/Program";
import { Speakers } from "./components/Speakers";
import { Sponsors } from "./components/Sponsors";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Speakers />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
