"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{ duration: 1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative" style={{ maxWidth: '800px' }}>
          <Image src="/hero.png" alt="elli raynai" fill className="object-contain"/>
        </div>
        {/* Text Container */}
        <div className="h-1/2 flex lg:h-full lg:w-1/2 flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">Full Stack Developer with a Flair for Design</h1>
          {/* Desc */}
          <p className="md:textxl">My name is Elli and I'm a web developer who is passionate about finding solutions and collaborating on projects of all shapes and sizes.</p>
          {/* Buttons */}
          <div className="w-full flex gap-4 justify-center">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
     </motion.div>
  );
};

export default Homepage;
