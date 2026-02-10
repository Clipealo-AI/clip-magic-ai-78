import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿La beta ya terminó?',
    answer: 'Sí. La beta cerrada terminó. Ahora estamos preparando el lanzamiento oficial con precios y nuevas funciones.',
  },
  {
    question: '¿Cuánto va a costar?',
    answer: 'Los precios se anunciarán en aproximadamente 1 semana. Si estás en la lista de espera, te avisaremos antes que a nadie.',
  },
  {
    question: '¿Tengo que usar el comando de voz?',
    answer: 'No. Es opcional. Puedes clipear sin decir nada, el sistema también detecta momentos automáticamente.',
  },
  {
    question: '¿Cómo me entero de las novedades?',
    answer: 'Únete a la lista de espera y al Discord. Ahí publicamos todo primero.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-bg-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-4 block">❓</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-question w-full text-left"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-secondary" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
