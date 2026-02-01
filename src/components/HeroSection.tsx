import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '@/assets/clipealo-logo.svg';
import CountdownTimer from './CountdownTimer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Bell } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
const HeroSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa tu nombre y correo.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Correo inválido",
        description: "Por favor ingresa un correo electrónico válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('beta_subscribers')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          discord: formData.discord.trim() || null,
        });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Ya estás registrado",
            description: "Este correo ya está en nuestra lista de espera.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      
      // Redirect to thank you page
      navigate('/thankyoupage');
    } catch (error) {
      console.error('Error saving subscriber:', error);
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Hubo un problema. Intenta de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="aplicar-beta" className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logo */}
            <motion.img
              src={Logo}
              alt="Clipealo"
              className="w-28 sm:w-36 md:w-40 lg:w-48 mx-auto lg:mx-0 mb-6 sm:mb-8 logo-glow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 sm:mb-6"
            >
              <span className="gradient-text">No pierdas tus mejores</span>
              <br />
              <span className="gradient-text">momentos de stream</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              Clipealo detecta los momentos más importantes de tus streams
              para que no tengas que quedarte horas editando
              ni perder las ganas de seguir streameando.
            </motion.p>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <span className="benefit-badge text-xs sm:text-sm">
                Beta gratuita · Streamers LATAM · Acceso limitado
              </span>
            </motion.div>

            {/* Countdown - Desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden lg:block"
            >
              <p className="text-muted-foreground text-xs uppercase tracking-widest mb-3">
                Lanzamiento Beta en:
              </p>
              <CountdownTimer />
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              {/* Form Header */}
              <div className="text-center mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  🔥 Únete a la Beta
                </h2>
                <p className="text-sm text-muted-foreground">
                  Déjanos tus datos y te avisamos cuando abra la beta
                </p>
              </div>

              {/* Countdown - Mobile only */}
              <div className="lg:hidden mb-5">
                <p className="text-muted-foreground text-xs uppercase tracking-widest mb-2 text-center">
                  Lanzamiento en:
                </p>
                <CountdownTimer />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="hero-name" className="text-foreground text-sm">
                    Nombre
                  </Label>
                  <Input
                    id="hero-name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border text-sm py-2.5"
                    maxLength={100}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="hero-email" className="text-foreground text-sm">
                    Correo electrónico
                  </Label>
                  <Input
                    id="hero-email"
                    type="email"
                    placeholder="Tu correo"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border text-sm py-2.5"
                    maxLength={255}
                  />
                </div>

                {/* Discord (optional) */}
                <div className="space-y-1.5">
                  <Label htmlFor="hero-discord" className="text-muted-foreground text-sm">
                    Usuario de Discord <span className="text-muted-foreground/60">(opcional)</span>
                  </Label>
                  <Input
                    id="hero-discord"
                    placeholder="@usuario"
                    value={formData.discord}
                    onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                    className="bg-background border-border text-sm py-2.5"
                    maxLength={100}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-pink-500 to-secondary hover:from-pink-600 hover:to-purple-600 text-white font-bold py-5 text-base mt-2"
                >
                  {isLoading ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Bell className="w-4 h-4 mr-2" />
                      Quiero acceso a la beta
                    </>
                  )}
                </Button>

                {/* Microcopy */}
                <p className="text-center text-muted-foreground text-xs">
                  Usamos tu correo solo para avisarte sobre Clipealo.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
