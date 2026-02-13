import { motion } from 'framer-motion';
import { Link2, Sparkles, Download, ArrowRight, Clock, CheckCircle2, TrendingUp, Play } from 'lucide-react';

const HowItWorksPreview = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          Pon tu link de Kick, Twitch, YouTube o sube tu archivo
        </motion.p>

        {/* 3-Step Flow */}
        <div className="grid md:grid-cols-3 gap-6 items-start">

          {/* Step 1 - Paste Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center"
          >
            {/* Mockup Card */}
            <div className="w-full bg-card border border-border rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(51,245,242,0.05)]">
              {/* Mockup Header */}
              <div className="bg-muted/30 border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink" />
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan" />
                </div>
              </div>

              {/* URL Input Mockup */}
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-2 bg-muted/40 border border-border rounded-xl px-4 py-3">
                  <Link2 className="w-4 h-4 text-cyan flex-shrink-0" />
                  <span className="text-xs text-muted-foreground truncate">https://kick.com/sideral/video/123...</span>
                </div>

                {/* Platform icons */}
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span className="text-green-400 text-sm">▶</span> Kick
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span className="text-purple text-sm">▶</span> Twitch
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span className="text-pink text-sm">▶</span> YouTube
                  </div>
                </div>

                <button className="w-full bg-foreground text-background rounded-xl py-2.5 text-sm font-semibold">
                  Generar clips
                </button>
              </div>
            </div>

            {/* Label */}
            <div className="mt-5 text-center">
              <span className="text-xs font-mono font-bold text-cyan block mb-1">PASO 1</span>
              <h3 className="text-lg font-bold text-foreground mb-1">Pega tu link</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Coloca el enlace de tu stream o sube tu archivo directamente.</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex absolute -right-3 top-1/3 z-10">
              <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
            </div>
          </motion.div>

          {/* Step 2 - AI Generates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative flex flex-col items-center"
          >
            {/* Mockup Card */}
            <div className="w-full bg-card border border-border rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(250,64,113,0.05)]">
              {/* Mockup Header */}
              <div className="bg-muted/30 border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink" />
                  <span className="text-xs font-semibold text-foreground">Procesando...</span>
                </div>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 2 min
                </span>
              </div>

              {/* Processing Mockup */}
              <div className="p-5 space-y-3">
                {/* Completed project */}
                <div className="bg-muted/30 border border-border rounded-xl p-3 flex items-center gap-3">
                  <div className="w-14 h-10 rounded-lg bg-gradient-to-br from-pink/20 to-purple/20 flex items-center justify-center flex-shrink-0">
                    <Play className="w-4 h-4 text-pink" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-foreground truncate">STREAM EN POLVOS AZUL...</p>
                    <p className="text-[10px] text-muted-foreground">hace 1 hora</p>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-green-400 font-semibold flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" /> Listo
                  </span>
                </div>

                {/* Clip count */}
                <div className="flex items-center justify-between bg-muted/20 rounded-xl px-4 py-2.5">
                  <span className="text-xs text-muted-foreground">Clips generados</span>
                  <span className="text-sm font-bold text-pink">6</span>
                </div>

                <button className="w-full bg-gradient-to-r from-pink to-purple text-foreground rounded-xl py-2.5 text-sm font-semibold">
                  Ver Clips →
                </button>
              </div>
            </div>

            {/* Label */}
            <div className="mt-5 text-center">
              <span className="text-xs font-mono font-bold text-pink block mb-1">PASO 2</span>
              <h3 className="text-lg font-bold text-foreground mb-1">La IA genera clips</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Analiza tu video completo y detecta los mejores momentos virales.</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex absolute -right-3 top-1/3 z-10">
              <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
            </div>
          </motion.div>

          {/* Step 3 - Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Mockup Card */}
            <div className="w-full bg-card border border-border rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(193,36,227,0.05)]">
              {/* Mockup Header */}
              <div className="bg-muted/30 border-b border-border px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">Clips listos</span>
                <span className="text-[10px] text-purple font-semibold">6 clips</span>
              </div>

              {/* Clips Grid Mockup */}
              <div className="p-4 space-y-2.5">
                {[
                  { title: '¿Tacaño o Huachafo?', score: 97, color: 'text-green-400' },
                  { title: 'Sideral se defiende...', score: 93, color: 'text-green-400' },
                  { title: '¿3500 soles por tabas?', score: 89, color: 'text-cyan' },
                ].map((clip, i) => (
                  <div key={i} className="flex items-center gap-3 bg-muted/30 border border-border rounded-xl p-2.5">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple/20 to-pink/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-mono font-bold text-pink">C{i + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">{clip.title}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <TrendingUp className="w-3 h-3 text-cyan" />
                        <span className={`text-[10px] font-bold ${clip.color}`}>{clip.score}/100</span>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Label */}
            <div className="mt-5 text-center">
              <span className="text-xs font-mono font-bold text-purple block mb-1">PASO 3</span>
              <h3 className="text-lg font-bold text-foreground mb-1">Descarga y publica</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Cada clip tiene su score de viralidad. Descarga y publica en 1 clic.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;
