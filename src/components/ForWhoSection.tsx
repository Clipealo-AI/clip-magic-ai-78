import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const forYou = [
  'Streameas varias horas a la semana',
  'Te cansas de editar después del stream',
  'Quieres crecer sin perder tu estilo',
];

const notForYou = [
  'Quieres que todo se publique solo',
  'Buscas fama instantánea',
  'No streameas casi nunca',
];

const ForWhoSection = () => {
  return (
    <section id="para-quien" className="py-24 px-4 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">🎯</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            ¿Para quién es?
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* For you */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-cyan/30 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-cyan mb-6">
              ✅ Esto es para ti si:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not for you */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-pink mb-6">
              ❌ No es para ti si:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-pink flex-shrink-0 mt-0.5" />
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

export default ForWhoSection;
