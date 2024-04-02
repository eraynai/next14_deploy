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
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{ duration: 1}}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl xl:text-6xl">
          <div>
          <motion.div>
            {text.split("").map((letter, index) => (
                <motion.span key={index} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity, delay: index * 0.1 }}>{letter}</motion.span>
            ))}
             😊
          </motion.div>
          </div>
        </div>
        {/* Form Container */}
        <form onSubmit={sendEmail} ref={form} className="h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-24 mt-3 mb-3 xl:mt-0  justify-center p-14 xl:p-24">
          <span>Dear Elli,</span>
          <textarea rows={6} className="bg-transparent border-b-2 border-b-black outline-none resize-y" name="user_message"/>
          <span>My mail address is:</span>
          <input type="text" className="bg-transparent border-b-2 border-b-black outline-none" name="user_email"/>
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
          {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
          {error && <span className="text-green-600 font-semibold">Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  )
}
