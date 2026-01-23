import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const notThings = [
  'Publica por ti',
  'Decide tu estilo',
  'Te promete vistas',
  'Hace magia',
];

const yesThings = [
  'Te ahorra tiempo',
  'Te evita quedarte editando hasta tarde',
  'Te ayuda a ser constante sin cansarte',
];

const WhatIsNotSection = () => {
  return (
    <section className="py-24 px-4 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">🚫</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Lo que Clipealo NO es
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* NO column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-pink mb-6 flex items-center gap-2">
              <X className="w-6 h-6" /> Clipealo NO:
            </h3>
            <ul className="space-y-4">
              {notThings.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-pink flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* YES column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-cyan/30 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-cyan mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" /> Clipealo SÍ:
            </h3>
            <ul className="space-y-4">
              {yesThings.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNotSection;
