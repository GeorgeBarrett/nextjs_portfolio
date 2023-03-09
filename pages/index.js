import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import HomePage from "@/components/HomePage";
import Me from "@/components/Me";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio />
      <Experience />
      <Me />
      <Contact />
    </div>
  );
}
