import { motion } from 'framer-motion';
import { Droplets, Users, TrendingUp, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Marca de agua personalizada',
    description: 'Guarda tu logo y el nombre de tu canal. Aparecerá automáticamente en todos tus clips generados.',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Preferencias de tu comunidad',
    description: 'Cuéntanos qué le gusta a tu audiencia. La IA usará esa info para encontrar los mejores momentos.',
    gradient: 'from-cyan to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Puntaje de viralidad',
    description: 'Cada clip tiene un score basado en gancho, flujo, valor y tendencia. Así sabes cuál tiene más potencial.',
    gradient: 'from-orange-500 to-pink-500',
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-4 block">✨</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Funcionalidades que te hacen la vida más fácil
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas pensadas para que tus clips salgan listos sin tanto esfuerzo.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card border border-border rounded-3xl p-8 h-full transition-all duration-300 hover:border-cyan/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.1)]">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-cyan" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative sparkle on hover */}
                <Sparkles className="absolute top-4 right-4 w-5 h-5 text-cyan/0 group-hover:text-cyan/50 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preview mockup hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-card/50 border border-border rounded-full px-6 py-3">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-pink-400">99</span>
              <span className="text-muted-foreground text-sm">/100</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex gap-2 text-sm">
              <span className="text-green-400 font-semibold">A</span>
              <span className="text-muted-foreground">Gancho</span>
              <span className="text-green-400 font-semibold">A</span>
              <span className="text-muted-foreground">Flujo</span>
              <span className="text-green-400 font-semibold">A</span>
              <span className="text-muted-foreground">Valor</span>
              <span className="text-green-400 font-semibold">A</span>
              <span className="text-muted-foreground">Tendencia</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            Ejemplo de cómo se ve el puntaje de viralidad en cada clip
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
