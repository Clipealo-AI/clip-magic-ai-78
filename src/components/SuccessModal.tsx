import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Check, Gift } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SuccessModalProps {
  position: number;
  email: string;
  onClose: () => void;
}

const SuccessModal = ({ position, email, onClose }: SuccessModalProps) => {
  const [displayPosition, setDisplayPosition] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Animate counter
    const duration = 1500;
    const steps = 30;
    const increment = position / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= position) {
        setDisplayPosition(position);
        clearInterval(timer);
      } else {
        setDisplayPosition(Math.floor(current));
      }
    }, duration / steps);

    return () => {
      document.body.style.overflow = '';
      clearInterval(timer);
    };
  }, [position]);

  const handleDiscordClick = () => {
    window.open('https://discord.gg/TRvVszdj', '_blank');
  };

  const benefits = [
    '1 mes de acceso completamente gratis',
    'Analiza hasta 10 horas de streaming',
    '30% de descuento en el plan que elijas después',
    'Acceso prioritario al MVP',
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        style={{ background: 'rgba(0, 0, 0, 0.92)', backdropFilter: 'blur(10px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="relative bg-card border-2 border-border rounded-[24px] p-6 md:p-10 max-w-md w-full text-center my-4 max-h-[90vh] overflow-y-auto"
          style={{ boxShadow: '0 0 80px hsla(290, 78%, 52%, 0.4)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-bg-secondary text-muted-foreground hover:text-foreground hover:bg-bg-elevated transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-5xl md:text-6xl mb-4"
            style={{ filter: 'drop-shadow(0 0 20px hsl(160, 84%, 39%))' }}
          >
            ✅
          </motion.div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold gradient-text mb-4">
            ¡Bienvenido a Clipealo!
          </h2>

          {/* Position */}
          <p className="text-muted-foreground text-sm mb-1">Eres el</p>
          <motion.p
            className="text-4xl md:text-5xl font-extrabold gradient-text mb-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            #{displayPosition}
          </motion.p>
          <p className="text-muted-foreground text-sm mb-5">en la lista</p>

          {/* Benefits */}
          <div className="text-left bg-bg-secondary rounded-xl p-4 mb-5">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
              <Gift className="w-4 h-4 text-cyan" />
              Beneficios de la Waitlist:
            </h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-2 text-muted-foreground text-sm"
                >
                  <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-5" />

          {/* Email confirmation */}
          <p className="text-muted-foreground text-xs mb-4">
            Te enviaremos actualizaciones a:{' '}
            <span className="text-foreground font-medium">{email}</span>
          </p>

          {/* Discord Section */}
          <div className="mb-4">
            <p className="text-muted-foreground text-xs mb-3">
              Únete a nuestra comunidad de Discord para:
            </p>
            <ul className="text-left max-w-xs mx-auto text-xs text-muted-foreground space-y-1 mb-4">
              <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-cyan before:font-bold">
                Acceso exclusivo a la beta
              </li>
              <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-cyan before:font-bold">
                Tips para hacer crecer tu contenido
              </li>
              <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-cyan before:font-bold">
                Feedback directo con el equipo
              </li>
            </ul>
          </div>

          {/* Discord Button */}
          <motion.button
            onClick={handleDiscordClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors mb-3 text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Unirme a la Comunidad de Discord
          </motion.button>

          {/* Skip Link */}
          <button
            onClick={onClose}
            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
          >
            Saltar por ahora
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SuccessModal;
