import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Bell } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const WaitlistFormSection = () => {
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
    <section id="aplicar-beta" className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-glow-bg pointer-events-none opacity-20" />
      <div className="relative z-10 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                📋 Únete a la lista de espera
              </h2>
              <p className="text-sm text-muted-foreground">
                Sé de los primeros en enterarte cuando lancemos. Precios y novedades vienen pronto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="wl-name" className="text-foreground text-sm">Nombre</Label>
                <Input
                  id="wl-name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border text-sm py-2.5"
                  maxLength={100}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="wl-email" className="text-foreground text-sm">Correo electrónico</Label>
                <Input
                  id="wl-email"
                  type="email"
                  placeholder="Tu correo"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border text-sm py-2.5"
                  maxLength={255}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="wl-discord" className="text-muted-foreground text-sm">
                  Usuario de Discord <span className="text-muted-foreground/60">(opcional)</span>
                </Label>
                <Input
                  id="wl-discord"
                  placeholder="@usuario"
                  value={formData.discord}
                  onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                  className="bg-background border-border text-sm py-2.5"
                  maxLength={100}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-pink-500 to-secondary hover:from-pink-600 hover:to-purple-600 text-white font-bold py-5 text-base mt-2"
              >
                {isLoading ? 'Enviando...' : (
                  <>
                    <Bell className="w-4 h-4 mr-2" />
                    Quiero estar en la lista
                  </>
                )}
              </Button>

              <p className="text-center text-muted-foreground text-xs">
                Usamos tu correo solo para avisarte sobre Clipealo.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistFormSection;
