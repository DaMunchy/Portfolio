"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
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

        {/* Desktop Nav */}
        <nav className="space-x-6 text-white text-lg hidden md:flex">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-40 bg-black/80 backdrop-blur-md text-white text-center py-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:underline">Home</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:underline">Projects</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:underline">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:underline">Contact</Link>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-white pt-28">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-white via-purple-400 to-white text-transparent bg-clip-text animate-pulse"
        >
          Contact Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/20 max-w-xl w-full text-lg shadow-lg text-center"
        >
          <p className="text-white/90 leading-relaxed mb-4">
            Feel free to reach out via email. I’m open to collaborations, feedback, or just a friendly chat.
          </p>
          <a
            href="mailto:munchynes@gmail.com"
            className="inline-block mt-2 px-6 py-2 border border-white/30 text-white rounded hover:bg-white/20 transition"
          >
            Email
          </a>
        </motion.div>
      </div>
    </div>
  );
}
