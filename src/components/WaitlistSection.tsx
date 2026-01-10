import { motion } from 'framer-motion';
import WaitlistForm from './WaitlistForm';

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6" style={{ filter: 'drop-shadow(0 0 30px hsla(290, 78%, 52%, 0.5))' }}>
            Únete a la Waitlist
          </h2>
          <p className="text-xl text-muted-foreground">
            Sé de los primeros en acceder al futuro de la creación de contenido
          </p>
        </motion.div>

        {/* Form */}
        <WaitlistForm />
      </div>
    </section>
  );
};

export default WaitlistSection;
