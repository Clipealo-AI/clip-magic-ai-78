import { Video, Rocket, BarChart3, Calendar, Award, FolderArchive } from 'lucide-react';
import UseCasePageTemplate, { type UseCasePageData } from '@/components/use-cases/UseCasePageTemplate';
import heroImage from '@/assets/use-case-agencias.jpg';

const data: UseCasePageData = {
  hero: {
    emoji: '🎬',
    tagline: 'PARA AGENCIAS DE CONTENIDO Y PRODUCCIÓN AUDIOVISUAL',
    title: 'Escala tu producción de clips x5 sin contratar más editores.',
    description: 'Clipealo automatiza el clipping de video para agencias que manejan múltiples clientes. Reduce costos, aumenta márgenes y entrega más contenido en menos tiempo.',
    ctaText: 'Hablar con el equipo de Clipealo',
    ctaHref: 'https://wa.me/51991351498?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Clipealo%20para%20agencias',
    image: heroImage,
  },
  context: {
    title: 'El video digital en LATAM crece al 36% anual',
    stat: '$10.25B',
    description: 'Las marcas en LATAM aumentaron sus presupuestos de video marketing un 47% en 2024. El problema: las agencias tienen el mismo número de editores de siempre. La demanda creció, pero la capacidad de producción no escala de la misma forma. Clipealo es la palanca de escalabilidad que tu agencia necesita.',
  },
  problem: {
    title: 'El cuello de botella de toda agencia: la edición de clips',
    subtitle: '15 clientes × 4 clips/semana = 120h de trabajo manual por semana.',
    description: 'Una agencia mediana con 10-15 clientes que pide 3-5 clips por semana por cliente, necesita 30-75 horas semanales dedicadas solo a clips cortos. Con 2 editores de video a S/.3,000-5,000/mes cada uno, estás invirtiendo S/.6,000-10,000/mes en solo esta tarea. Clipealo puede hacerlo por S/.126-200/mes.',
  },
  solution: {
    title: 'El modelo de agencia con Clipealo',
    steps: [
      { title: 'Automatiza el 80% del trabajo de análisis', description: 'La IA hace la tarea más tediosa: revisar horas de contenido, identificar los mejores momentos, generar clips base con títulos. Tu equipo humano agrega el criterio creativo, el branding del cliente y los ajustes finales.' },
      { title: 'Aumenta tu oferta sin aumentar costos', description: 'Con la misma estructura de equipo, puedes ofrecer 3-5x más clips por mes a cada cliente. Eso significa más valor percibido, más retención de clientes y posibilidad de cobrar más por el mismo paquete.' },
      { title: 'Onboard clientes nuevos más rápido', description: 'El tiempo de setup para procesar el contenido de un cliente nuevo pasa de días a minutos. Conectas su canal, defines los parámetros y Clipealo empieza a generar clips ese mismo día.' },
    ],
  },
  contentTypes: {
    title: 'Casos de uso para agencias',
    items: [
      { icon: Video, label: 'Webinars y eventos de clientes', description: '20+ clips por sesión' },
      { icon: Rocket, label: 'Campañas de lanzamiento', description: 'Múltiples variaciones de clips para A/B testing' },
      { icon: Calendar, label: 'Contenido mensual de redes', description: 'Generado desde 4-8 videos largos' },
      { icon: BarChart3, label: 'Coberturas de eventos', description: 'Procesamiento mismo día para publicación en vivo' },
      { icon: Award, label: 'Testimoniales y casos de éxito', description: 'Los mejores fragmentos editados' },
      { icon: FolderArchive, label: 'Repurposing de archivo', description: 'Valor de videos históricos de clientes' },
    ],
  },
  metrics: [
    { value: '5x', label: 'Más clips producidos por el mismo equipo' },
    { value: 'S/.126-200/mes', label: 'Costo de Clipealo vs S/.3,000-5,000/mes de un editor' },
    { value: '80%', label: 'Reducción en tiempo de análisis y revisión de VODs' },
  ],
  plans: {
    title: 'Plan recomendado',
    items: [
      { name: 'Premium', price: 'S/.126/mes', description: 'Para agencias con 5-10 clientes activos.', highlighted: false },
      { name: 'Enterprise', price: 'Precio negociado', description: '10+ clientes, múltiples usuarios y Clipero dedicado.', highlighted: true },
    ],
  },
  bottomCTA: {
    title: 'Tu agencia puede hacer más con lo que ya tiene.',
    subtitle: 'Hablemos de cómo Clipealo encaja en tu stack de herramientas.',
    ctaText: 'Contactar al equipo de Clipealo',
    ctaHref: 'https://wa.me/51991351498?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Clipealo%20para%20agencias',
  },
};

const AgenciasPage = () => <UseCasePageTemplate data={data} />;
export default AgenciasPage;
