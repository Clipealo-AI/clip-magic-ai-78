import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Twitch } from 'lucide-react';

import avatarChupapi from '@/assets/testimonials/chupapi.jpeg';
import avatarGatimixx from '@/assets/testimonials/gatimixx.png';
import avatarSkilpe from '@/assets/testimonials/skilpe.jpeg';
import avatarRin from '@/assets/testimonials/rinnakavt.png';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z"/>
  </svg>
);

const KickIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2h6v6h2V6h2V4h2V2h4v2h-2v2h-2v2h-2v2h2v2h2v2h2v2h-4v-2h-2v-2h-2v-2H8v8H2V2z"/>
  </svg>
);

const testimonials = [
  {
    name: 'EL CHUPAPI L4D',
    avatar: avatarChupapi,
    platforms: [
      { name: 'Kick', icon: KickIcon, color: 'text-[hsl(120,70%,50%)]' },
      { name: 'TikTok', icon: TikTokIcon, color: 'text-pink' },
    ],
    stat: '200 seguidores',
    quote: 'Clipealo me ayudó a generar clips de mis streams de forma automática. Ya no pierdo horas buscando los mejores momentos.',
  },
  {
    name: 'Gatimixx',
    avatar: avatarGatimixx,
    platforms: [
      { name: 'Twitch', icon: Twitch, color: 'text-[hsl(264,100%,64%)]' },
    ],
    stat: '150 seguidores',
    quote: 'Me encanta que detecta los momentos más divertidos del stream. Mis clips ahora tienen mucho más engagement.',
  },
  {
    name: 'Skilpe',
    avatar: avatarSkilpe,
    platforms: [
      { name: 'TikTok', icon: TikTokIcon, color: 'text-pink' },
    ],
    stat: '20 clips · +100K vistas',
    role: 'Clipero',
    quote: 'Como clipero, Clipealo me permite trabajar con más streamers a la vez. He logrado más de 100K vistas en mis clips.',
  },
  {
    name: 'RinNakaVT',
    avatar: avatarRin,
    platforms: [
      { name: 'Twitch', icon: Twitch, color: 'text-[hsl(264,100%,64%)]' },
    ],
    stat: '400 seguidores',
    quote: 'La detección de momentos clave es increíble. Puedo enfocarme en hacer contenido y Clipealo se encarga del resto.',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const prev = () => {
    setAutoplay(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setAutoplay(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, hsla(290, 78%, 52%, 0.08) 0%, transparent 70%)',
      }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Quienes ya <span className="gradient-text-pink-purple">confían en Clipealo</span>
        </motion.h2>

        {/* Card */}
        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10"
          >
            {/* Avatar + Info */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-border"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                {t.role && (
                  <span className="text-sm font-medium text-cyan">🎬 {t.role}</span>
                )}
                <div className="flex items-center justify-center gap-2 mt-1">
                  {t.platforms.map((p) => (
                    <span key={p.name} className={`flex items-center gap-1 text-xs font-semibold ${p.color}`}>
                      <p.icon className="w-3.5 h-3.5" />
                      {p.name}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{t.stat}</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
              "{t.quote}"
            </p>
          </motion.div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-secondary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-secondary transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoplay(false); setCurrent(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-secondary w-6'
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
