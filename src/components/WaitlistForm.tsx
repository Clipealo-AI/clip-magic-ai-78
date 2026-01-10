import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Sparkles } from 'lucide-react';
import SuccessModal from './SuccessModal';

const formSchema = z.object({
  name: z.string().min(3, 'Ingresa tu nombre completo').max(100),
  channelName: z.string().min(2, 'Ingresa el nombre de tu canal').max(50),
  email: z.string().email('Ingresa un correo válido'),
  whatsapp: z.string().optional(),
  platforms: z.array(z.string()).min(1, 'Selecciona al menos una plataforma'),
  contentType: z.array(z.string()).min(1, 'Selecciona al menos un tipo de contenido'),
  desiredFeatures: z.string().min(10, 'Cuéntanos qué funcionalidades te gustaría ver (mín. 10 caracteres)').max(500),
});

type FormData = z.infer<typeof formSchema>;

const platformOptions = [
  'YouTube',
  'Twitch',
  'Kick',
  'TikTok',
  'Instagram',
  'Facebook Gaming',
];

const contentTypeOptions = [
  'Gaming',
  'IRL/Vlogs',
  'Educativo',
  'Música/Arte',
  'Deportes/Fitness',
];

const WaitlistForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [waitlistPosition] = useState(247);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platforms: [],
      contentType: [],
    },
  });

  const selectedPlatforms = watch('platforms') || [];
  const selectedContentTypes = watch('contentType') || [];

  const togglePlatform = (platform: string) => {
    const current = selectedPlatforms;
    if (current.includes(platform)) {
      setValue('platforms', current.filter((p) => p !== platform));
    } else {
      setValue('platforms', [...current, platform]);
    }
  };

  const toggleContentType = (type: string) => {
    const current = selectedContentTypes;
    if (current.includes(type)) {
      setValue('contentType', current.filter((t) => t !== type));
    } else {
      setValue('contentType', [...current, type]);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl"
          style={{ boxShadow: '0 0 60px hsla(290, 78%, 52%, 0.15)' }}
        >
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              👤 Nombre completo <span className="text-pink">*</span>
            </label>
            <input
              {...register('name')}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Tu nombre completo"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                ⚠️ {errors.name.message}
              </p>
            )}
          </div>

          {/* Channel Name */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              🎮 Nombre de tu canal <span className="text-pink">*</span>
            </label>
            <input
              {...register('channelName')}
              className={`form-input ${errors.channelName ? 'error' : ''}`}
              placeholder="@tucanal"
            />
            <p className="text-muted-foreground text-sm mt-2">
              Ej: @tucanal en YouTube/Twitch/Kick
            </p>
            {errors.channelName && (
              <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                ⚠️ {errors.channelName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-foreground mb-2">
              📧 Correo electrónico <span className="text-pink">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="tu@email.com"
            />
            <p className="text-muted-foreground text-sm mt-2">
              Para enviarte actualizaciones del MVP
            </p>
            {errors.email && (
              <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                ⚠️ {errors.email.message}
              </p>
            )}
          </div>

          {/* WhatsApp */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-2">
              📱 WhatsApp (opcional)
            </label>
            <input
              {...register('whatsapp')}
              className="form-input"
              placeholder="+51 999 999 999"
            />
          </div>

          {/* Platforms */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-3">
              🎮 ¿Qué plataformas usas? <span className="text-pink">*</span>
            </label>
            <p className="text-muted-foreground text-sm mb-4">
              Puedes seleccionar varias
            </p>
            <div className="grid grid-cols-2 gap-3">
              {platformOptions.map((platform) => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => togglePlatform(platform)}
                  className={`custom-checkbox ${
                    selectedPlatforms.includes(platform) ? 'selected' : ''
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                      selectedPlatforms.includes(platform)
                        ? 'gradient-primary border-transparent'
                        : 'border-border bg-background'
                    }`}
                  >
                    {selectedPlatforms.includes(platform) && (
                      <span className="text-white text-xs font-bold">✓</span>
                    )}
                  </div>
                  <span className="text-foreground font-medium">{platform}</span>
                </button>
              ))}
            </div>
            {errors.platforms && (
              <p className="text-destructive text-sm mt-3 flex items-center gap-1">
                ⚠️ {errors.platforms.message}
              </p>
            )}
          </div>

          {/* Content Type */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-3">
              🎬 ¿Qué tipo de contenido creas? <span className="text-pink">*</span>
            </label>
            <p className="text-muted-foreground text-sm mb-4">
              Puedes seleccionar varios
            </p>
            <div className="grid grid-cols-2 gap-3">
              {contentTypeOptions.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleContentType(type)}
                  className={`custom-checkbox ${
                    selectedContentTypes.includes(type) ? 'selected' : ''
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                      selectedContentTypes.includes(type)
                        ? 'gradient-primary border-transparent'
                        : 'border-border bg-background'
                    }`}
                  >
                    {selectedContentTypes.includes(type) && (
                      <span className="text-white text-xs font-bold">✓</span>
                    )}
                  </div>
                  <span className="text-foreground font-medium">{type}</span>
                </button>
              ))}
            </div>
            {errors.contentType && (
              <p className="text-destructive text-sm mt-3 flex items-center gap-1">
                ⚠️ {errors.contentType.message}
              </p>
            )}
          </div>

          {/* Desired Features */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-foreground mb-2">
              💡 ¿Qué funcionalidades te gustaría ver? <span className="text-pink">*</span>
            </label>
            <textarea
              {...register('desiredFeatures')}
              className={`form-input min-h-[120px] resize-y ${
                errors.desiredFeatures ? 'error' : ''
              }`}
              placeholder="Ej: Detección de momentos épicos, subtítulos en español, formatos verticales, integración con..."
            />
            {errors.desiredFeatures && (
              <p className="text-destructive text-sm mt-2 flex items-center gap-1">
                ⚠️ {errors.desiredFeatures.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="btn-cta w-full flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Procesando...
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6" />
                Unirme a la Waitlist
              </>
            )}
          </motion.button>

          {/* Counter */}
          <p className="text-center text-muted-foreground mt-6 flex items-center justify-center gap-2">
            ✨ <span className="gradient-text font-bold">{waitlistPosition}</span> streamers ya están dentro
          </p>
        </form>
      </motion.div>

      {showSuccess && (
        <SuccessModal
          position={waitlistPosition + 1}
          email={watch('email')}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  );
};

export default WaitlistForm;
