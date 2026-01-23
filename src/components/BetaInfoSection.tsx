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
            Sobre la Beta
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">
            ¿Qué es la beta?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Es una versión temprana para ver si Clipealo realmente te ahorra tiempo
            y te ayuda a no perder las ganas de seguir streameando.
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
                ¿Qué puede pasar?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Algunas cosas pueden fallar</li>
                <li>• Algunas funciones pueden cambiar o desaparecer</li>
              </ul>
              <p className="mt-4 text-foreground font-medium">
                Esto no es un producto terminado. Lo estamos construyendo paso a paso.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaInfoSection;
