import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const BetaInfoSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">🧪</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">
            ¿Qué sigue?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">
            La beta ya terminó 🎉
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Estamos trabajando en los precios y el lanzamiento oficial.
            Si te uniste a la lista de espera, serás de los primeros en enterarte cuando todo esté listo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-secondary/30 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-secondary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                ¿Cuándo salen los precios?
              </h3>
              <p className="text-muted-foreground mb-3">
                En aproximadamente <span className="text-foreground font-semibold">1 semana</span> tendremos los precios listos.
              </p>
              <p className="text-foreground font-medium">
                Si estás en la lista de espera, te avisaremos antes que a nadie.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaInfoSection;
