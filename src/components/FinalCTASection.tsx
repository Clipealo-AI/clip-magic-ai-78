import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import BetaSignupForm from './BetaSignupForm';

const FinalCTASection = () => {
  return (
    <section id="aplicar-beta" className="py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
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

        {/* Two columns: Discord CTA + Form */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Discord CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-2xl p-8 text-center h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Únete por Discord
            </h3>
            <p className="text-muted-foreground mb-6">
              El acceso al beta se maneja directamente desde nuestro servidor de Discord.
            </p>
            <motion.a
              href="https://discord.gg/clipealo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-cta inline-block mx-auto"
            >
              👉 Aplicar a la beta
            </motion.a>
            <p className="text-muted-foreground text-sm mt-4">
              El acceso se entrega por Discord.
            </p>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <BetaSignupForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
