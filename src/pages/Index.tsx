import { useState } from "react";
import { ArrowUpRight, ArrowDown, Github, Linkedin, Menu, X, Download, ShieldCheck, Terminal, Globe, Cpu } from "lucide-react";
import portrait from "../assets/nafarid.png";
import CertificateSection from "@/components/CertificateSection";
import SkillsSection from "@/components/SkillsSection";
import "./portfolio.css";

const projects = [
  { name: "minishell", kind: "SYSTEMS PROGRAMMING", description: "A Unix shell, built from the ground up. Pipes, redirections, environment variables, and signal handling — all in C.", tags: ["C", "Unix", "Processes"], url: "https://github.com/faridnasrdine/Minishell_42", style: "shell", icon: Terminal },
  { name: "cub3D", kind: "GRAPHICS & EXPLORATION", description: "Turning a 2D map into a 3D world. A raycasting engine inspired by Wolfenstein 3D, built with C and MiniLibX.", tags: ["C", "Raycasting", "MiniLibX"], url: "https://github.com/faridnasrdine/cub3d", style: "cub", icon: Cpu },
  { name: "webserv", kind: "NETWORK ENGINEERING", description: "An HTTP server written in C++. Featuring CGI, static files, configurable virtual hosts, and GET, POST, and DELETE requests.", tags: ["C++", "HTTP", "Sockets"], url: "https://github.com/akrate/webserv-", style: "server", icon: Globe },
];
const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="portfolio">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap">
      <a className="wordmark" href="#home" aria-label="Farid home">farid<span>®</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav id="navigation" className={menuOpen ? "navigation is-open" : "navigation"}>
        {[["Work", "projects"], ["About", "about"], ["Expertise", "skills"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16} /></a>
      </nav>
    </header>
    <main id="main">
      <section className="hero wrap" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEERING & CYBERSECURITY</div>
          <h1>Curiosity.<br />Code.<br /><span className="serif">Built to last.</span></h1>
          <p className="hero-intro">I’m Nasr-Eddine Farid, a software engineer and 42 Network student building secure systems from the ground up.</p>
          <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowUpRight size={19} /></a><a className="text-link" href="/Cv.pdf" download>Download CV <Download size={16} /></a></div>
        </div>
        <div className="portrait-composition"><div className="portrait-topline"><span>A LITTLE LOGIC. A LOT OF CURIOSITY.</span><ArrowUpRight size={20} /></div><div className="portrait-frame"><img src={portrait} alt="Nasr-Eddine Farid" fetchPriority="high" /><span className="portrait-caption">NASR-EDDINE FARID / MOROCCO</span></div><div className="portrait-sticker"><ShieldCheck size={26} /><span>Think deeply.<br />Build securely.</span></div><div className="portrait-bottomline"><span>1337 / 42 NETWORK</span><span>BASED IN MOROCCO ↗</span></div></div>
        <div className="hero-bottom"><span>LOW-LEVEL THINKING. HIGH-LEVEL POSSIBILITIES.</span><a href="#projects">SCROLL TO EXPLORE <ArrowDown size={14} /></a></div>
      </section>
      <div className="discipline-strip"><div className="wrap"><span>SOFTWARE ENGINEERING</span><span aria-hidden="true">✳</span><span>SECURE SYSTEMS</span><span aria-hidden="true">✳</span><span>CREATIVE PROBLEM SOLVING</span></div></div>
      <section className="work-section wrap" id="projects"><div className="section-heading"><div><div className="eyebrow">01 / SELECTED WORK</div><h2>Ideas into <span className="serif">execution.</span></h2></div><p>A selection of things I’ve built,<br />from the terminal to the network.</p></div>
        <div className="project-grid">{projects.map((project, i) => <a className="project" href={project.url} target="_blank" rel="noopener noreferrer" key={project.name}>
          <div className={`project-art ${project.style}`}><div className="art-top"><span>EXPERIMENT / 0{i + 1}</span><project.icon size={20} /></div>{project.style === "shell" ? <div className="terminal-window"><div className="terminal-bar"><i /><i /><i /><span>farid — minishell</span></div><div className="terminal-code"><span>~/minishell</span><br />$ echo "hello, world" | cat<br /><b>hello, world</b><br />$ <span className="cursor">▌</span></div></div> : project.style === "cub" ? <div className="cube-scene" aria-hidden="true"><div className="cube-face face-one" /><div className="cube-face face-two" /><div className="cube-face face-three" /><span>cub3D<span className="tiny-plus">+</span></span></div> : <div className="server-diagram"><span>CLIENT</span><div className="connection-line" /><div className="server-node"><Globe size={35} /><b>HTTP/1.1</b></div><div className="connection-line" /><span>200 OK</span></div>}<div className="art-bottom"><span>{project.kind}</span><span>↗</span></div></div>
          <div className="project-title"><h3>{project.name}</h3><ArrowUpRight size={24} /></div><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </a>)}</div>
        <div className="more-work"><span>Also exploring <strong>NetPractice</strong> · TCP/IP & subnetting</span><a href="https://github.com/faridnasrdine/42cursus" target="_blank" rel="noopener noreferrer">Philosophers · Threads & mutexes <ArrowUpRight size={16} /></a></div>
        <a className="text-link all-work" href="https://github.com/faridnasrdine" target="_blank" rel="noopener noreferrer">More on GitHub <Github size={17} /><ArrowUpRight size={16} /></a>
      </section>
      <section className="about-section" id="about"><div className="wrap about-grid"><div><div className="eyebrow">02 / THE PERSON BEHIND THE CODE</div><h2>Always learning.<br /><span className="serif">Always building.</span></h2><div className="about-school"><span className="school-number">42</span><span>1337 SCHOOL<br />PEER-TO-PEER. PROJECT-BASED.</span></div></div><div className="about-copy"><p>I like understanding how things work. Not just at the surface, but down to the memory, the process, and the packets.</p><p>At 1337, part of the 42 Network, I’m turning that curiosity into real software through C, C++, systems programming, and collaborative problem solving.</p><p>My approach is simple: build, break, understand, rebuild. Whether I’m writing a shell or exploring network security, I care about code that’s thoughtful, efficient, and secure.</p><a className="text-link" href="/Cv.pdf" download>A little more about me <Download size={16} /></a></div></div></section>
      <div className="expertise-section wrap"><div className="section-heading"><div><div className="eyebrow">03 / MY TOOLKIT</div><h2>Tools of the <span className="serif">trade.</span></h2></div><p>The foundations behind<br />the things I build.</p></div><SkillsSection /><CertificateSection /></div>
      <section className="contact-section" id="contact"><div className="wrap"><div className="eyebrow">04 / WHAT’S NEXT?</div><div className="contact-heading"><h2>Good things start<br />with a <span className="serif">conversation.</span></h2><a className="contact-arrow" href="mailto:nasrdinefarid@gmail.com" aria-label="Email Farid"><ArrowUpRight /></a></div><div className="contact-bottom"><a className="email-link" href="mailto:nasrdinefarid@gmail.com">nasrdinefarid@gmail.com</a><div className="social-links"><a href="https://github.com/faridnasrdine" target="_blank" rel="noopener noreferrer">GitHub <Github size={16} /></a><a href="https://linkedin.com/in/nasr-eddine-farid" target="_blank" rel="noopener noreferrer">LinkedIn <Linkedin size={16} /></a></div></div></div></section>
    </main><footer className="wrap footer"><a className="wordmark" href="#home">farid<span>®</span></a><span>© {new Date().getFullYear()} Nasr-Eddine Farid</span><a href="#home">BACK TO TOP <ArrowUpRight size={14} /></a></footer>
  </div>;
};
export default Index;
