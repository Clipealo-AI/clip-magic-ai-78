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

  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/HUE6kgefpKJA67MVnJI25h', '_blank');
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0, 0, 0, 0.92)', backdropFilter: 'blur(10px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="relative bg-card border-2 border-border rounded-[32px] p-10 md:p-14 max-w-xl w-full text-center"
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
            className="text-8xl mb-8"
            style={{ filter: 'drop-shadow(0 0 25px hsl(160, 84%, 39%))' }}
          >
            ✅
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-6">
            ¡Bienvenido a Clipealo!
          </h2>

          {/* Position */}
          <p className="text-muted-foreground mb-2">Eres el</p>
          <motion.p
            className="text-5xl md:text-6xl font-extrabold gradient-text mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            #{displayPosition}
          </motion.p>
          <p className="text-muted-foreground mb-8">en la lista</p>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Benefits */}
          <div className="text-left bg-bg-secondary rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-cyan" />
              Beneficios de la Waitlist:
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Email confirmation */}
          <p className="text-muted-foreground text-sm mb-6">
            Te enviaremos todas las actualizaciones al correo:{' '}
            <span className="text-foreground font-medium">{email}</span>
          </p>

          {/* WhatsApp Section */}
          <div className="mb-6">
            <p className="text-muted-foreground text-sm mb-4">
              Mientras tanto, únete a nuestro grupo de WhatsApp para:
            </p>
            <ul className="text-left max-w-xs mx-auto text-sm text-muted-foreground space-y-2 mb-6">
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-cyan before:font-bold">
                Sneak peeks exclusivos del MVP
              </li>
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-cyan before:font-bold">
                Feedback directo con el equipo
              </li>
              <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-cyan before:font-bold">
                Acceso anticipado a beta testing
              </li>
            </ul>
          </div>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-whatsapp mb-4"
          >
            <MessageCircle className="w-6 h-6" />
            Unirme al Grupo de WhatsApp
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
