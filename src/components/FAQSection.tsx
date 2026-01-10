import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto cuesta Clipealo?',
    answer: `Estamos finalizando los planes de precios para el lanzamiento. Los miembros de la waitlist recibirán:
    
• 1 mes de acceso completamente gratis
• Hasta 10 horas de streaming para analizar
• 30% de descuento en el plan que elijas después del mes gratis

Te notificaremos los detalles de precios antes del lanzamiento del MVP.`,
  },
  {
    question: '¿En qué plataformas funciona?',
    answer: `En el MVP (febrero 2025) trabajaremos con:

• Análisis de streams: YouTube, Twitch y Kick
• Publicación directa: TikTok

Estamos evaluando agregar YouTube Shorts e Instagram Reels según la demanda de nuestra comunidad.`,
  },
  {
    question: '¿Necesito conocimientos técnicos para usar Clipealo?',
    answer: `No. Clipealo está diseñado para que cualquier streamer pueda usarlo sin conocimientos técnicos. Conectas tu plataforma, la IA analiza tu contenido, tú revisas los clips y publicas. Tan simple como eso.`,
  },
  {
    question: '¿Puedo editar los clips antes de publicarlos?',
    answer: `¡Sí! Tienes control total sobre cada clip:

• Ajustar inicio y fin de la zona donde quieres que se analice
• Añadir o editar subtítulos manualmente
• Agregar tu marca de agua/watermark personalizado
• Decidir qué clips publicar y cuáles no

La idea es ahorrarte tiempo, no quitarte control.`,
  },
  {
    question: '¿Los subtítulos están en español?',
    answer: `Sí. El MVP incluye generación automática de subtítulos en español (y otros idiomas según tu contenido). Puedes editarlos manualmente si quieres ajustar algo específico.`,
  },
  {
    question: '¿Puedo personalizar los clips con mi marca?',
    answer: `Absolutamente. En el MVP podrás:

• Añadir tu logo/watermark en la posición que prefieras
• Personalizar subtítulos (fuente, color, posición)
• Aplicar estos ajustes en masa a todos tus clips

Tu marca siempre estará presente en cada clip que publiques.`,
  },
  {
    question: '¿Qué pasa si la IA no detecta bien mis mejores momentos?',
    answer: `La IA aprende de tu contenido y mejora con el tiempo. Además:

• Puedes seleccionar manualmente momentos adicionales
• Ajustar la zona de análisis para ser más específico
• La IA se adapta a tu estilo de contenido

No dependes 100% de la IA, tú tienes el control final.`,
  },
  {
    question: '¿Cuántos clips puedo generar?',
    answer: `Durante tu mes gratis de la waitlist, podrás analizar hasta 10 horas de streaming, lo cual puede generar decenas de clips dependiendo de tu contenido.

Después del mes gratis, los límites dependerán del plan que elijas. Estamos diseñando planes flexibles para streamers de todos los tamaños.`,
  },
  {
    question: '¿Mis videos están seguros?',
    answer: `Sí. Tus videos se procesan de forma segura y solo tú tienes acceso a tu contenido. No compartimos ni usamos tus videos para nada más allá de generar tus clips. Puedes eliminar tus videos de nuestros servidores cuando quieras.`,
  },
  {
    question: '¿Habrá período de prueba gratuito?',
    answer: `¡Sí! Los miembros de la waitlist recibirán 1 mes de acceso completamente gratis con capacidad para analizar hasta 10 horas de streaming.

Después del mes gratis, tendrás 30% de descuento en el plan que elijas.`,
  },
  {
    question: '¿Clipealo reemplaza mi trabajo como creador?',
    answer: `No, Clipealo te ahorra tiempo en las tareas repetitivas. Si detectas un buen clip, puedes descargarlo directamente. Y si quieres ponerle tu esencia personal editándolo más, igual es un ahorro considerable de tiempo porque ya tienes:

• El momento exacto identificado
• El clip cortado
• Subtítulos base agregados
• Tu branding aplicado

Tú decides si publicas directo o le das tu toque final.`,
  },
  {
    question: '¿Cuándo lanza el MVP?',
    answer: `1 de febrero de 2025. Los miembros de la waitlist recibirán acceso prioritario y todos los detalles de activación por correo antes del lanzamiento público.`,
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitas saber sobre Clipealo
          </p>
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
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
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
