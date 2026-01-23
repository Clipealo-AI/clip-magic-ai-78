import { motion } from 'framer-motion';
import { Clock, Frown, HeartCrack } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    quote: '"Termino el stream tarde y sigo editando hasta la madrugada."',
  },
  {
    icon: Frown,
    quote: '"Si no edito, no subo nada. Y si no subo nada, siento que no avanzo."',
  },
  {
    icon: HeartCrack,
    quote: '"Así dan ganas de dejarlo."',
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 px-4 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-4 block">😫</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Streamear cansa.
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-semibold">
            Editar después, te quita las ganas.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <problem.icon className="w-12 h-12 mx-auto mb-4 text-pink" />
              <p className="text-foreground italic leading-relaxed">
                {problem.quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold">
            <span className="text-foreground">El problema no es editar.</span>
            <br />
            <span className="gradient-text">Es perder los momentos buenos.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
