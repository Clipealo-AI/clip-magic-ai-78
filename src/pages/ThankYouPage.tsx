import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';
import Logo from '@/assets/clipealo-logo.svg';

// Discord icon
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const ThankYouPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 gradient-glow-bg" />
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Logo */}
          <motion.img
            src={Logo}
            alt="Clipealo"
            className="h-16 md:h-20 mx-auto mb-8 logo-glow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Success Icon */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <span className="text-6xl md:text-7xl">✅</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="gradient-text">¡ESTÁS EN LA LISTA!</span>
          </motion.h1>

          {/* Date Notification */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
              <span className="text-2xl">📅</span>
              <span>El <span className="text-foreground font-semibold">9 de febrero</span> recibirás acceso por email</span>
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-24 h-1 mx-auto mb-8 rounded-full gradient-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          {/* Meanwhile text */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Mientras tanto 👇
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {/* Discord Button - Primary */}
            <a
              href="https://discord.gg/XjhXBtaK6A"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="btn-cta w-full flex flex-col items-center py-5 px-8">
                <div className="flex items-center gap-3 text-lg md:text-xl font-bold">
                  <span>🚀</span>
                  <span>ÚNETE AL DISCORD</span>
                  <DiscordIcon className="w-6 h-6" />
                </div>
                <span className="text-sm text-white/80 mt-1">Acceso anticipado + comunidad</span>
              </div>
            </a>

            {/* YouTube Button - Secondary/Outline */}
            <a
              href="https://www.youtube.com/watch?v=lluBnFuX_ro"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-full flex flex-col items-center py-5 px-8 rounded-xl sm:rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-secondary hover:bg-card/80 hover:-translate-y-1">
                <div className="flex items-center gap-3 text-lg md:text-xl font-semibold text-foreground">
                  <span>▶️</span>
                  <span>VER EVOLUCIÓN DEL PRODUCTO</span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </div>
                <span className="text-sm text-muted-foreground mt-1">Conoce cómo empezó Clipealo</span>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ThankYouPage;
