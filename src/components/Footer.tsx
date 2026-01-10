import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import Logo from '@/assets/clipealo-logo.svg';

// TikTok icon component (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/clipealo.pe/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/clipealo.pe', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
      {/* Logo */}
      <motion.img
        src={Logo}
        alt="Clipealo"
        className="h-20 md:h-24 mx-auto mb-6 logo-glow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />

        {/* Tagline */}
        <p className="text-muted-foreground italic text-base mb-10">
          "El futuro de la creación de contenido"
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-icon"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
          {/* TikTok - sin link por ahora */}
          <span className="social-icon cursor-default opacity-60" aria-label="TikTok (próximamente)">
            <TikTokIcon className="w-5 h-5" />
          </span>
        </div>

        {/* Divider */}
        <div className="w-full max-w-md mx-auto h-px bg-border mb-8" />

        {/* Copyright */}
        <p className="text-sm text-muted-foreground mb-4">
          © 2025 Clipealo. Todos los derechos reservados.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-5 text-sm flex-wrap">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Términos
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacidad
          </a>
          <span className="text-border">•</span>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
