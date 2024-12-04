// app/page.tsx
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
// import Anime from "@/components/sections/Anime";
// import Code from "@/components/sections/Code";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Anime />
      <Code /> */}
      <Footer></Footer>
    </>
  );
}
