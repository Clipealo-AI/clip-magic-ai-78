import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import platformYoutube from '@/assets/platform-youtube.png';
import platformTwitch from '@/assets/platform-twitch.png';
import platformKick from '@/assets/platform-kick.png';

const plans = [
  {
    icon: '🎮',
    name: 'Free',
    tagline: 'Pruébalo sin tarjeta',
    monthlyPrice: 0,
    annualPrice: 0,
    annualBilled: null,
    savings: null,
    cta: 'Comenzar gratis',
    popular: false,
    highlighted: false,
    platforms: ['YouTube'],
    hoursLabel: 'CRÉDITOS INCLUIDOS',
    hours: [
      { label: '60 créditos únicos', value: '1h' },
    ],
    hoursTotal: '1h de prueba',
    features: [
      { text: 'Subida manual' },
      { text: 'Análisis de audio + reconocimiento facial' },
      { text: 'Título, descripción y Razón del clip' },
      { text: 'Prompt de momentos específicos' },
      { text: 'Comunidad Discord' },
    ],
    addons: [
      { label: 'Recarga de horas', value: 'S/.5.00/hora' },
    ],
    services: [
      'Comunidad Discord',
      'Recursos para crecer tu canal',
    ],
  },
  {
    icon: '⚡',
    name: 'Básico',
    tagline: 'Para el creador que arranca',
    monthlyPrice: 48,
    annualPrice: 33.60,
    annualBilled: 'S/.403/año',
    savings: 'S/.173',
    cta: 'Comenzar',
    popular: false,
    highlighted: false,
    platforms: ['YouTube', 'Twitch'],
    hoursLabel: 'HORAS AL MES',
    hours: [
      { label: 'Análisis con IA', value: '10h' },
    ],
    hoursTotal: '10h/mes',
    features: [
      { text: 'Subida manual' },
      { text: 'Análisis de audio + reconocimiento facial' },
      { text: 'Título, descripción y Razón del clip' },
      { text: 'Prompt de momentos específicos' },
      { text: 'Editor básico (recorte + subtítulos)' },
      { text: 'Sin marca de agua' },
      { text: '10 GB · 30 días almacenamiento' },
      { text: 'Soporte por email' },
      { text: 'Publicación a TikTok (próximamente)', soon: true },
    ],
    addons: [
      { label: 'Recarga de horas', value: 'S/.4.00/hora' },
    ],
    services: [
      'Comunidad Discord',
      'Soporte por email',
    ],
  },
  {
    icon: '🚀',
    name: 'Estándar',
    tagline: 'Para el streamer activo',
    monthlyPrice: 72,
    annualPrice: 50.40,
    annualBilled: 'S/.605/año',
    savings: 'S/.259',
    cta: 'Comenzar',
    popular: true,
    highlighted: true,
    platforms: ['YouTube', 'Twitch', 'Kick'],
    hoursLabel: 'HORAS AL MES',
    hours: [
      { label: 'Análisis con IA', value: '15h' },
    ],
    hoursTotal: '15h/mes',
    features: [
      { text: 'Subida manual' },
      { text: 'Título, descripción y Razón del clip' },
      { text: 'Prompt de momentos específicos' },
      { text: 'Editor básico completo' },
      { text: 'Editor de subtítulos animados (próximamente)', soon: true },
      { text: 'Reframing automático vertical/horizontal (próximamente)', soon: true },
      { text: 'Sin marca de agua' },
      { text: 'Marca de agua personalizada con @handle' },
      { text: '25 GB · 90 días almacenamiento' },
      { text: 'Prioridad en cola' },
      { text: 'TikTok + YouTube Shorts + Instagram (próximamente)', soon: true },
      { text: 'Analytics de clips (próximamente)', soon: true },
    ],
    addons: [
      { label: 'Horas adicionales', value: 'S/.4.00/hora' },
      { label: 'Redes sociales adicionales', value: 'Próximamente' },
    ],
    services: [
      'Comunidad Discord',
      'Email prioritario',
      'Acceso anticipado a nuevas features',
    ],
  },
  {
    icon: '💎',
    name: 'Premium',
    tagline: 'Para alto volumen',
    monthlyPrice: 126,
    annualPrice: 88.20,
    annualBilled: 'S/.1,058/año',
    savings: 'S/.454',
    cta: 'Comenzar',
    popular: false,
    highlighted: false,
    platforms: ['YouTube', 'Twitch', 'Kick'],
    hoursLabel: 'HORAS AL MES',
    hours: [
      { label: 'Análisis con IA', value: '30h' },
    ],
    hoursTotal: '30h/mes',
    features: [
      { text: 'Todo lo de Estándar', highlight: true },
      { text: 'Prioridad máxima en cola' },
      { text: 'Historial de proyectos ilimitado' },
      { text: '75 GB · 90 días almacenamiento' },
      { text: 'Branding completo por canal' },
      { text: 'Editor avanzado completo (próximamente)', soon: true },
      { text: 'Hasta 6 cuentas sociales (próximamente)', soon: true },
      { text: 'Hasta 3 usuarios (próximamente)', soon: true },
      { text: 'Analytics completo + tendencias (próximamente)', soon: true },
    ],
    addons: [
      { label: 'Recarga de horas', value: 'S/.4.00/hora' },
      { label: 'Usuarios adicionales', value: 'Próximamente' },
    ],
    services: [
      'Comunidad Discord',
      'Email prioritario',
      'Soporte por WhatsApp',
      'Acceso anticipado a todas las features',
    ],
  },
];

const platformIcons: Record<string, React.ReactNode> = {
  YouTube: <img src={platformYoutube} alt="YouTube" className="w-6 h-6 object-contain" />,
  Twitch: <img src={platformTwitch} alt="Twitch" className="w-6 h-6 object-contain rounded" />,
  Kick: <img src={platformKick} alt="Kick" className="w-6 h-6 object-contain rounded" />,
};

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="gradient-text">Precios</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu contenido.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors ${!isAnnual ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors ${isAnnual ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Anual
            </button>
            {isAnnual && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                Ahorra hasta 30%
              </span>
            )}
          </motion.div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className={`relative rounded-2xl border p-6 flex flex-col ${
                  plan.popular
                    ? 'border-primary bg-card shadow-[0_0_40px_hsla(350,95%,62%,0.15)]'
                    : 'border-border bg-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-bold rounded-full gradient-primary text-foreground">
                      ⭐ MÁS POPULAR
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-5">
                  <span className="text-2xl">{plan.icon}</span>
                  <h3 className="text-xl font-bold mt-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">S/.</span>
                    <span className="text-5xl font-extrabold">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-muted-foreground">/mes</span>
                  </div>
                  {isAnnual && plan.annualBilled && (
                    <>
                      <p className="text-xs text-muted-foreground mt-1">
                        Facturado {plan.annualBilled}
                      </p>
                      <span className="inline-block text-xs font-semibold mt-1 px-2 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                        + Ahorras {plan.savings} al año
                      </span>
                    </>
                  )}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all mb-6 ${
                    plan.highlighted
                      ? 'gradient-primary text-foreground hover:opacity-90'
                      : 'border border-border bg-background hover:bg-muted text-foreground'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Hours */}
                <div className="bg-background/50 border border-border rounded-xl p-4 mb-5">
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground mb-2 uppercase">
                    {plan.hoursLabel}
                  </p>
                  {plan.hours.map((h) => (
                    <div key={h.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.label}</span>
                      <span className="font-semibold text-primary">{h.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm mt-2 pt-2 border-t border-border">
                    <span className="font-bold text-foreground">TOTAL</span>
                    <span className="font-bold text-primary">{plan.hoursTotal}</span>
                  </div>
                </div>

                {/* Platforms */}
                <div className="mb-5">
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground mb-2 uppercase">
                    Plataformas
                  </p>
                  <div className="flex gap-2">
                    {plan.platforms.map((p) => (
                      <span key={p}>{platformIcons[p]}</span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-5 flex-1">
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground mb-2 uppercase">
                    Incluye
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                        <span className={f.highlight ? 'text-secondary font-semibold' : ''}>
                          {f.text}
                          {f.soon && (
                            <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
                              pronto
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add-ons */}
                <div className="mb-5">
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground mb-2 uppercase">
                    Add-ons
                  </p>
                  {plan.addons.map((a) => (
                    <div key={a.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{a.label}</span>
                      <span className="font-semibold text-primary">{a.value}</span>
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground mb-2 uppercase">
                    Servicios
                  </p>
                  <ul className="space-y-1.5">
                    {plan.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 flex-shrink-0 text-secondary" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1">
                <span className="text-xs font-bold tracking-widest text-secondary uppercase">
                  ● ENTERPRISE
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-2">
                  Para agencias y alto volumen
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Créditos custom · Multi-canal · Multi-usuario · SLA garantizado · Facturación empresarial
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold gradient-primary text-foreground">
                  🎬 Clipero dedicado incluido — IA + criterio humano para tus clips
                </span>
              </div>
              <div className="flex flex-col items-end gap-3 shrink-0">
                <span className="text-muted-foreground text-sm">A consultar</span>
                <a
                  href="mailto:contacto@clipealo.com"
                  className="px-6 py-2.5 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
                >
                  Contactar →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Countdown Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6 text-center mb-10"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
              <span>🕐 <strong>Precio de salida de mercado.</strong> Solo disponible por</span>
              <CountdownTimer />
            </div>
          </motion.div>

          {/* Footer note */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              💡 <strong className="text-foreground">Precio de salida de mercado.</strong>{' '}
              <span className="text-primary">Disponible solo por tiempo limitado antes del precio oficial.</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Todos los planes incluyen cancelación en cualquier momento · Pago seguro · Facturación en soles peruanos
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
