import { motion } from 'framer-motion';
import { Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from '@/assets/clipealo-logo.svg';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Clipealo"
          className="h-10 mx-auto mb-5 logo-glow"
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
              aria-label={social.label}
              className="social-icon"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
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
