import { motion } from 'framer-motion';
import { Share2, MessageCircle, Star } from 'lucide-react';

const requirements = [
  { icon: Share2, text: 'Comparte Clipealo con otros streamers que lo necesiten' },
  { icon: MessageCircle, text: 'Únete al Discord y cuéntanos qué te gustaría ver' },
  { icon: Star, text: 'Danos tu feedback cuando lancemos — tu opinión importa' },
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
      </div>
    </section>
  );
};

export default WhatWeNeedSection;
