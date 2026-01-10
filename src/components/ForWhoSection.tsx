import { motion } from 'framer-motion';
import { Gamepad2, Video, Brush } from 'lucide-react';

const creators = [
  {
    icon: Gamepad2,
    title: 'GAMERS',
    subtitle: 'Captura jugadas épicas automáticamente',
    description: 'Kills consecutivos, clutches imposibles, reacciones épicas. Clipealo detecta tus mejores momentos y los convierte en clips perfectos para TikTok.',
    platforms: ['Valorant', 'Dota 2', 'Minecraft', 'Left 4 Dead', 'y más'],
    glowColor: 'hsla(290, 78%, 52%, 0.5)',
  },
  {
    icon: Video,
    title: 'VLOGGERS',
    subtitle: 'Momentos destacados sin esfuerzo',
    description: 'Historias, reacciones, consejos y momentos divertidos. Transforma tus largas charlas en clips cortos y compartibles que tu audiencia va a amar.',
    platforms: ['Just Chatting', 'IRL', 'Reacciones', 'Podcasts', 'Entrevistas'],
    glowColor: 'hsla(179, 91%, 58%, 0.5)',
  },
  {
    icon: Brush,
    title: 'CREATORS',
    subtitle: 'Highlights creativos al instante',
    description: 'Proceso creativo, antes/después, técnicas y resultados. Muestra tu trabajo sin perder horas editando. Más contenido = más oportunidades.',
    platforms: ['Arte', 'Diseño', 'Música', 'Cocina', 'Fitness', 'DIY'],
    glowColor: 'hsla(350, 95%, 62%, 0.5)',
  },
];

const ForWhoSection = () => {
  return (
    <section className="py-24 px-4 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-6">
            ¿Para quién es Clipealo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfecto para cualquier creador que quiera multiplicar su contenido
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="creator-card group"
            >
              {/* Icon */}
              <motion.div
                className="text-7xl mb-8 inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                style={{ filter: `drop-shadow(0 0 25px ${creator.glowColor})` }}
              >
                <creator.icon className="w-20 h-20" style={{ color: creator.glowColor.replace('0.5', '1') }} />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {creator.title}
              </h3>

              {/* Subtitle */}
              <p className="text-lg font-medium text-foreground mb-4">
                {creator.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {creator.description}
              </p>

              {/* Platforms */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Ideal para:</p>
                <p className="text-sm text-cyan font-medium">
                  {creator.platforms.join(' • ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
