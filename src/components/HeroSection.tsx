import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Logo from '@/assets/clipealo-logo.svg';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Clipealo"
          className="w-40 md:w-52 mx-auto mb-12 logo-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
            Lanzamiento MVP
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="gradient-text">Tus Mejores Momentos,</span>
          <br />
          <span className="gradient-text">Clips Virales en Automático</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-foreground mb-4"
        >
          De 5 horas editando a 5 minutos publicando
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          IA que detecta tus mejores momentos, los corta con precisión y los prepara para publicar. Con tu marca incluida.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToWaitlist}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-cta mb-8"
        >
          <Sparkles className="inline-block w-6 h-6 mr-2 -mt-1" />
          Únete a la Waitlist
        </motion.button>

        {/* Benefit Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-6"
        >
          <span className="benefit-badge">
            🎁 1 mes gratis + 30% descuento lifetime
          </span>
        </motion.div>

        {/* Counter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-muted-foreground"
        >
          ✨ <span className="gradient-text font-bold">+247</span> streamers ya están dentro
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
