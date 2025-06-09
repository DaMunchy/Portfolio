"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      title: "Nyxelia Bot",
      description:
        "A multifunctional WhatsApp bot with AI, games, tools, and an RPG system.",
      link: "https://wa.me/6285198738137",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal interactive portfolio built with Next.js and Tailwind CSS.",
      link: "/",
    },
    {
      title: "AI Chat",
      description:
        "Talk to Nyxelia — an AI built for easy, meaningful conversations right in your browser.",
      link: "https://nyxchat.vercel.app/",
    },
    {
      title: "Nyx Downloader",
      description:
        "NyxDownloader is a modern, minimalist YouTube downloader built with Next.js. Instantly download YouTube videos and audio in MP3 or MP4 format without ads or distractions.",
      link: "https://nyxdl.vercel.app/",
    },
  ];

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

      {/* Header navigasi */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/10">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-2xl md:text-3xl font-bold"
        >
          Munchy
        </motion.h1>

        {/* Desktop nav */}
        <nav className="space-x-6 text-white text-lg hidden md:flex">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-40 bg-black/80 backdrop-blur-md text-white text-center py-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:underline">Home</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:underline">Projects</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:underline">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:underline">Contact</Link>
        </div>
      )}

      {/* Konten utama */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-white pt-28">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white via-purple-400 to-white text-transparent bg-clip-text animate-pulse"
        >
          My Projects
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-white/80 text-sm mb-5">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block px-4 py-2 border border-white/30 text-white rounded hover:bg-white/20 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
