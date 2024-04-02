"use client"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" }
]

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const topVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 45,
            backgroundColor:"rgb(255,255,255)"
        }
    }
    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor:"rgb(255,255,255)"
        }
    }

    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened:{
            x: 0,
            opacity: 1
        }
    }
  return (
    <>
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/* Links */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    // <Link href={link.url} key={link.title}>{link.title}</Link>
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* Logo */}
            <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="w-8 flex items-center justify-center text-white mr-1">ELLI</span>
                    <span className="w-16 h-8 round bg-white text-black justify-center flex items-center">RAYNAI</span>
                </Link>
            </div>
            <div className="hidden md:flex justify-end gap-4 w-1/3">
                <Link href="https:///www.github.com/eraynai" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </a>
                </Link>
                <Link href="https://www.linkedin.com/in/elliraynai/" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                    </a>
                </Link>
            </div>
            {/* Responsive Menu */}
            <div className="md:hidden">
                {/* Menu Button */}
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen((prev) => !prev )}>
                    <motion.div variants={topVariants} animate={ open ? "opened" : "closed"} className="w-10 h-1 bg-black round origin-left"></motion.div>
                    <motion.div variants={centerVariants} animate={ open ? "opened" : "closed"} className="w-10 h-1 bg-black round"></motion.div>
                    <motion.div variants={bottomVariants} animate={ open ? "opened" : "closed"} className="w-10 h-1 bg-black round origin-left"></motion.div>
                </button>
                {/* Menu List */}
                {open && (
                <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {links.map(link => (
                        <motion.div variants={listItemVariants} className="" key={link.title}>
                            <Link href={link.url} >{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                )}
            </div>
      </div>
    </>
  );
}
