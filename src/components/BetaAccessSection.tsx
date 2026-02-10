import { motion } from 'framer-motion';
import { MessageCircle, Bell, HelpCircle, Users } from 'lucide-react';

const discordFeatures = [
  { icon: Bell, text: 'Te avisamos novedades y precios' },
  { icon: Users, text: 'Comunidad de streamers LATAM' },
  { icon: HelpCircle, text: 'Resolvemos dudas' },
  { icon: MessageCircle, text: 'Hablamos directo contigo' },
];

const BetaAccessSection = () => {
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
          <span className="text-4xl mb-4 block">🔑</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">
            ¿Cómo te enterarás?
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo pasa en nuestro Discord. Únete para no perderte nada.
          </p>
        </motion.div>

        {/* Discord card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-[#5865F2]/30 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Ahí es donde:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {discordFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-background/50 rounded-xl"
              >
                <feature.icon className="w-6 h-6 text-[#5865F2]" />
                <span className="text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaAccessSection;
