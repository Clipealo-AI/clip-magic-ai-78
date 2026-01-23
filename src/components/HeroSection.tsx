import { motion } from 'framer-motion';
import Logo from '@/assets/clipealo-logo.svg';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('aplicar-beta')?.scrollIntoView({ behavior: 'smooth' });
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
          className="w-40 md:w-52 mx-auto mb-8 mt-4 logo-glow"
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
            Lanzamiento Beta en:
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
          <span className="gradient-text">No pierdas tus mejores</span>
          <br />
          <span className="gradient-text">momentos de stream</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Clipealo detecta los momentos más importantes de tus streams
          para que no tengas que quedarte horas editando
          ni perder las ganas de seguir streameando.
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <span className="benefit-badge">
            Beta gratuita · Streamers LATAM · Acceso limitado
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToWaitlist}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-cta mb-4"
        >
          👉 Aplicar a la beta
        </motion.button>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-muted-foreground text-sm"
        >
          El acceso al beta se maneja por nuestro Discord.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
