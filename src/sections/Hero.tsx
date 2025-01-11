"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

// Importing icons for the floating navbar (SVGs or images)
import ClipboardIcon from "@/assets/resume copy.png";
import GithubIcon from "@/assets/github.png";
import LinkedinIcon from "@/assets/linkedin.png";
import InstagramIcon from "@/assets/insta copy.png";
import EmailIcon from "@/assets/email.png";
import ProfilePic from "@/assets/pfp.png"; // Replace with your actual profile picture

declare global {
  interface Window {
    botpressWebChat: any;
  }
}

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const flipVariant = {
    hidden: { rotateX: 90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };

  // Use the useTypewriter hook
  const [text] = useTypewriter({
    words: ['Developer', 'Blender Artist', 'Coder', 'UI-UX Designer'],
    loop: 0, // Change this to a number for finite loops or set to Infinity for infinite looping
    delaySpeed: 2000,
  });

  useEffect(() => {
    window.botpressWebChat = {
      botId: "1f02dc69-88ec-4ac9-807e-92b5d1cc4fc9",
      host: "https://cdn.botpress.cloud",
      botName: "SupportBot",
      showMessageHistory: false,
      enableReset: true,
      startOpen: false,
    };

    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    const configScript = document.createElement("script");
    configScript.src =
      "https://mediafiles.botpress.cloud/1f02dc69-88ec-4ac9-807e-92b5d1cc4fc9/webchat/v2.1/config.js";
    configScript.async = true;
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden h-[100vh] flex items-center justify-center"
    >
      {/* Vertical Navigation Bar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-16 z-50">
        {/* Hero Section */}
        <div className="relative group">
          <a
            href="#hero"
            className="w-5 h-12 bg-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out absolute right-0 group-hover:w-32 group-hover:bg-blue-600"
            title="Hero"
          >
            <span className="text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              Home
            </span>
          </a>
        </div>

        {/* Skills Section */}
        <div className="relative group">
          <a
            href="#skills"
            className="w-5 h-12 bg-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out absolute right-0 group-hover:w-32 group-hover:bg-blue-600"
            title="Skills"
          >
            <span className="text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              Skills
            </span>
          </a>
        </div>

        {/* CP Profiles Section */}
        <div className="relative group">
          <a
            href="#cpprofiles"
            className="w-5 h-12 bg-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out absolute right-0 group-hover:w-32 group-hover:bg-blue-600"
            title="CP Profiles"
          >
            <span className="text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              CP Profiles
            </span>
          </a>
        </div>

        {/* My Projects Section */}
        <div className="relative group">
          <a
            href="#projects"
            className="w-5 h-12 bg-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out absolute right-0 group-hover:w-32 group-hover:bg-blue-600"
            title="My Projects"
          >
            <span className="text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              My Projects
            </span>
          </a>
        </div>

        {/* Blender Projects Section */}
        <div className="relative group">
          <a
            href="#blender-projects"
            className="w-5 h-12 bg-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 ease-in-out absolute right-0 group-hover:w-32 group-hover:bg-blue-600"
            title="Blender Projects"
          >
            <span className="text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              Blender Projects
            </span>
          </a>
        </div>
      </div>

      {/* Floating Navbar */}
      <div className="fixed top-4 h-[8vh] left-1/2 transform -translate-x-1/2 bg-blue-200 py-4 px-8 md:py-5 md:px-10 rounded-full z-20 flex space-x-8 items-center">
        <Link
          href="/assets/resume.pdf" // Replace with the actual path to your PDF file
          target="_blank" // Opens the PDF in a new tab
          rel="noopener noreferrer" // Security enhancement
        >
          <Image src={ClipboardIcon} alt="Resume" className="h-8 w-8" />
        </Link>

        <Link href="https://github.com/vidyadhardinde001">
          <Image src={GithubIcon} alt="GitHub" className="h-8 w-8" />
        </Link>
        <Link href="https://www.linkedin.com/in/vidyadhar-dinde-447371252/">
          <Image src={LinkedinIcon} alt="LinkedIn" className="h-8 w-8" />
        </Link>
        <Link href="https://www.instagram.com/_vidyadhar_d/">
          <Image src={InstagramIcon} alt="Instagram" className="h-8 w-8" />
        </Link>
        <Link href="mailto:vidyadhardinde@gmail.com">
          <Image src={EmailIcon} alt="Email" className="h-8 w-8" />
        </Link>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image src={ProfilePic} alt="Profile" width={40} height={40} />
        </div>
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-[100vh] overflow-hidden -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/bg-video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 w-full h-full bg-black opacity-60 blur-sm rounded-lg"></div>

      {/* Main Content */}
      <div className="container relative z-10 flex flex-col items-center text-center max-w-[1200px]">
        <motion.h1
          className="text-2xl md:text-6xl font-medium mt-6 tracking-tighter bg-[#ffffff] text-transparent bg-clip-text"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
          transition={{ duration: 0.8 }}
        >
          Hi There! I am <span className="font-bold ">Vidyadhar Dinde</span>.
        </motion.h1>

        <motion.h1
          className="text-2xl md:text-6xl font-regular mt-6 tracking-tighter bg-[#ffffff] text-transparent bg-clip-text"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
          transition={{ duration: 0.8 }}
        >
          I am a
        </motion.h1>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-7xl font-bold bg-blue-300 text-transparent bg-clip-text mt-2 max-w-[100%] h-[80px]"
          initial="hidden"
          animate="visible"
          variants={flipVariant}
          transition={{ duration: 3, delay: 0.2 }}
        >
          {text} <Cursor />
        </motion.h1>
      </div>
    </section>
  );
};
