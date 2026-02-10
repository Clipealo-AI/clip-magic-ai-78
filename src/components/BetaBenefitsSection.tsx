import { motion } from 'framer-motion';
import { Percent, MessageSquare, Handshake, Rocket } from 'lucide-react';

const benefits = [
  { icon: Rocket, text: 'Acceso antes que el público general', highlight: true },
  { icon: Percent, text: 'Precios y novedades antes que nadie', highlight: false },
  { icon: MessageSquare, text: 'Acceso al Discord privado', highlight: false },
  { icon: Handshake, text: 'Contacto directo con el equipo', highlight: false },
];

const BetaBenefitsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">🎁</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            ¿Qué ganas uniéndote a la lista?
          </h2>
        </motion.div>

        {/* Benefits list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl ${
                  benefit.highlight ? 'bg-secondary/10 border border-secondary/30' : 'bg-background/50'
                }`}
              >
                <benefit.icon className={`w-6 h-6 flex-shrink-0 ${benefit.highlight ? 'text-secondary' : 'text-cyan'}`} />
                <span className={`${benefit.highlight ? 'text-foreground font-semibold' : 'text-foreground'}`}>
                  {benefit.text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaBenefitsSection;
