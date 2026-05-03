import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cómo funciona Clipealo?',
    answer: 'Pegas el link de tu stream (Kick, Twitch o YouTube) o subes tu archivo. Nuestra IA analiza el video completo, detecta los mejores momentos y genera clips listos para publicar con subtítulos, títulos y score de viralidad.',
  },
  {
    question: '¿Qué plataformas soporta?',
    answer: 'Soportamos Kick, Twitch y YouTube. Puedes pegar el enlace de tu stream o subir un archivo de video directamente.',
  },
  {
    question: '¿Cuánto tarda en generar los clips?',
    answer: 'Depende de la duración del video, pero en promedio un stream de 2 horas se procesa en menos de 10 minutos. Recibirás tus clips listos para descargar.',
  },
  {
    question: '¿Los clips incluyen subtítulos?',
    answer: 'Sí. Los subtítulos se generan automáticamente y sincronizados. No se requiere edición manual.',
  },
  {
    question: '¿Clipealo funciona en español?',
    answer: 'Clipealo está entrenada específicamente en contenido en español latino. Entiende jerga local, modismos y contexto cultural de toda LATAM.',
  },
  {
    question: '¿Cuánto cuesta Clipealo?',
    answer: 'Tenemos planes desde S/.48/mes. Visita nuestra sección de precios para ver todos los detalles y elegir el plan que mejor se adapte a ti.',
  },
  {
    question: '¿Cómo pueden las agencias producir clips para sus clientes sin editar manualmente?',
    answer: 'Con Clipealo, las agencias suben el video de su cliente y la IA detecta automáticamente los mejores momentos, genera clips con subtítulos y aplica el branding del cliente en minutos. Sin edición manual. Desde S/.72/mes.',
  },
  {
    question: '¿Cómo reducir el tiempo que mi equipo dedica a editar clips para redes sociales?',
    answer: 'Clipealo automatiza el proceso completo: sube el video, la IA corta los mejores momentos, agrega subtítulos y formatea para cada red social. Equipos que usan Clipealo reducen su tiempo de producción de clips de horas a menos de 20 minutos.',
  },
  {
    question: '¿Cómo convertir webinars y charlas en clips para LinkedIn y TikTok automáticamente?',
    answer: 'Sube la grabación de tu webinar o charla a Clipealo y la IA extrae los momentos más valiosos, genera clips de 30 a 90 segundos optimizados para LinkedIn y TikTok, con subtítulos automáticos y branding de tu marca.',
  },
  {
    question: '¿Cómo convertir entrevistas largas en clips para publicar en redes el mismo día?',
    answer: 'Con Clipealo puedes subir una entrevista de 1 hora y tener 10 clips listos en menos de 20 minutos, formateados para TikTok, Instagram Reels y YouTube Shorts, con subtítulos y título sugerido por IA.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left bg-background border border-border rounded-2xl px-6 py-5 hover:border-muted-foreground/30 transition-colors"
              >
                <span className="text-base font-semibold text-foreground pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
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
                    <div className="px-6 py-4 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact message */}
        <motion.p
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Únete a nuestro{' '}
          <a
            href="https://discord.gg/XjhXBtaK6A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Discord
          </a>{' '}
          o escríbenos a{' '}
          <a
            href="mailto:clipealoai@gmail.com"
            className="text-cyan underline underline-offset-2 hover:text-foreground transition-colors"
          >
            clipealoai@gmail.com
          </a>{' '}
          si necesitas ayuda o tienes alguna pregunta.
        </motion.p>
      </div>
    </section>
  );
};

export default FAQSection;
