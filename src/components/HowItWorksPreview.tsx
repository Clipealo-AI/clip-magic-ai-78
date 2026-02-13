import { motion } from 'framer-motion';
import { Link2, Sparkles, Download, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Link2,
    title: 'Pega tu link',
    description: 'Coloca el enlace de tu stream de Kick, Twitch o YouTube. También puedes subir tu archivo.',
    color: 'text-cyan',
    borderColor: 'border-cyan/30',
    glowColor: 'shadow-[0_0_20px_rgba(51,245,242,0.1)]',
  },
  {
    icon: Sparkles,
    title: 'La IA genera clips',
    description: 'Nuestra IA analiza todo el video, detecta los mejores momentos y genera clips listos para publicar.',
    color: 'text-pink',
    borderColor: 'border-pink/30',
    glowColor: 'shadow-[0_0_20px_rgba(250,64,113,0.1)]',
  },
  {
    icon: Download,
    title: 'Descarga y publica',
    description: 'Revisa los clips con su score de viralidad, descárgalos y publícalos en todas tus redes.',
    color: 'text-purple',
    borderColor: 'border-purple/30',
    glowColor: 'shadow-[0_0_20px_rgba(193,36,227,0.1)]',
  },
];

const HowItWorksPreview = () => {
  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          Pon tu link de Kick, Twitch, YouTube o sube tu archivo
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center"
            >
              {/* Card */}
              <div className={`relative w-full bg-card/60 border ${step.borderColor} rounded-2xl p-6 text-center ${step.glowColor} hover:scale-[1.02] transition-transform`}>
                {/* Step number */}
                <span className={`text-xs font-mono font-bold ${step.color} mb-3 block`}>
                  PASO {index + 1}
                </span>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow between steps (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-muted-foreground/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;
