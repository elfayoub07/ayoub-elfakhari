import { useScrollReveal } from "./useScrollReveal";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useRef } from "react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [sent, setSent] = useState(false);
  
  // Create refs for form inputs
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get values from refs
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const subject = subjectRef.current?.value || "";
    const message = messageRef.current?.value || "";
    
    // Build WhatsApp message
    const whatsappMessage = `Hello Ayoub,%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Subject:* ${encodeURIComponent(subject)}%0A*Message:* ${encodeURIComponent(message)}%0A%0A(This message was sent from your portfolio contact form)`;
    
    // WhatsApp phone number (without + or spaces)
    const phoneNumber = "212647060173";
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
    
    // Show sent feedback
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    
    // Optional: reset form fields
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (subjectRef.current) subjectRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <section id="contact" className="py-32 relative noise-bg">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Let's work
              <br />
              <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Have a project in mind? I'd love to hear about it.
              Let's create something amazing together.
            </p>
            <div className="space-y-4">
              {/* Email Link */}
              <a
                href="mailto:Elfakhariayoub@gmail.com"
                className="flex items-center gap-4 group hover:bg-primary/5 p-2 rounded-xl transition-colors cursor-pointer no-underline"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">Elfakhariayoub@gmail.com</p>
                </div>
              </a>

              {/* Phone Link */}
              <a
                href="tel:+212647060173"
                className="flex items-center gap-4 group hover:bg-primary/5 p-2 rounded-xl transition-colors cursor-pointer no-underline"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium"> (+212)6.47.06.01.73</p>
                </div>
              </a>

              {/* Location Link */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Laayoune,Morocco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:bg-primary/5 p-2 rounded-xl transition-colors cursor-pointer no-underline"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Laayoune, Morocco</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - WhatsApp Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                ref={nameRef}
                type="text"
                placeholder="Name"
                required
                className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                required
                className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <input
              ref={subjectRef}
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              ref={messageRef}
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43_96%_56%_/_0.4)]"
            >
              {sent ? "Opening WhatsApp... ✓" : (
                <>
                  <Send size={18} />
                  Send Me Message via WhatsApp
                </>
              )}
            </button>
            <p className="text-x text-muted-foreground text-center">
              Clicking sends your message directly to my WhatsApp
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;