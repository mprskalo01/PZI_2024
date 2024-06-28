import Image from "next/image";
import Hero from "./components/Home/Hero";

export default function Home() {
  return (
    <div className='p-5 sm:px-10 md:px-20'>
      <Hero />
    </div>
  );
}
