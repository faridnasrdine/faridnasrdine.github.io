import { Code2, GitBranch, ShieldCheck, Shield, FileCode2, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const certificates = [
  {
    title: "Learn JavaScript Course",
    issuer: "Boot.dev",
    icon: Code2,
    link: "https://www.boot.dev/certificates/0bbaf272-1ff5-42ae-afc0-6010da403573",
  },
  {
    title: "Learn Git Course",
    issuer: "Boot.dev",
    icon: GitBranch,
    link: "https://www.boot.dev/certificates/10b8e934-2e26-4636-8def-a0f7042df21a",
  },
  {
    title: "Network Security Expert Level 1: Certified Associate",
    issuer: "Fortinet",
    icon: Shield,
    link: "https://drive.google.com/file/d/1lPNTWkuLKlIIcfWxJGcK_Ao4xF9mEpf1/view",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco",
    icon: ShieldCheck,
    link: "https://drive.google.com/file/d/1NK3xlkw2-VtZWdqrU41iaTIOGfc8t4ue/view",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Python Institute",
    icon: FileCode2,
    link: "https://drive.google.com/file/d/1qtKwR4J_kCyQ8DJVdEPNBCOS-C7i04Nj/view",
  },
];

const CertificateSection = () => (
  <SectionWrapper id="certificate" title="Certifications">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {certificates.map((cert) => (
        <a
          key={cert.title}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl bg-card border border-border p-6 text-center hover:border-primary/50 hover:-translate-y-1 transition-all duration-200"
        >
          <cert.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
          <h3 className="text-sm font-bold font-mono mb-1 leading-snug">{cert.title}</h3>
          <p className="text-xs text-muted-foreground font-mono mb-4">{cert.issuer}</p>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            View Certificate
            <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificateSection;
