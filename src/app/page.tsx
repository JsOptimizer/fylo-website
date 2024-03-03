"use client"
import { Navbar } from "@/components";
import { Features, Footer, Singup, Teams } from "@/sections";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_PUBLICAPI_KEY)
  return (
    <main className="">
       <Navbar />
      <Features />
      <Teams />
      <Singup />
      <Footer />
    </main>
  );
}
