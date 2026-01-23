import { motion } from 'framer-motion';
import TeamImage from '@/assets/team-clipealo.png';

const TeamSection = () => {
  return (
    <section className="py-24 px-4 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-4xl mb-4 block">👥</span>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Somos Clipealo
          </h2>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <img
            src={TeamImage}
            alt="Equipo Clipealo"
            className="w-full max-w-2xl mx-auto rounded-2xl border border-border shadow-lg"
          />
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Creamos Clipealo porque vemos lo mismo todo el tiempo.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Streamers con talento que se esfuerzan, invierten lo poco que tienen
            y aun así sienten que no avanzan.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            No porque sean malos, sino porque streamear muchas horas
            y encima editar termina cansando a cualquiera.
          </p>
          <p className="text-foreground font-medium leading-relaxed mb-6">
            Nuestra visión es crear un ecosistema que ayude a cualquier creador de contenido largo
            a crecer sin perder las ganas.
          </p>
          <p className="text-xl font-bold gradient-text">
            Clipealo no viene a reemplazar creadores.<br />
            Viene a acompañarlos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
