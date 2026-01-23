import { motion } from 'framer-motion';
import { Clock, MessageCircle, Bug } from 'lucide-react';

const requirements = [
  { icon: Clock, text: '15 minutos cada semana para contarnos qué te funcionó y qué no' },
  { icon: MessageCircle, text: 'Que nos digas la verdad, incluso si algo no te gustó' },
  { icon: Bug, text: 'Que nos avises si algo falla' },
];

const WhatWeNeedSection = () => {
  return (
    <section className="py-24 px-4 bg-bg-secondary">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">🙋‍♂️</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            ¿Qué necesitamos de ti?
          </h2>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 mb-8"
        >
          <ul className="space-y-4">
            {requirements.map((req, index) => (
              <li
                key={index}
                className="flex items-center gap-4 p-4 bg-background/50 rounded-xl"
              >
                <req.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-foreground">{req.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Discord note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center p-6 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-2xl"
        >
          <p className="text-foreground font-medium">
            Necesitas tener Discord,<br />
            porque ahí es donde funciona el beta.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeNeedSection;
