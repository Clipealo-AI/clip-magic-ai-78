import { motion } from 'framer-motion';
import { Mic, Brain, Clapperboard } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Mic,
    title: 'Durante el stream',
    description: 'Dices "¡Clipealo!" y guardamos ese momento con un poco de tiempo antes y después.',
  },
  {
    number: '2',
    icon: Brain,
    title: 'Después del stream',
    description: 'El sistema detecta más momentos que quizá no viste.',
  },
  {
    number: '3',
    icon: Clapperboard,
    title: 'Resultado',
    description: 'Clips base listos para editar o subir. El control sigue siendo tuyo.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-4 block">⚙️</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Cómo funciona
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line (only on desktop, not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary/50 to-transparent" />
              )}

              <div className="bg-card border border-border rounded-2xl p-8 text-center h-full">
                {/* Step number */}
                <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-secondary">{step.number}</span>
                </div>

                {/* Icon */}
                <step.icon className="w-10 h-10 mx-auto mb-4 text-secondary" />

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
