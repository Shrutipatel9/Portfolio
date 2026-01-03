import Circles from "../../components/Circles";
import { BsArrowRight, BsEnvelope, BsTelephone, BsGeoAlt, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TEMPORARY: Reverting to simulation so you don't get errors without keys.
    // When you have keys, uncomment the emailjs block below.

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsLoading(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Also open mail client as backup
      const { name, email, subject, message } = formData;
      const mailtoLink = `mailto:shrutikamani024@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoLink;

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);

    /* 
    // REAL EMAILJS CODE (Uncomment when you have keys)
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ) ....
    */
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-[100vh] bg-primary/30">
      <div className="container mx-auto py-40 min-h-[100vh] flex items-center xl:items-start justify-center">
        <div className="flex flex-col xl:flex-row gap-x-8 w-full">
          {/* Left Side - Info */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col justify-center mb-8 xl:mb-0"
          >
            <h2 className="h2 mb-4">Get in <span className="text-accent">Touch</span></h2>
            <p className="max-w-[400px] mb-8 text-white/60">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a href="mailto:shrutikamani024@gmail.com" className="bg-[#1e293b] p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:border-accent transition-all duration-300 cursor-pointer group hover:shadow-[0_0_20px_rgba(241,48,36,0.1)] hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <BsEnvelope />
                </div>
                <div>
                  <div className="text-xs text-white/50 group-hover:text-white/80 transition-all">Email</div>
                  <div className="text-sm font-semibold group-hover:text-accent transition-all">shrutikamani024@gmail.com</div>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+917984663563" className="bg-[#1e293b] p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:border-accent transition-all duration-300 cursor-pointer group hover:shadow-[0_0_20px_rgba(241,48,36,0.1)] hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <BsTelephone />
                </div>
                <div>
                  <div className="text-xs text-white/50 group-hover:text-white/80 transition-all">Phone</div>
                  <div className="text-sm font-semibold group-hover:text-accent transition-all">+91 7984663563</div>
                </div>
              </a>



              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/shrutikamani/" target="_blank" rel="noreferrer" className="bg-[#1e293b] p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:border-accent transition-all duration-300 cursor-pointer group hover:shadow-[0_0_20px_rgba(241,48,36,0.1)] hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <BsLinkedin />
                </div>
                <div>
                  <div className="text-xs text-white/50 group-hover:text-white/80 transition-all">LinkedIn</div>
                  <div className="text-sm font-semibold group-hover:text-accent transition-all">linkedin.com/in/shrutikamani</div>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 bg-[#1e293b]/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 w-full mx-auto">
              <div className="flex gap-x-6 w-full">
                <div className="flex-1">
                  <label className="text-xs text-white/50 mb-2 block">Your Name <span className="text-accent">*</span></label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="input bg-[#131424] border-white/10 focus:border-accent" />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-white/50 mb-2 block">Your Email <span className="text-accent">*</span></label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" className="input bg-[#131424] border-white/10 focus:border-accent" />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/50 mb-2 block">Subject <span className="text-accent">*</span></label>
                <input required name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Project Inquiry" className="input bg-[#131424] border-white/10 focus:border-accent" />
              </div>
              <div>
                <label className="text-xs text-white/50 mb-2 block">Message <span className="text-accent">*</span></label>
                <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." className="textarea bg-[#131424] border-white/10 focus:border-accent h-[150px]"></textarea>
              </div>

              <button disabled={isLoading} type="submit" className="btn rounded-xl bg-accent hover:bg-accent/80 transition-all duration-300 flex items-center justify-center gap-2 text-white font-bold h-[50px] w-full disabled:opacity-70 disabled:cursor-not-allowed">
                {isLoading ? (
                  <span className="flex items-center gap-2">Processing... <span className="loading loading-spinner loading-sm"></span></span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <BsArrowRight />
                  </>
                )}
              </button>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 right-4 bg-green-500/90 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm flex items-center gap-2 z-50"
                >
                  <span>✨ Message sent successfully</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
