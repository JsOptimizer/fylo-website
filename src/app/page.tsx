import { Navbar } from "@/components";
import { Features, Footer, Singup, Teams } from "@/sections";

export default function Home() {
  return (
    <main className="">
      <Features />
      <Teams />
      <Singup />
      <Footer />
    </main>
  );
}
