import { motion } from 'framer-motion';
import { Target, BookmarkCheck, Film } from 'lucide-react';

const features = [
  {
    icon: Target,
    text: 'Detecta jugadas, reacciones y momentos clave',
  },
  {
    icon: BookmarkCheck,
    text: 'Guarda esos momentos con contexto',
  },
  {
    icon: Film,
    text: 'Te deja clips base listos',
  },
];

const SolutionSection = () => {
  return (
    <section id="solucion" className="py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">🧠</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">
            Clipealo te quita la parte más pesada
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clipealo se encarga de detectar los momentos buenos de tu stream
            para que no tengas que buscarlos uno por uno después.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-cyan" />
              <p className="text-foreground font-medium">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-card/50 border border-border rounded-2xl p-8"
        >
          <p className="text-xl md:text-2xl font-bold">
            <span className="text-cyan">Detectamos el momento.</span>
            <br />
            <span className="text-foreground">Tú haces el clip.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
