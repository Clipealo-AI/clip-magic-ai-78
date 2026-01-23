import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Bell, CheckCircle } from 'lucide-react';

const NotifySection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa tu nombre y correo.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
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
    
    // Simulate form submission (replace with actual backend call)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "¡Listo!",
      description: "Te avisaremos cuando haya novedades.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 bg-bg-secondary">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-card border border-border rounded-2xl p-8 text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">
            ¡Te tenemos en cuenta!
          </h3>
          <p className="text-muted-foreground">
            Te avisaremos cuando el beta esté listo o cuando abramos nuevos cupos.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-bg-secondary">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            ¿Quieres que te avisemos?
          </h2>
          <p className="text-muted-foreground">
            Si no te uniste al Discord ahora, déjanos tus datos y te avisamos cuando el beta esté listo o cuando abramos nuevos cupos.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <div className="grid gap-5">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="notify-name" className="text-foreground">
                Nombre
              </Label>
              <Input
                id="notify-name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border"
                maxLength={100}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="notify-email" className="text-foreground">
                Correo electrónico
              </Label>
              <Input
                id="notify-email"
                type="email"
                placeholder="Tu correo"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border"
                maxLength={255}
              />
            </div>

            {/* Discord (optional) */}
            <div className="space-y-2">
              <Label htmlFor="notify-discord" className="text-muted-foreground">
                Usuario de Discord <span className="text-muted-foreground/60">(opcional)</span>
              </Label>
              <Input
                id="notify-discord"
                placeholder="@usuario (si ya lo tienes)"
                value={formData.discord}
                onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                className="bg-background border-border"
                maxLength={100}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-secondary hover:from-pink-600 hover:to-purple-600 text-white font-bold py-6 text-lg mt-2"
            >
              {isLoading ? (
                'Enviando...'
              ) : (
                <>
                  <Bell className="w-5 h-5 mr-2" />
                  Quiero que me avisen
                </>
              )}
            </Button>

            {/* Microcopy */}
            <p className="text-center text-muted-foreground text-sm">
              Usamos tu correo solo para avisarte sobre Clipealo.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default NotifySection;
