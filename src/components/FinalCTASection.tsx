import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const FinalCTASection = () => {
  return (
    <section id="aplicar-beta" className="py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-4xl mb-4 block">🔥</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            La beta abre el 9 de febrero
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Cupos limitados para streamers LATAM.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://discord.gg/clipealo"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-cta inline-block mb-4"
        >
          👉 Aplicar a la beta
        </motion.a>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm"
        >
          El acceso se entrega por Discord.
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTASection;
