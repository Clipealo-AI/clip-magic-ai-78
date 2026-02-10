import { motion } from 'framer-motion';
import { TestTube, Users, Wrench, Rocket } from 'lucide-react';

const milestones = [
  { icon: TestTube, month: 'Diciembre', description: 'Pruebas internas', status: 'completed' },
  { icon: Users, month: 'Enero', description: 'Beta cerrada', status: 'completed' },
  { icon: Wrench, month: 'Febrero', description: 'Mejoras + precios', status: 'current' },
  { icon: Rocket, month: 'Marzo', description: 'Lanzamiento', status: 'upcoming' },
];

const RoadmapSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-4 block">🛣️</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Roadmap
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 hidden md:block" />

          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className={`bg-card border rounded-2xl p-6 text-center ${
                  milestone.status === 'current' 
                    ? 'border-secondary glow-purple' 
                    : milestone.status === 'completed'
                    ? 'border-cyan/50'
                    : 'border-border'
                }`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    milestone.status === 'current'
                      ? 'bg-secondary/20'
                      : milestone.status === 'completed'
                      ? 'bg-cyan/20'
                      : 'bg-muted'
                  }`}>
                    <milestone.icon className={`w-7 h-7 ${
                      milestone.status === 'current'
                        ? 'text-secondary'
                        : milestone.status === 'completed'
                        ? 'text-cyan'
                        : 'text-muted-foreground'
                    }`} />
                  </div>

                  {/* Month */}
                  <h3 className={`text-lg font-bold mb-2 ${
                    milestone.status === 'current'
                      ? 'text-secondary'
                      : 'text-foreground'
                  }`}>
                    {milestone.month}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm">
                    {milestone.description}
                  </p>

                  {/* Current badge */}
                  {milestone.status === 'current' && (
                    <span className="inline-block mt-3 text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      Actual
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
