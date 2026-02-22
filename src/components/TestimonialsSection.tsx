import { Twitch, Linkedin, Youtube } from 'lucide-react';

import avatarChupapi from '@/assets/testimonials/chupapi.jpeg';
import avatarGatimixx from '@/assets/testimonials/gatimixx.png';
import avatarSkilpe from '@/assets/testimonials/skilpe.jpeg';
import avatarRin from '@/assets/testimonials/rinnakavt.png';
import avatarEvolutive from '@/assets/testimonials/evolutive-playbook.jpg';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z"/>
  </svg>
);

const KickIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 2h6v6h2V6h2V4h2V2h4v2h-2v2h-2v2h-2v2h2v2h2v2h2v2h-4v-2h-2v-2h-2v-2H8v8H2V2z"/>
  </svg>
);

const testimonials = [
  {
    name: 'EL CHUPAPI L4D',
    avatar: avatarChupapi,
    platforms: [
      { icon: KickIcon, color: 'text-[hsl(120,70%,50%)]' },
      { icon: TikTokIcon, color: 'text-pink' },
    ],
    stat: '200 seguidores',
  },
  {
    name: 'Gatimixx',
    avatar: avatarGatimixx,
    platforms: [
      { icon: Twitch, color: 'text-[hsl(264,100%,64%)]' },
    ],
    stat: '150 seguidores',
  },
  {
    name: 'Skilpe',
    avatar: avatarSkilpe,
    platforms: [
      { icon: TikTokIcon, color: 'text-pink' },
    ],
    stat: '+100K vistas',
  },
  {
    name: 'RinNakaVT',
    avatar: avatarRin,
    platforms: [
      { icon: Twitch, color: 'text-[hsl(264,100%,64%)]' },
    ],
    stat: '400 seguidores',
  },
  {
    name: 'Evolutive Playbook',
    avatar: avatarEvolutive,
    platforms: [
      { icon: Linkedin, color: 'text-[hsl(210,80%,55%)]' },
      { icon: Youtube, color: 'text-[hsl(0,80%,50%)]' },
    ],
    stat: 'Canal de gestión',
  },
];

// Duplicate for seamless loop
const items = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-8 tracking-wide uppercase">
        Quienes ya confían en Clipealo
      </p>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee gap-16 w-max">
          {items.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[120px]">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border border-border"
              />
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">{t.name}</span>
              <div className="flex items-center gap-1.5">
                {t.platforms.map((p, j) => (
                  <p.icon key={j} className={`w-3.5 h-3.5 ${p.color}`} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{t.stat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
