"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ip, setIp] = useState("Loading...");
  const [isOpen, setIsOpen] = useState(false);
  const [systemInfo, setSystemInfo] = useState({
    platform: "",
    userAgent: "",
    language: "",
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
      audio.play().catch(() => {});
    }

    setSystemInfo({
      platform: navigator.platform,
      userAgent: navigator.userAgent,
      language: navigator.language,
    });

    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Not available"));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      <audio ref={audioRef} autoPlay loop>
        <source src="/audio/background.mp3" type="audio/mpeg" />
      </audio>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/10">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-2xl md:text-3xl font-bold"
        >
          Munchy
        </motion.h1>

        <nav className="space-x-6 text-white text-lg hidden md:flex">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-40 bg-black/80 backdrop-blur-md text-white text-center py-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:underline">Home</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:underline">Projects</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:underline">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:underline">Contact</Link>
        </div>
      )}

      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 pt-32 text-white text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0.6, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-400 to-white text-transparent bg-clip-text drop-shadow animate-pulse"
        >
          Hi, I'm Munchy
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-white/80"
        >
          <Typewriter
            words={["Student", "Developer", "Dreamer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="flex flex-col items-center gap-4 mt-6"
>
  <p className="text-white/70 text-base md:text-lg max-w-md">
    I love building things that live on the internet, from websites to bots and everything in between.
  </p>
</motion.div>


        <section className="grid md:grid-cols-2 gap-6 max-w-5xl w-full px-4">
          <InfoCard title="System Info">
            <li><strong>Platform:</strong> {systemInfo.platform}</li>
            <li><strong>User Agent:</strong> {systemInfo.userAgent}</li>
            <li><strong>Language:</strong> {systemInfo.language}</li>
            <li><strong>IP Address:</strong> {ip}</li>
          </InfoCard>

          <InfoCard title="Tech Stack">
            <li>Next.js (React Framework)</li>
            <li>Tailwind CSS (Utility-first CSS)</li>
            <li>Framer Motion (Animation)</li>
          </InfoCard>
        </section>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-xl mt-4">
          {["Next.js", "Tailwind CSS", "JavaScript", "Typescript"].map((tech) => (
            <span
              key={tech}
              className="bg-white/10 px-4 py-2 rounded-lg text-white border border-white/20 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-white/60 text-sm flex flex-col items-center gap-3">
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/DaMunchy" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://instagram.com/e3b567" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/6281931488608" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
          <p>© 2025 Munchy. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-[1.02] transition-transform duration-300 text-left shadow text-white/90 text-sm">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-1 list-disc list-inside">{children}</ul>
    </div>
  );
}
