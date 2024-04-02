"use client"
import { motion } from "framer-motion"
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {

  const text = "Say Hello";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.error("Email sending error:", error);

        },
      );
  };

  return (
    <motion.div initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{ duration: 1 }} className="flex flex-col justify-center items-center min-h-screen p-4">
      {/* Simplified Text Container */}
      <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8">
        <motion.div>
          {text.split("").map((letter, index) => (
            <motion.span key={index} initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 3, repeat: Infinity, delay: index * 0.1}}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
      
      {/* Simplified Form Container */}
      <form onSubmit={sendEmail} ref={form} className="w-full max-w-lg bg-red-50 rounded-xl text-lg flex flex-col gap-6 p-6">
        <span>Dear Elli,</span>
        <textarea rows="6" className="bg-transparent border-b-2 border-b-black outline-none resize-y" name="user_message" placeholder="Your message..."></textarea>
        <span>My mail address is:</span>
        <input type="text" className="bg-transparent border-b-2 border-b-black outline-none" name="user_email" placeholder="email@example.com"/>
        <span>Regards</span>
        <button type="submit" className="bg-purple-200 rounded font-semibold text-gray-600 p-3">Send</button>
        {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
        {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
      </form>
    </motion.div>
  )
}
