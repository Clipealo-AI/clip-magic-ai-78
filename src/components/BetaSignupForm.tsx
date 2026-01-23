import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle } from 'lucide-react';

const contentTypes = [
  { value: 'gaming', label: 'Gaming' },
  { value: 'reacciones', label: 'Reacciones' },
  { value: 'irl', label: 'IRL' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'educacion', label: 'Educación' },
  { value: 'musica', label: 'Música' },
  { value: 'otro', label: 'Otro' },
];

const frequencies = [
  { value: 'diario', label: 'Todos los días' },
  { value: '4-6', label: '4-6 veces por semana' },
  { value: '2-3', label: '2-3 veces por semana' },
  { value: '1', label: '1 vez por semana' },
  { value: 'ocasional', label: 'Ocasionalmente' },
];

const BetaSignupForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    contentType: '',
    frequency: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.discord.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa nombre, correo y usuario de Discord.",
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
      title: "¡Aplicación enviada!",
      description: "Te contactaremos pronto por Discord.",
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          ¡Gracias por aplicar!
        </h3>
        <p className="text-muted-foreground">
          Revisaremos tu aplicación y te contactaremos por Discord muy pronto.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
        ¿Prefieres no usar Discord?
      </h3>
      <p className="text-muted-foreground text-center mb-8">
        Déjanos tus datos y te buscamos nosotros.
      </p>

      <div className="grid gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Nombre <span className="text-pink-400">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-background border-border"
            maxLength={100}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Correo electrónico <span className="text-pink-400">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-background border-border"
            maxLength={255}
          />
        </div>

        {/* Discord */}
        <div className="space-y-2">
          <Label htmlFor="discord" className="text-foreground">
            Usuario de Discord <span className="text-pink-400">*</span>
          </Label>
          <Input
            id="discord"
            placeholder="usuario#1234 o @usuario"
            value={formData.discord}
            onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
            className="bg-background border-border"
            maxLength={100}
          />
        </div>

        {/* Content Type */}
        <div className="space-y-2">
          <Label className="text-foreground">
            ¿Qué tipo de contenido creas?
          </Label>
          <Select
            value={formData.contentType}
            onValueChange={(value) => setFormData({ ...formData, contentType: value })}
          >
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              {contentTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Frequency */}
        <div className="space-y-2">
          <Label className="text-foreground">
            ¿Con qué frecuencia streameas?
          </Label>
          <Select
            value={formData.frequency}
            onValueChange={(value) => setFormData({ ...formData, frequency: value })}
          >
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              {frequencies.map((freq) => (
                <SelectItem key={freq.value} value={freq.value}>
                  {freq.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-pink-500 to-secondary hover:from-pink-600 hover:to-purple-600 text-white font-bold py-6 text-lg"
        >
          {isLoading ? (
            'Enviando...'
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Enviar aplicación
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
};

export default BetaSignupForm;
