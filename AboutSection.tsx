import { useScrollReveal } from "./useScrollReveal";
import { useState, useEffect } from "react";

import {
  Code2, Palette, Video,
  Database, Smartphone, Settings,
  Zap, Globe, ShoppingCart,
  Briefcase, Users, Store,
  Coffee, ClipboardList
} from "lucide-react";

// 🔢 Count-up hook
const useCountUp = (targetValue: number, isVisible: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    let startTime = 0;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * targetValue);
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
        setHasAnimated(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, targetValue, duration, hasAnimated]);

  return count;
};

// 📊 Stat item
const StatItem = ({
  value,
  label,
  suffix,
  isVisible,
}: {
  value: number;
  label: string;
  suffix: string;
  isVisible: boolean;
}) => {
  const counted = useCountUp(value, isVisible);

  return (
    <div className="text-center">
      <div className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">
        {counted}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

// 🧠 Skills
const skills = [
  // 🎬 Media
  { icon: Video, label: "Video Production", desc: "Editing, Clips, Short Films, Reels" },
  { icon: Video, label: "Photo Editing", desc: "Retouching, Color Grading, Thumbnails" },
  { icon: Video, label: "Audio Editing", desc: "Recording, Mixing, Sound Design" },

  // 💻 Dev
  { icon: Code2, label: "Frontend Development", desc: "React.js, Tailwind, Responsive UI" },
  { icon: Code2, label: "Backend Development", desc: "Node.js, Express, REST APIs" },
  { icon: Code2, label: "Full Stack Development", desc: "MERN Stack, API Integration" },
  { icon: Code2, label: "Authentication", desc: "JWT, Firebase Auth, Security" },
  { icon: Code2, label: "Payments", desc: "Stripe API, Checkout Systems" },

  // 🗄️ Data
  { icon: Database, label: "Database", desc: "MongoDB, NoSQL, Data Modeling" },
  { icon: Database, label: "Admin Systems", desc: "Dashboards, Roles, Control Panels" },

  // 📱 UI
  { icon: Smartphone, label: "Mobile Apps", desc: "Ionic, Capacitor" },
  { icon: Palette, label: "UI/UX Design", desc: "Modern UI, UX, Clean Design" },
  { icon: Palette, label: "Animations", desc: "Framer Motion, Interactions" },

  // ⚙️ Tools
  { icon: Settings, label: "Architecture", desc: "Clean Code, Scalable Structure" },
  { icon: Settings, label: "Deployment", desc: "Vercel, Netlify" },

  // 🚀 Extra
  { icon: Zap, label: "Performance", desc: "Speed Optimization, SEO Basics" },
  { icon: Globe, label: "Localization", desc: "Arabic/English, RTL Support" },
  { icon: ShoppingCart, label: "E-commerce", desc: "Orders, Payments Logic" },

  // ☕ Business
  { icon: Briefcase, label: "Project Owner", desc: "Managing Projects, Strategy" },
  { icon: Users, label: "Team Management", desc: "Leadership, Task Organization" },
  { icon: Store, label: "Restaurant Management", desc: "Operations, Staff, Service" },
  { icon: Coffee, label: "Barista", desc: "Coffee Making, Customer Experience" },
  { icon: ClipboardList, label: "Business Ops", desc: "Planning, Workflow, Organization" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-32 relative noise-bg">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About Me
            </p>

            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Passionate about
              <br />
              <span className="text-gradient">creative work</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm Ayoub El Fakhari — a full-stack developer and multidisciplinary creator
              based in Morocco. I build modern digital experiences combining code,
              design, and creativity.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Since 2016, I’ve worked on video, design, and web development.
              I focus on building scalable platforms and smooth user experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My goal is to create impactful products that connect people and services,
              combining performance, design, and business thinking.
            </p>
          </div>

          {/* RIGHT - SKILLS */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {skills.map((skill, i) => (
              <div
                key={skill.label}
                className="group p-6 rounded-2xl bg-card border border-border hover-lift glow-border"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20">
                  <skill.icon className="text-primary" size={24} />
                </div>

                <h3 className="font-semibold text-foreground mb-1">
                  {skill.label}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 📊 LANGUAGES */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: 100, label: "Arabic", suffix: "%" },
            { value: 60, label: "English", suffix: "%" },
            { value: 75, label: "French", suffix: "%" },
            { value: 15, label: "Turkish", suffix: "%" },
            { value: 70, label: "Mauritanian", suffix: "%" },
            { value: 40, label: "Russian & Ukrainian", suffix: "%" },
          ].map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;