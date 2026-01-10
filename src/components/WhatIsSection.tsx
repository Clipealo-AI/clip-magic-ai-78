import { motion } from 'framer-motion';
import { Target, Zap, Palette, Brain, Rocket, Scissors } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Detecta tus mejores momentos automáticamente',
    description: 'Kills, clutches, reacciones épicas. La IA los encuentra todos.',
    color: 'text-pink',
  },
  {
    icon: Zap,
    title: 'Genera múltiples clips simultáneamente',
    description: 'Lo que te tomaba horas, ahora toma minutos.',
    color: 'text-cyan',
  },
  {
    icon: Palette,
    title: 'Edición masiva con tu branding',
    description: 'Subtítulos automáticos + watermark de tu canal en un clic.',
    color: 'text-secondary',
  },
  {
    icon: Brain,
    title: 'Entiende a tu audiencia',
    description: 'Aprende qué clips funcionan mejor con tu comunidad.',
    color: 'text-pink',
  },
  {
    icon: Rocket,
    title: 'Publica directo a TikTok',
    description: 'Exporta y comparte en todas tus redes desde un solo lugar.',
    color: 'text-cyan',
  },
  {
    icon: Scissors,
    title: 'Control total antes de publicar',
    description: 'Revisa, ajusta y decide qué clips suben.',
    color: 'text-secondary',
  },
];

const WhatIsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">
            ¿Qué es Clipealo?
          </h2>
          <p className="text-xl md:text-2xl text-cyan font-semibold glow-cyan inline-block px-6 py-2 rounded-full bg-card/50">
            "De 5 horas de stream a 20 clips virales en minutos"
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clipealo usa IA para detectar automáticamente los mejores momentos de tus streams y convertirlos en clips listos para publicar. Añades tu marca, revisas y subes a todas tus redes en minutos.
            </p>
          </motion.div>

          {/* Right - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-bg-card to-bg-elevated border-2 border-border overflow-hidden glow-cyan">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-md space-y-3">
                  {/* Timeline mockup */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 gradient-primary rounded-full" />
                  </div>
                  
                  {/* Clip indicators */}
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-12 flex-1 bg-card rounded-lg border border-border flex items-center justify-center"
                      >
                        <span className="text-xs text-muted-foreground">Clip {i + 1}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 mt-4">
                    <div className="flex-1 h-10 gradient-primary rounded-lg flex items-center justify-center text-sm font-semibold text-white">
                      Exportar clips
                    </div>
                    <div className="flex-1 h-10 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">
                      Editar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="feature-card"
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
